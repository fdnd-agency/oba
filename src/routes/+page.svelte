<script>
	// Hier import ik de components die nodig zijn in deze pagina
	import { Card, LinkButton, LogoBlue, LogoRed, LogoBlack, Search, Nav, HeroLogo } from '$lib/index.js';
	import { onMount } from 'svelte';

	export let data;

	const hygraphData = data.hygraphData;
	const homepage = hygraphData.homepages;

	// Hier maak ik carrousels dat ik vervolgens loop uit een array
	onMount(() => {
		const sliders = [
			{ id: 1, selector: '#voorbeeld-1 .carrousel-a' },
			{ id: 2, selector: '#voorbeeld-2 .carrousel-a' },
			{ id: 3, selector: '#voorbeeld-3 .carrousel-a' },
			{ id: 4, selector: '#voorbeeld-4 .carrousel-a' }
		];

		// Loop through each slider
		sliders.forEach((slider) => {
			const prevButton = document.getElementById(`button-prev-${slider.id}`);
			const nextButton = document.getElementById(`button-next-${slider.id}`);
			const el = document.querySelector(slider.selector);

			// Add event listeners to prev and next buttons
			prevButton.addEventListener('click', () => {
				el.scrollBy({ left: -1 * 200 });
			});

			nextButton.addEventListener('click', () => {
				el.scrollBy({ left: 200 });
			});
		});

		// PE Zet iets uit wanner Javascript niet werkt
		// Define array of class names
		const classNames = ['.disable-js', '.disable-js-2', '.disable-js-3', '.disable-js-4'];

		// Iterate over each class name
		classNames.forEach((className) => {
			const icon = document.querySelector(className);
			icon?.classList.toggle(className.slice(1)); // Toggle class removing the dot
		});
	});
</script>

<header>
	<Nav />
	<Search
		cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}
	/>
	<!-- menu  -->
</header>

<section class="hero-text">
	<article>
		<h1>
			Welkom <span>{hygraphData.families[0].name}</span> bij OBA!
		</h1>
		<p>{homepage[0].homepageText}</p>
	</article>
	<HeroLogo />
</section>


<section>
	<article>
		<h2>Jouw recente leeslijst: <span>boeken<span></span></span></h2>
		<p>{homepage[1].homepageText}</p>
		<LinkButton buttonText="Bekijk Leeslijst" buttonLink="/leeslijst" />
	</article>

	<article class="carousel-container">
		<div class="disable-js">
			<div class="nav-btn-right">
				<div id="button-prev-1" class="carousel-btn prev-btn">
					<button class="icon icon-right">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							><path
								d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
							/></svg
						>
					</button>
				</div>
				<div id="button-next-1" class="carousel-btn next-btn">
					<button class="icon icon-right">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							><path
								d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
							/></svg
						>
					</button>
				</div>
			</div>
		</div>
		<div id="voorbeeld-1">
			<div class="carrousel-a">
				{#each data.apiBooks.results.slice(0, 5) as book}
					<Card
						bookAuthor={book.authors}
						bookTitle={book.titles}
						bookUrl={book.coverimages}
						bookDetailLink={book.detailLink}
					/>
				{/each}
			</div>
		</div>
	</article>
</section>

<section>
	<article class="readinglist-text">
		<h2>
			Jouw recente leeslijst: <span>e-boeken<span> </span></span>
		</h2>
		<p>{homepage[2].homepageText}</p>
		<LinkButton buttonText="Bekijk Leeslijst" buttonLink="/leeslijst" />
	</article>

	<article class="carousel-container">
		<div class="disable-js-2">
			<div class="nav-btn-left">
				<div id="button-prev-2" class="carousel-btn prev-btn">
					<button class="icon icon-left">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							><path
								d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
							/></svg
						>
					</button>
				</div>
				<div id="button-next-2" class="carousel-btn next-btn">
					<button class="icon icon-left">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							><path
								d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
							/></svg
						>
					</button>
				</div>
			</div>
		</div>
		<div id="voorbeeld-2">
			<div class="carrousel-a">
				{#each data.apiEBooks.results.slice(0, 5) as book}
					<Card
						bookAuthor={book.authors}
						bookTitle={book.titles}
						bookUrl={book.coverimages}
						bookDetailLink={book.detailLink}
					/>
				{/each}
			</div>
		</div>
	</article>
</section>

<!-- leeslijst sections zijn precies dezelfde classes, want opmaak is exact hetzelfde elke keer -->

<section class="readinglist-books-section">
	<article>
		<h2>Jouw recente leeslijst: <span>luisterboeken<span></span></span></h2>
		<p>{homepage[3].homepageText}</p>
		<LinkButton buttonText="Bekijk Leeslijst" buttonLink="/leeslijst" />
	</article>
	<article class="carousel-container">
		<div class="disable-js-3">
			<div class="nav-btn-right">
				<div id="button-prev-3" class="carousel-btn prev-btn">
					<button class="icon icon-right">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							><path
								d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
							/></svg
						>
					</button>
				</div>
				<div id="button-next-3" class="carousel-btn next-btn">
					<button class="icon icon-right">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							><path
								d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
							/></svg
						>
					</button>
				</div>
			</div>
		</div>
		<div id="voorbeeld-3">
			<div class="carrousel-a">
				{#each data.apiAudioBooks.results.slice(0, 5) as book}
					<Card
						bookAuthor={book.authors}
						bookTitle={book.titles}
						bookUrl={book.coverimages}
						bookDetailLink={book.detailLink}
					/>
				{/each}
			</div>
		</div>
	</article>
</section>

<section class="about">
	<article class="about-text">
		<h2>
			Ontdek de Wereld van Leren bij <span>OBA!</span>
		</h2>
		<p>{homepage[4].homepageText}</p>
	</article>
	<div class="disable-js-4">
		<article class="nav-btn-center">
			<div id="button-prev-4" class="carousel-btn prev-btn">
				<button class="icon icon-right">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
						><path
							d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
						/></svg
					>
				</button>
			</div>
			<div id="button-next-4" class="carousel-btn next-btn">
				<button class="icon icon-right">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
						><path
							d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
						/></svg
					>
				</button>
			</div>
		</article>
	</div>
	<article id="voorbeeld-4" class="centerCarousel">
		<div class="carrousel-a">
			{#each hygraphData.activiteitens.slice(0, 5) as activiteiten}
				<a href={activiteiten.activiteitLink}>
					<img
						src={activiteiten.activiteitImage.url}
						alt={activiteiten.activiteitNaam}
						width="300"
						height="200"
					/>
					<h3>{activiteiten.activiteitNaam}</h3>
				</a>
			{/each}
		</div>
	</article>
	<LinkButton buttonText="Meer bekijken" buttonLink="https://www.oba.nl/" />
</section>

<style>
	.disable-js,
	.disable-js-2,
	.disable-js-3,
	.disable-js-4 {
		display: none;
	}

	body {
		height: 1000px;
	}

	.dark {
		background-color: #18191a;
		color: white;
	}
	
	.carrousel-a {
		display: flex;
		gap: 15px;
	}

	.carrousel-a {
		overflow: auto;
		scroll-behavior: smooth;
	}

	.carrousel-a {
		scroll-snap-type: x mandatory;
	}

	.carrousel-a {
		scrollbar-width: none;
	}

	.nav-btn-center {
		width: 100%;
		padding: 10px;
		display: flex;
		justify-content: center;
	}

	.nav-btn-left {
		display: -webkit-flex;
		width: 100%;
		padding: 10px;
		-webkit-justify-content: flex-start;
	}


	.nav-btn-right {
		display: -webkit-flex;
		width: 100%;
		padding: 10px;
		-webkit-justify-content: flex-end;
	}

	.carousel-btn {
		position: static;
		border-radius: 23px;
		border: none;
	}

	.icon-left {
		background-color: #e5e5e5;
	}

	.icon-left:hover {
		background-color: #cecece;
		transition: 0.5s;
	}

	.icon-right:hover {
		background-color: #e5e5e5;
		transition: 0.5s;
	}

	.carousel-btn {
		position: static;
		border-radius: 23px;
		border: none;
	}

	.prev-btn {
	}

	.next-btn {
		margin-inline-start: 15px;
	}

	.icon {
		height: 45px;
		width: 45px;
		border-radius: 30px;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-align-items: center;
		-webkit-box-align: center;
		border: none;
		cursor: pointer;
	}

	section {
		margin: 2rem auto;
		padding: 1rem;
		display: flex;
		flex-direction: column;
	}

	section:nth-child(2n + 1) {
		background-color: var(--primary-light-color);
	}

	article {
		padding: 4rem 0;
	}

	p {
		padding: 2rem 0;
	}

	.carousel-container {
		width: 580px;
		max-width: 90%;
		padding: 10px;
	}

	.carousel {
		gap: 10px;
		display: flex;
		overflow: auto;
		scroll-snap-type: x mandatory; /* Zorgt ervoor dat de img snapt */
		scrollbar-width: none;
	}

	a {
		color: var(--primary-dark-color);
		text-decoration: none;
	}

	span {
		color: var(--primary-accent-color);
	}
	.hero-text {
		justify-content: flex-start;
	}

	@keyframes tostart {
		75% {
			left: 0;
		}
		95% {
			left: -300%;
		}
		98% {
			left: -300%;
		}
		99% {
			left: 0;
		}
	}

	@media only screen and (min-width: 45rem) {
		section {
			height: 65vh;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 4rem;
		}

		section:nth-of-type(odd):not(.hero-text):not(:last-child) {
			flex-direction: row-reverse;
		}

		section:nth-child(2) {
			width: 85%;
		}
		/* article {
			width: 45%;
			padding: 5rem 0;
		} */

		.about {
			height: 100%;
			display: flex;
			gap: 1.5rem;
			flex-direction: column !important;
			padding-bottom: 5rem;
		}
		.about-text {
			text-align: center;
			padding-bottom: 0;
		}
		.centerCarousel {
			display: flex;
			gap: 10px;
			width: 70vw;
			max-width: 90%;
			padding: 0 1rem;
			overflow-x: scroll;
			scroll-snap-type: x mandatory;
			scroll-behavior: smooth;
			animation-name: tostart;
			scrollbar-width: none;
		}
		.centerCarousel a {
			text-decoration: none;
			color: var(--primary-dark-color);
		}
	}
</style>
