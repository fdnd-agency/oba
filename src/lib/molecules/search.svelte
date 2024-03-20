<script>
	import { Card } from '$lib/index.js';
	import { onMount } from 'svelte';
	import { Searchsvg } from '$lib/index.js';

	export let cardData;
	let value = '';
	let error = '';
	let showDialog = false;

	function openDialog() {
		showDialog = true;
	}

	function closeDialog() {
		showDialog = false;
		error = '';
	}
	// console.log(cardData)

	onMount(() => {
		const searchInput = document.getElementById('zoekinput');
		const searchStyle = document.getElementsByClassName('button');

		searchInput.addEventListener('input', submitted);

		// PE Zet iets uit wanner Javascript niet werkt
		const icon = document.querySelector('.disable-js');
		icon?.classList.toggle('disable-js');

		return () => {
			// Cleanup event listener when component is unmounted
			searchInput.removeEventListener('input', submitted);
		};
	});

	function submitted(event) {
		event.preventDefault();

		const searchValue = event.target.value.toLowerCase();
		const filteredCards = Object.values(cardData).filter((card) =>
			card.frabl.key1.toLowerCase().includes(searchValue)
		);

		if (filteredCards.length === 0) {
			error = 'Geen resultaten gevonden';
		} else {
			cardData = filteredCards;
			error = '';
		}
		if (searchValue.trim() === '') {
			closeDialog();
		}
	}
</script>

<section class="disable-js">
	<div on:click={openDialog} class="button">
		<form action="" on:submit={submitted}>
			<input
				id="zoekinput"
				type="text"
				placeholder="Zoek.."
				name="search"
				bind:value
				autocomplete="off"
			/>
			<a class="searchlink" href={value}>
				<img class="zoek-icon" src={Searchsvg} alt="submit" width="40" height="35" />
			</a>
		</form>
	</div>
	{#if showDialog}
		<div class="model">
			<p class="title-hero">Je zoekt: <span>{value}</span></p>
			<article>
				<button class="close-button" on:click={closeDialog}>X</button>
			</article>
			{#if error}
				<h2>{error}</h2>
			{:else}
				<ul>
					{#each Object.values(cardData) as card}
						<a href={card.detailLink}>
							<li class="card-data">
								<img
									src={card.coverimages[0]}
									alt="foto van {card.frabl.key1}"
									loading="lazy"
									width="50"
									height="50"
								/>
								<p class="booktitle">{card.frabl.key1}</p>
							</li>
						</a>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</section>

<style>
	.card-data:hover {
		background-color: var(--primary-light-color);
		padding: 0.5rem;
	}

	.card-data:hover p {
		color: rgb(61, 61, 61);
	}

	.button {
		all: unset;
		position: fixed;
		left: 25%;
		top: 0;
		border-radius: 0 0 1rem 1rem;
		background-color: var(--primary-accent-color);
		color: var(--primary-light-color);
		text-decoration: none;
		z-index: 999;
	}

	.title-hero {
		font:
			700 20px 'Oswald',
			sans-serif;
	}

	.model {
		backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
		-webkit-backdrop-filter: blur(10px); /* Safari support */
		/* Fallback for browsers that do not support backdrop-filter */
		position: fixed;
		left: 25%;
		top: 9.5%;
		width: 70vw;
		height: 28.95rem;
		box-shadow:
			rgba(0, 0, 0, 0.25) 0 0.875rem 1.75rem,
			rgba(0, 0, 0, 0.22) 0px 0.625rem 0.625rem;
		border-radius: 0.625rem;
		padding: 1rem;
		overflow-y: auto;
		z-index: 999;
		margin-top: 1.1rem;
		opacity: 97%;
		background: var(--primary-accent-color);
	}

	form {
		text-align: center;
		display: flex;
		align-items: center;
		padding: 1.7rem;
	}

	input {
		padding: 0.8rem 0.2rem;
		border-radius: 0.5rem;
		border: none;
	}

	button {
		all: unset;
		height: 100px;
		background-color: var(--primary-accent-color);
		color: var(--primary-light-color);
	}

	.searchlink {
		margin-left: 1rem;
	}

	.close-button {
		position: absolute;
		right: 0%;
		margin-top: -43rem;
		padding: 0.5rem 1rem;
		border-radius: var(--primary-table-border-radius);
		background-color: var(--primary-light-color);
		color: var(--primary-dark-color);
		font-weight: bold;
	}

	ul {
		padding: 2.5rem 1.5rem 1.5rem 1.5rem;
	}

	a {
		text-decoration: none;
		color: var(--primary-light-color);
	}

	.zoek-icon {
		height: 33px;
		display: grid;
	}

	p,
	span {
		color: var(--primary-light-color);
	}

	.booktitle::first-letter {
		text-transform: capitalize;
	}

	li {
		list-style: none;
		/* border-bottom: 1px solid rgb(172, 171, 171); */
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.5rem;
		transition: all 0.3s ease;
	}
	span {
		font-weight: 700;
	}
	h2 {
		color: var(--primary-light-color);
		padding: 1.5rem;
		text-align: center;
	}
	article {
		display: flex;
		align-items: center;
		top: 85%;
		justify-content: space-between;
		position: sticky;
	}

	.disable-js {
		display: none;
	}

	@media only screen and (max-width: 650px) {
		.button {
			border-radius: 0px 0 10px 0px;
		}
		.model {
			width: 100vw;
			left: 0;
			border-radius: 0;
		}
	}
</style>
