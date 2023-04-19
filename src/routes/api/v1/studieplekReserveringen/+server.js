import { gql } from 'graphql-request'
import { hygraph } from '$lib/server/hygraph'
import { responseInit } from '$lib/server/responseInit'

export async function GET({ url }) {
  let first = Number(url.searchParams.get('first') ?? 5)
  let skip = Number(url.searchParams.get('skip') ?? 0)
  let direction = url.searchParams.get('direction') === 'ASC' ? 'ASC' : 'DESC'
  let orderBy = (url.searchParams.get('orderBy') ?? 'publishedAt') + '_' + direction

  const query = gql`
    query getStudieplekReserveringen($first: Int, $skip: Int, $orderBy: StudieplekReserveringOrderByInput) {
      studieplekReserveringen(first: $first, skip: $skip, orderBy: $orderBy) {
        id
        begintijd
        vestiging {
          naam
          adres
        }
      }
    }
  `

  const data = await hygraph.request(query, { first, skip, orderBy })
  return new Response(JSON.stringify(data), responseInit)
}

export async function POST({ request }) {
  const requestData = await request.json()
  let errors = []

  // Controleer de request data op juistheid
  if (!requestData.beginTijd || typeof requestData.beginTijd !== 'string') {
    errors.push({
      field: 'beginTijd',
      message:
        'beginTijd should exist and have a RFC 3339 value (1978-11-20T09:00:00Z). See: https://ijmacd.github.io/rfc3339-iso8601/',
    })
  }
  if (!requestData.vestigingId || typeof requestData.vestigingId !== 'string') {
    errors.push({ field: 'vestigingId', message: 'vestigingId should exist and have a string value' })
  }

  // Als we hier al errors hebben in de form data sturen we die terug
  if (errors.length > 0) {
    return new Response(
      JSON.stringify({
        errors: errors,
      }),
      { status: 400 }
    )
  }

  // Bereid de mutatie voor
  const mutation = gql`
    mutation createStudieplekReservering($beginTijd: DateTime!, $vestigingId: ID!) {
      createStudieplekReservering(data: { begintijd: $beginTijd, vestiging: { connect: { id: $vestigingId } } }) {
        id
      }
    }
  `
  // Bereid publiceren voor
  const publication = gql`
    mutation publishStudieplekReservering($id: ID!) {
      publishStudieplekReservering(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `

  // Voer de mutatie uit
  const data = await hygraph
    .request(mutation, { ...requestData })
    // Stuur de response met created id door
    .then((data) => {
      console.log(data)
      return (
        hygraph
          // Voer de publicatie uit met created id
          .request(publication, { id: data.createStudieplekReservering.id ?? null })
          // Vang fouten af bij het publiceren
          .catch((error) => {
            errors.push({ field: 'HyGraph', message: error })
          })
      )
    })
    // Vang fouten af bij de mutatie
    .catch((error) => {
      errors.push({ field: 'HyGraph', message: error })
    })

  if (errors.length > 0) {
    return new Response(
      JSON.stringify({
        errors: errors,
      }),
      { status: 400 }
    )
  }

  return new Response(
    JSON.stringify({
      data: data && data.publishStudieplekReservering,
    }),
    responseInit
  )
}
