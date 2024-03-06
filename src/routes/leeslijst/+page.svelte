<script>
	import { Card, Nav, Search } from '$lib/index.js';
	import { onMount } from 'svelte';

	export let data;

</script>

<header>
	<Nav />
	<Search
		cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}
	/>
</header>
<main>
	<h1>Leeslijst</h1>

	<details>
		<summary>Boeken</summary>

		<section class="grid">
			{#each data.apiBooks.results.slice(0, 15) as book}
				<Card
					bookAuthor={book.authors}
					bookTitle={book.titles}
					bookUrl={book.coverimages}
					bookDetailLink={book.detailLink}
				/>
			{/each}
		</section>
	</details>


	<section class="overview grid">
		{#each data.apiBooks.results.slice(-5) as book}
			<Card
				bookAuthor={book.authors}
				bookTitle={book.titles}
				bookUrl={book.coverimages}
				bookDetailLink={book.detailLink}
			/>
		{/each}
	</section>

	<details>
		<summary>E-books</summary>

		<section class="grid">
			{#each data.apiEBooks.results.slice(0, 15) as book}
				<Card
					bookAuthor={book.authors}
					bookTitle={book.titles}
					bookUrl={book.coverimages}
					bookDetailLink={book.detailLink}
				/>
			{/each}
		</section>
	</details>


	<section class="overview grid">
		{#each data.apiEBooks.results.slice(-5) as book}
			<Card
				bookAuthor={book.authors}
				bookTitle={book.titles}
				bookUrl={book.coverimages}
				bookDetailLink={book.detailLink}
			/>
		{/each}
	</section>

	<details>
		<summary>Luisterboeken</summary>

		<section class="flex">
			{#each data.apiAudioBooks.results.slice(0, 15) as book}
				<Card
					bookAuthor={book.authors}
					bookTitle={book.titles}
					bookUrl={book.coverimages}
					bookDetailLink={book.detailLink}
				/>
			{/each}
		</section>
	</details>


	<section class=" flex">
		{#each data.apiAudioBooks.results.slice(-5) as book}
			<Card
				bookAuthor={book.authors}
				bookTitle={book.titles}
				bookUrl={book.coverimages}
				bookDetailLink={book.detailLink}
			/>
		{/each}
	</section>

	<details>
		<summary>Activiteiten</summary>
		<section class="grid">
			{#each data.apiBooks.results.slice(0, 15) as book}
				<Card
					bookAuthor={book.authors}
					bookTitle={book.titles}
					bookUrl={book.coverimages}
					bookDetailLink={book.detailLink}
				/>
			{/each}
		</section>
	</details>


	<section class="overview grid">
		{#each data.apiBooks.results.slice(-5) as book}
			<Card
				bookAuthor={book.authors}
				bookTitle={book.titles}
				bookUrl={book.coverimages}
				bookDetailLink={book.detailLink}
			/>
		{/each}
	</section>
</main>

<style>
	main {
		min-height: 100vh;
	}

	.flex {
		display: flex;
		padding-left: 90px;
		gap: 4rem;
	}

	h1 {
		padding: 2rem;
	}

	.overview {
		padding-left: 4.4rem;
	}

	summary {
		font-size: 1.8rem;
		font-weight: 500;
	}

	summary::marker {
		color: var(--primary-accent-color);
	}

	details {
		padding-left: 2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
		justify-items: center;
	}

	/* tablet breakpoint */
	@media (min-width: 40em) {
		section {
			gap: 2rem;
			padding: 2rem;
		}
	}
	@media (max-width: 1035px) {
		.flex {
			display: grid;
			gap: 0;
			grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
			justify-items: center;
		}
	}
</style>
