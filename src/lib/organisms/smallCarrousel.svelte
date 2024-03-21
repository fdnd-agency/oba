<script>
	import { Card } from '$lib/index.js';
	import { onMount } from 'svelte';

	export let cardData;

	// Hier export ik de data zodat ik de data vanuit hygraph kan gebruiken die ik query in de page.server
	onMount(() => {
		// Slider 5: Jouw recente leeslijst: luisterboeken
		var prevButton = document.getElementById('button-prev-5');

		prevButton.addEventListener('click', function () {
			var el = document.querySelector('#voorbeeld-5 .carrousel-a');
			el.scrollBy({ left: -1 * 200 });
		});

		var nextButton = document.getElementById('button-next-5');

		nextButton.addEventListener('click', function () {
			var el = document.querySelector('#voorbeeld-5 .carrousel-a');
			el.scrollBy({ left: 200 });
		});

		// PE Zet iets uit wanner Javascript niet werkt
		const icon = document.querySelector('.disable-js');
		icon?.classList.toggle('disable-js');
	});
</script>

<section>
	<div class="disable-js">
		<div class="nav-btn-right">
			<div id="button-prev-5" class="carousel-btn prev-btn">
				<button class="icon icon-right">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
						><path
							d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
						/></svg
					>
				</button>
			</div>
			<div id="button-next-5" class="carousel-btn next-btn">
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
	<div id="voorbeeld-5">
		<div class="carrousel-a centerCarousel">
			{#each cardData as book}
				<Card
					bookDetailLink={book.detailLink}
					bookUrl={book.image.url}
					bookTitle={book.title}
					bookAuthor={book.author}
				/>
			{/each}
			{#each cardData as book}
				<Card
					bookDetailLink={book.detailLink}
					bookUrl={book.image.url}
					bookTitle={book.title}
					bookAuthor={book.author}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	.centerCarousel {
		display: flex;
		gap: 10px;
		width: 100%;
		max-width: 100%;
		padding: 10px;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		animation-name: tostart;
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

	.icon-right:hover {
		background-color: #cecece;
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
		background-color: #e1e1e1;
		cursor: pointer;
	}

	.disable-js {
		display: none;
	}
</style>
