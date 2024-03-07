<script>
	import { ReservationCard, Nav, Search } from '$lib/index.js';
	export let data;

	import { onMount } from 'svelte';

	onMount(() => {
	});
</script>

<header>
	<Nav />
	<Search
		cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}
	/>
	<!-- menu  -->
</header>

<main>
	<h1>Reserveringen</h1>
	<!-- <div>
        {#each Array(2) as _, i}
            {#each data.hygraphData.uitleengeschiedenis1 as book}
                <ReservationCard 
                    bookDetailLink="{book.detailLink}"
                    bookUrl="{book.image.url}"
                    bookTitle="{book.title}"
                    bookAuthor="{book.author}"
                    bookStatus="{book.beschikbaarheid}"
                />
            {/each}
        {/each}
    </div> -->

	<details>
		<summary>Boeken</summary>
		<section>
			{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
				<ReservationCard
					bookDetailLink={book.detailLink}
					bookUrl={book.image.url}
					bookTitle={book.title}
					bookAuthor={book.author}
					bookStatus={book.beschikbaarheid}
				/>
			{/each}
		</section>
	</details>

	<section class="overview">
		{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
			<ReservationCard
				bookDetailLink={book.detailLink}
				bookUrl={book.image.url}
				bookTitle={book.title}
				bookAuthor={book.author}
				bookStatus={book.beschikbaarheid}
			/>
		{/each}
	</section>

	<details>
		<summary>E-books</summary>
		<section>
			{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
				<ReservationCard
					bookDetailLink={book.detailLink}
					bookUrl={book.image.url}
					bookTitle={book.title}
					bookAuthor={book.author}
					bookStatus={book.beschikbaarheid}
				/>
			{/each}
		</section>
	</details>

	<section class="overview">
		{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
			<ReservationCard
				bookDetailLink={book.detailLink}
				bookUrl={book.image.url}
				bookTitle={book.title}
				bookAuthor={book.author}
				bookStatus={book.beschikbaarheid}
			/>
		{/each}
	</section>

	<details>
		<summary>Luisterboeken</summary>
		<section>
			{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
				<ReservationCard
					bookDetailLink={book.detailLink}
					bookUrl={book.image.url}
					bookTitle={book.title}
					bookAuthor={book.author}
					bookStatus={book.beschikbaarheid}
				/>
			{/each}
		</section>
	</details>

	<section class="overview">
		{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
			<ReservationCard
				bookDetailLink={book.detailLink}
				bookUrl={book.image.url}
				bookTitle={book.title}
				bookAuthor={book.author}
				bookStatus={book.beschikbaarheid}
			/>
		{/each}
	</section>

	<details>
		<summary>Activiteiten</summary>
		<section>
			{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
				<ReservationCard
					bookDetailLink={book.detailLink}
					bookUrl={book.image.url}
					bookTitle={book.title}
					bookAuthor={book.author}
					bookStatus={book.beschikbaarheid}
				/>
			{/each}
		</section>
	</details>

	<section class="overview">
		{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
			<ReservationCard
				bookDetailLink={book.detailLink}
				bookUrl={book.image.url}
				bookTitle={book.title}
				bookAuthor={book.author}
				bookStatus={book.beschikbaarheid}
			/>
		{/each}
	</section>
</main>

<style>
	main {
		min-height: 100vh;
	}
	h1 {
		padding: 2rem;
	}

	.overview {
		padding-left: 4rem;
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

	section {
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
</style>
