import { gql } from 'graphql-request'
import { hygraph } from '$lib/server/hygraph'
import { responseInit } from '$lib/server/responseInit'

export async function GET({ url }) {
  let id = url.searchParams.get('id') ?? ''

  const query = gql`
    query getReservations($id: ID!) {
      reservations(where: { smartzone: { id: $id } }) {
        obaId
        memberName
        date
        reservationType
      }
    }
  `

  const data = await hygraph.request(query, { id })
  return new Response(JSON.stringify(data), responseInit)
}

export async function POST({ request }) {
  const requestData = await request.json()
  let errors = []

  // Controleer de request data op juistheid
  if (!requestData.obaId || typeof requestData.obaId !== 'string') {
    errors.push({ field: 'obaId', message: 'obaId should exist and have a string value' })
  }
  if (!requestData.memberName || typeof requestData.memberName !== 'string') {
    errors.push({ field: 'memberName', message: 'memberName should exist and have a string value' })
  }
  if (!requestData.date || typeof requestData.date !== 'date') {
    errors.push({ field: 'date', message: 'dateEnd should exist and have a date value' })
  }
  if (!requestData.reservationType || typeof requestData.reservationType !== 'reservationType') {
    errors.push({ field: 'reservationType', message: 'reservationType should exist and have a reservationType value' })
  }


  // Als we hier al errors hebben in de form data sturen we die terug
  if (errors.length > 0) {
    return new Response(
      JSON.stringify({
        method: 'POST',
        working: 'yes',
        succes: false,
        errors: errors,
      })
    )

    // Geen errors, voeg de reservation toe
  } else {
    // Bereid de mutatie voor
    const mutation = gql`
      mutation createReservation($obaId: String!, $memberName: Date!, $date: Date!, $reservationType: reservationType) {
        createReservation(data: { obaId: $obaId, memberName: $memberName, date: $date, reservationType: $reservationType }) {
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

    return new Response(
      JSON.stringify({
        method: 'POST',
        working: 'yes',
        success: data && data.publishReservation ? true : false,
        data: data && data.publishReservation,
        errors: errors,
      }),
      responseInit
    )
  }
}
