<script>
	import { Toggle } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		// PE Zet iets uit wanner Javascript niet werkt
		const lastChild = document.querySelector('.last-child');
		lastChild?.classList.toggle('last-child');
	});
</script>

<section class="p-menu1">
	<nav id="navbar" class="navigation">
		<input id="toggle1" type="checkbox" />
		<label class="hamburger1" for="toggle1">
			<div class="top"></div>
			<div class="meat"></div>
			<div class="bottom"></div>
		</label>

		<nav class="menu1">
			<a class="link1" href="/">Home</a>
			<a class="link1" href="/leeslijst">Leeslijst</a>
			<a class="link1" href="/uitleningen">Uitleningen</a>
			<a class="link1" href="/reserveringen">Reserveringen</a>
			<a class="link1" href="/betalingen">Betalingen</a>
			<a class="link1 last-child" href="/login">Log uit</a>
			<Toggle />
		</nav>
	</nav>
</section>

<style>
	/* CSS rules are kept repetitive so that you can get CSS rules for each button easily :) */

	.theme-title {
		display: grid;
		align-items: center;
		margin: 0;
		padding: 10px 0;
		font:
			700 20px 'Oswald',
			sans-serif;
		-webkit-transition: all 0.3s ease;
		transition: all 0.3s ease;
		color: var(--primary-light-color);
	}

	.toggle-button-cover {
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
		padding: 0px 0 30px 0;
		box-sizing: border-box;
	}

	.knobs,
	.layer {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.button {
		position: relative;
		width: 75px;
		height: 36px;
		margin-left: 20px;
		overflow: hidden;
	}

	.button.r,
	.button.r .layer {
		border-radius: 100px;
	}

	.checkbox {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		opacity: 0;
		cursor: pointer;
		z-index: 3;
	}

	.knobs {
		z-index: 2;
	}

	.last-child {
		padding-bottom: 40px;
	}

	.layer {
		width: 100%;
		background-color: #ebf7fc;
		transition: 0.3s ease all;
		z-index: 1;
	}

	/* Button 3 */
	#button-3 .knobs:before {
		content: '';
		position: absolute;
		top: 4px;
		left: 4px;
		width: 20px;
		height: 10px;
		color: #fff;
		font-size: 12px;
		font-weight: bold;
		text-align: center;
		line-height: 2.7;
		padding: 9px 4px;
		background-color: var(--primary-accent-color);
		border-radius: 50%;
		transition:
			0.3s ease all,
			left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
	}

	#button-3 .checkbox:active + .knobs:before {
		width: 46px;
		border-radius: 100px;
	}

	#button-3 .checkbox:checked:active + .knobs:before {
		margin-left: -28px;
	}

	#button-3 .checkbox:checked + .knobs:before {
		content: '';
		left: 43px;
		background-color: var(--primary-accent-color);
	}
	#button-3 .checkbox:checked ~ .layer {
		background-color: #fcebeb;
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
	.hamburger1 {
		display: grid;
		justify-content: center;
		grid-template-rows: repeat(3, 1fr);
		padding: 2rem 3em;
		z-index: 120;
		background-color: var(--primary-accent-color);
		border-radius: 0 0 1rem 1rem;
		position: relative;
		height: 100px;
	}

	.hamburger1 div {
		background-color: var(--primary-light-color);
		position: relative;
		width: 40px;
		height: 5px;
		margin-top: 7px;
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}

	#toggle1 {
		display: none;
	}

	#toggle1:checked + .hamburger1 .top {
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg);
		margin-top: 49px;
		border-radius: 0;
		left: 28px;
		position: absolute;
	}

	#toggle1:checked + .hamburger1 .meat {
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		margin-top: -10px;
		margin-top: 49px;
		border-radius: 0;
		left: 28px;
		position: absolute;
	}

	#toggle1:checked + .hamburger1 .bottom {
		-webkit-transform: scale(0);
		transform: scale(0);
		border-radius: 0;
	}
	#toggle1:checked ~ .menu1 {
		height: auto;
	}

	/* Menu */
	.menu1 {
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

	.menu1 a:first-child {
		margin-top: 40px;
	}

	.last-child {
		margin-bottom: 40px;
	}

	.link1 {
		width: 100%;
		padding: 10px 0;
		font:
			700 20px 'Oswald',
			sans-serif;
		-webkit-transition: all 0.3s ease;
		transition: all 0.3s ease;
	}

	.link1:hover {
		background-color: var(--primary-light-color);
		padding: 1rem;
		color: rgb(61, 61, 61);
	}

	@media only screen and (min-width: 43rem) {
		.menu1 {
			width: 50vw !important;
		}
		.hamburger1 {
			width: 5rem;
			margin-left: 12px;
		}
		section {
			position: relative;
		}
	}
	@media only screen and (max-width: 650px) {
		.hamburger1 {
			margin-left: 12px;
			border-radius: 0px 0 0px 10px;
		}
		section {
			left: 0;
		}
		.menu1 {
			border-radius: 0%;
		}
	}
</style>
