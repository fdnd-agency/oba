<script>
	import { onMount } from 'svelte';

	export let data;

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

<section>
	<form>
		<h1>Word lid</h1>
		<h3>Registreren</h3>
		<fieldset>
			<legend>Vul hier je persoonlijke gegevens in:</legend>
			<label for="Geslacht">Geslacht</label>
			<input id="Geslacht" required type="text" placeholder="Geslacht" />

			<label for="Voormaan">Voornaam*</label>
			<input id="Voornaam" required type="text" placeholder="Voornaam" />
			<p class="feedback">👍</p>

			<label for="Tussenvoegsel">Tussenvoegsel</label>
			<input id="Tussenvoegsel" required type="text" placeholder="Tussenvoegsel" />
			<p class="feedback">👍</p>

			<label for="Achternaam">Achternaam*</label>
			<input id="Achternaam" required type="text" placeholder="Achternaam" />
			<p class="feedback">👍</p>

			<label for="Geboortedatum">Geboortedatum*</label>
			<input id="Geboortedatum" required type="text" placeholder="Geboortedatum" />
			<p class="feedback">👍</p>
			<article>
				<a href="/login" type="submit2">Terug</a>
				<input type="submit" value="Registreer" />
			</article>
		</fieldset>
	</form>
</section>

<style>
	@media only screen and (max-width: 600px) {
	}

	section {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	h1 {
		padding-left: 0.5rem;
		text-align: center;
	}
	h3 {
		padding-left: 0.5rem;
		text-align: center;
	}

	a {
		color: black;
		padding: 14px 20px;
		margin: 8px 0;
		text-align: center;
	}

	article {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
	}

	input[type='submit'] {
		width: fit-content;
		background-color: var(--primary-dark-color);
		color: var(--primary-light-color);
		padding: 14px 20px;
		margin: 8px 0 8px 0;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		text-align: center;
		font-size: 0.9rem;
	}

	input[type='text'] {
		text-align: left;
		width: 100%;
		padding: 10px 10px;
		margin: 8px 0;
		display: inline-block;
		border-radius: 4px;
		box-sizing: border-box;
		background-color: #f5f5f5;
		border: 1px solid #b3b3b3;
		line-height: normal;
	}

	input[type='text']:focus {
		border: 1px solid black;
		box-shadow: none;
	}

	form {
		display: flex;
		flex-direction: column;
		transition: all 0.2s;
		max-width: 30rem;
		margin: 0 auto;
		overflow: hidden;
		background-color: white;
		border: 3px solid black;
		border-radius: 10px;
		padding: 2.5rem;
		width: 40rem;
	}

	fieldset {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 1em;
		border: none;
		transition: all 0.2s;
		padding: 1em 1em 0;
		position: relative;
		border-radius: 1em;
		margin-top: 35px;
	}

	fieldset + fieldset {
		opacity: 0;
		transition: 0.25s 0.25s;
		transform: translateX(-120%);
	}

	fieldset:valid + fieldset {
		opacity: 1;
		transform: translateX(0);
	}

	fieldset:valid p {
		display: block;
		color: White;
	}

	fieldset:invalid p {
		display: none;
	}

	label {
		display: block;
		margin-bottom: 5px;
	}

	input:focus {
		transform: scale(1.01, 1.01);
		outline: none;
		box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.25);
	}

	input:disabled {
		border-color: #eee;
		background-color: #f9f9f9;
	}
	input::placeholder {
		color: rgba(0, 0, 0, 0.25);
		font-style: italic;
	}

	.feedback {
		position: absolute;
		top: -2em;
		right: 1em;
		width: 2rem;
		height: 2rem;
		text-align: center;
		line-height: 2rem;
		border-radius: 50%;
		transform: translateY(-3rem);
		z-index: 10;
		transition: 0.25s;
	}
	fieldset:valid .feedback {
		transform: translateY(0);
	}
</style>
