<script>
	import { Toggle } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		// PE Zet iets uit wanner Javascript niet werkt
		const lastChild = document.querySelector('.last-child');
		lastChild?.classList.toggle('last-child');
	});
</script>

<section>
	<nav id="navbar" class="navigation">
		<input id="hamburger-toggle" type="checkbox" />
		<label class="hamburger" for="hamburger-toggle">
			<div class="top"></div>
			<div class="meat"></div>
			<div class="bottom"></div>
		</label>

		<ul class="menu">
			<li class="menu-link"><a href="/">Home</a></li>
			<li class="menu-link"><a href="/leeslijst">Leeslijst</a></li>
			<li class="menu-link"><a href="/uitleningen">Uitleningen</a></li>
			<li class="menu-link"><a href="/reserveringen">Reserveringen</a></li>
			<li class="menu-link"><a href="/betalingen">Betalingen</a></li>
			<li class="menu-link last-child"><a href="/login">Log uit</a></li>
			<Toggle />
		</ul>
	</nav>
</section>

<style>
	.last-child {
		padding-bottom: 2.5rem;
	}

	a {
		color: var(--primary-light-color);
		text-decoration: none;
	}

	section {
		position: absolute;
		top: 0;
		left: 9%;
		width: 15vw;
		position: fixed;
		z-index: 999;
	}

	/* Hamburger */
	.hamburger {
		display: grid;
		justify-content: center;
		grid-template-rows: repeat(3, 1fr);
		padding: 2rem 3em;
		z-index: 120;
		background-color: var(--primary-accent-color);
		border-radius: 0 0 1rem 1rem;
		position: relative;
		height: 6.25rem;
	}

	.hamburger div {
		background-color: var(--primary-light-color);
		position: relative;
		width: 2.5rem;
		height: 5px;
		margin-top: 7px;
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}

	#hamburger-toggle {
		display: none;
	}

	#hamburger-toggle:checked + .hamburger .top {
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg);
		margin-top: 3rem;
		border-radius: 0;
		left: 1.75rem;
		position: absolute;
	}

	#hamburger-toggle:checked + .hamburger .meat {
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		margin-top: -10px;
		margin-top: 3rem;
		border-radius: 0;
		left: 1.7rem;
		position: absolute;
	}

	#hamburger-toggle:checked + .hamburger .bottom {
		-webkit-transform: scale(0);
		transform: scale(0);
		border-radius: 0;
	}
	#hamburger-toggle:checked ~ .menu {
		height: auto;
	}

	/* Menu */
	.menu {
		width: 100vw !important;
		/* Blurry background */
		backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
		-webkit-backdrop-filter: blur(10px); /* Safari support */
		/* Fallback for browsers that do not support backdrop-filter */
		opacity: 97%;
		background: var(--primary-accent-color);
		margin: 0;
		margin-top: 0.11rem;
		display: -ms-grid;
		display: grid;
		grid-template-rows: 1fr repeat(4, 0.5fr);
		grid-row-gap: 25px;
		list-style: none;
		clear: both;
		width: auto;
		padding: 0 1rem;
		height: 0px;
		overflow: hidden;
		transition: height 0.4s ease;
		-webkit-transition: all 0.3s ease;
		transition: all 0.3s ease;
		z-index: 9;
		border-radius: var(--primary-table-border-radius);
	}

	.menu li:first-child {
		margin-top: 2.5rem;
	}

	.last-child {
		margin-bottom: 2.5rem;
	}

	.menu-link {
		width: 100%;
		padding: 10px 0;
		font:
			600 20px 'Oswald',
			sans-serif;
		-webkit-transition: all 0.3s ease;
		transition: all 0.3s ease;
	}

	li:hover {
		background-color: var(--primary-light-color);
		padding: 1rem;
	}
	li:hover > a {
		color: rgb(61, 61, 61);
	}

	@media only screen and (min-width: 43rem) {
		.menu {
			width: 50vw !important;
		}
		.hamburger {
			width: 5rem;
			margin-left: 12px;
		}
		section {
			position: relative;
		}
	}
	@media only screen and (max-width: 650px) {
		.hamburger {
			margin-left: 12px;
			border-radius: 0px 0 0px 10px;
		}
		section {
			left: 0;
		}
		.menu {
			border-radius: 0%;
		}
	}
</style>
