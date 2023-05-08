import { gql } from 'graphql-request'
import { hygraph } from '$lib/server/hygraph'
import { responseInit } from '$lib/server/responseInit'

export async function GET({ url }) {
  let first = Number(url.searchParams.get('first') ?? 20)
  let skip = Number(url.searchParams.get('skip') ?? 0)
  let direction = url.searchParams.get('direction') === 'ASC' ? 'ASC' : 'DESC'
  let orderBy = (url.searchParams.get('orderBy') ?? 'publishedAt') + '_' + direction
  let id = url.searchParams.get('id') ?? false
  let query
  let data
  
  if (id) {
    query = gql`
      query getVestigingen($id: ID) {
        vestigingen(where: {id: $id}) {
          id
          naam
          adres
          foto {
            height
            width
            original: url
            small: url(transformation: { image: { resize: { width: 500, fit: clip } } })
            originalAsWebP: url(transformation: { document: { output: { format: webp } } })
            smallAsWebP: url(
              transformation: { image: { resize: { width: 500, fit: clip } }, document: { output: { format: webp } } }
            )
          }
          geolocatie {
            latitude
            longitude
          }
          studieplekken
        }
      }
    `
    data = await hygraph.request(query, { id })
  } else {
    
    query = gql`
      query getVestigingen($first: Int, $skip: Int, $orderBy: VestigingOrderByInput) {
        vestigingen(first: $first, skip: $skip, orderBy: $orderBy) {
          id
          naam
          adres
          foto {
            height
            width
            original: url
            small: url(transformation: { image: { resize: { width: 500, fit: clip } } })
            originalAsWebP: url(transformation: { document: { output: { format: webp } } })
            smallAsWebP: url(
              transformation: { image: { resize: { width: 500, fit: clip } }, document: { output: { format: webp } } }
            )
          }
          geolocatie {
            latitude
            longitude
          }
          studieplekken
        }
      }
    `
    data = await hygraph.request(query, { first, skip, orderBy })
  }
  return new Response(JSON.stringify(data), responseInit)
}