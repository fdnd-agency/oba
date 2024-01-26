import { PUBLIC_API_KEY } from '$env/static/public';
export async function load({ params }) {
	const { zoekresultaten } = params;

	const publicKey = PUBLIC_API_KEY;
	const urlBase = 'https://zoeken.oba.nl/api/v1/';
	const urlQuery = '?q=';
	const urlKey = `&authorization=${publicKey}`;
	const urlSearch = 'search/';
	const urlOutput = '&refine=true&output=json';
	const defaultUrlSearch = urlBase + urlSearch + urlQuery + zoekresultaten + urlKey + urlOutput;

	return (await fetch(defaultUrlSearch)).json();
}
