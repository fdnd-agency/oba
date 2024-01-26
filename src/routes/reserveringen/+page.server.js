import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';
import { PUBLIC_API_KEY } from '$env/static/public';

export async function load() {
	let query = gql`
		query uitleenGeschiedenis {
			uitleengeschiedenis1 {
				image {
					url
				}
				title
				author
				category
				inleverdatum
				detailLink
				beschikbaarheid
			}
		}
	`;

	const hygraphData = await hygraph.request(query);

	const publicKey = PUBLIC_API_KEY;

	const space = '%20';
	const bookItems = 'boeken';
	const EbookItems = 'e-books';
	const audioItems = 'luisterboeken';
	const urlSearch = 'search/';
	const urlBase = 'https://zoeken.oba.nl/api/v1/';
	const urlQuery = '?q=';
	const urlDefault = 'special:all';
	const urlKey = `&authorization=${publicKey}`;
	const urlOutput = '&refine=true&output=json';
	const defaultUrlBooks =
		urlBase + urlSearch + urlQuery + urlDefault + space + bookItems + urlKey + urlOutput;
	const defaultUrleBooks =
		urlBase + urlSearch + urlQuery + urlDefault + space + EbookItems + urlKey + urlOutput;
	const defaultUrlAudioBooks =
		urlBase + urlSearch + urlQuery + urlDefault + space + audioItems + urlKey + urlOutput;

	const responseBooks = await fetch(defaultUrlBooks);

	const responseEBooks = await fetch(defaultUrleBooks);

	const responseAudioBooks = await fetch(defaultUrlAudioBooks);

	const apiBooks = await responseBooks.json();
	const apiAudioBooks = await responseAudioBooks.json();
	const apiEBooks = await responseEBooks.json();

	return {
		apiBooks,
		apiAudioBooks,
		apiEBooks,
		hygraphData
	};
}
