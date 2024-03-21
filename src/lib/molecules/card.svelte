<script>
	import { assets } from '$app/paths';

	// Geeft de lege variabelen mee zodat deze later in de pagina een waarde toegewezen kunnen krijgen zodat dit component ook dynamisch is
	export let bookUrl;
	export let bookTitle;
	export let bookAuthor;
	export let bookDetailLink;
	import { onMount } from 'svelte';

	onMount(() => {
		// Loading skeleton
		// const allSkeleton = document.querySelectorAll('.skeleton');

		// window.addEventListener('load', function () {
		// 	allSkeleton.forEach((item) => {
		// 		item.classList.remove('skeleton');
		// 	});
		// });
	});
</script>

<a href={bookDetailLink}>
	<article
		class="background-image carrousel-picture"
		style="background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)), url('{bookUrl}');"
	>
		<!-- In de html elementen benoem ik lege js variabeles en deze geef ik leeg mee aan de pagina waar dit component wordt gebruikt -->
		<section class="info">
			<p class="p__title">{bookTitle}</p>
			<p>{bookAuthor}</p>
		</section>
	</article>
</a>

<style>
	a:last-child {
		margin-right: 14px;
	}

	a {
		text-decoration: none;
		color: var(--primary-light-color);
		z-index: 2;
		margin-left: 14px;
	}

	article {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 1rem 0rem 1rem 0;
		width: 15rem;
		height: 20rem;
		padding: 1rem;
		border-radius: 0.5rem;
		scroll-snap-align: start;
		transition: 0.3s;
		justify-content: space-between;
		flex-basis: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		scroll-margin: 5px;
		border-radius: 10px;
		box-shadow: 0 4px 6px 1px #ccc;
		background-color: linear-gradient(to top, transparent, #000000);
		z-index: 2;
		scroll-snap-align: center; /* Zorgt ervoor dat de img in het midden snapt */
	}

	.carrousel-article {
	}

	.carrousel-article::-webkit-scrollbar {
		display: none;
	}

	article:hover {
		scale: 103%;
		color: var(--primary-light-color);
		box-shadow: var(--primary-dark-color) 0 0 0.625rem 0;
	}
	.info {
		position: absolute;
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: rgba(var(--primary-dark-color), 0.8);
		margin: 0;
		right: 0;
		left: 0;
		bottom: 0;
		padding: 0.5rem;
		z-index: 2;
	}
	.info > p {
		font-size: 0.9rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	p:last-child {
		padding-top: 1rem;
	}

	.p__title {
		font-weight: bold;
	}

	@media (max-width: 40em) {
		article {
			scroll-snap-align: center;
			width: 13rem;
		}

		.info > p {
			font-size: 0.75rem;
		}
	}

	@media (max-width: 68em) {
		.info > p {
			font-size: 0.8rem;
		}

		article {
			width: 13rem;
		}
	}

	/* SKELETON */
	.skeleton {
		position: relative;
	}
	.skeleton::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		background: linear-gradient(90deg, #eee, #f9f9f9, #eee);
		background-size: 200%;
		animation: skeleton 1s infinite reverse;
	}
	@keyframes skeleton {
		0% {
			background-position: -100% 0;
		}
		100% {
			background-position: 100% 0;
		}
	}
	/* SKELETON */
</style>
