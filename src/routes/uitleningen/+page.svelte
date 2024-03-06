<script>
	import { SmallCarrousel, Table, Nav, Search } from '$lib/index.js';
	export let data;

	import { onMount } from 'svelte';

	onMount(() => {
		// Thema switch
		const body = document.querySelector('body'),
			toggle = document.querySelector('.toggle');

		let getMode = localStorage.getItem('mode');
		if (getMode && getMode === 'dark') {
			body?.classList.add('dark');
			toggle?.classList.add('active');
		}
	});
</script>

<header>
	<Nav />
	<Search
		cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}
	/>
	<!-- menu  -->
</header>

<section>
	<h1>Uitleningen</h1>
	<h2>Nu in bezit:</h2>

	<SmallCarrousel cardData={data.hygraphData.uitleengeschiedenis1} />
</section>

<section>
	<h2>Uitleengeschiedenis</h2>

	<Table tableData={data.hygraphData.uitleengeschiedenis1} />
</section>

<style>
	section {
		margin: 2rem 3rem;
		padding: 1rem;
	}

	h2 {
		margin-bottom: 1rem;
	}
</style>
