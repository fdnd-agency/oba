import { gql } from 'graphql-request'
import { hygraph } from '$lib/server/hygraph'
import { responseInit } from '$lib/server/responseInit'

export async function GET({ url }) {
  let first = Number(url.searchParams.get('first') ?? 5)
  let skip = Number(url.searchParams.get('skip') ?? 0)
  let direction = url.searchParams.get('direction') === 'ASC' ? 'ASC' : 'DESC'
  let orderBy = (url.searchParams.get('orderBy') ?? 'publishedAt') + '_' + direction

  const query = gql`
    query getStudieplekReservering($first: Int, $skip: Int, $orderBy: ReservationOrderByInput) {
      studieplekReservering(first: $first, skip: $skip, orderBy: $orderBy) {
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
  if (!requestData.obaId || typeof requestData.obaId !== 'string') {
    errors.push({ field: 'obaId', message: 'obaId should exist and have a string value' })
  }
  if (!requestData.userName || typeof requestData.userName !== 'string') {
    errors.push({ field: 'userName', message: 'userName should exist and have a string value' })
  }
  if (!requestData.date || typeof requestData.date !== 'string') {
    errors.push({ field: 'date', message: 'date should exist and have a date value' })
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
    mutation createReservation($obaId: String!, $userName: String!, $date: Date!) {
      createReservation(data: { obaId: $obaId, userName: $userName, date: $date }) {
        id
      }
    }
  `
  // Bereid publiceren voor
  const publication = gql`
    mutation publishReservation($id: ID!) {
      publishReservation(where: { id: $id }, to: PUBLISHED) {
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
          .request(publication, { id: data.createReservation.id ?? null })
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
      data: data && data.publishReservation,
    }),
    responseInit
  )
}
