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
	<div>
		<h1>Welkom bij OBA!</h1>
		<h3>Inloggen</h3>
		<form action="#">
			<label for="fname">OBA-pasnummer</label>
			<input type="text" id="fname" name="email" placeholder="OBA-pasnummer" />
			<label for="fname">Vul je wachtwoord in</label>
			<input type="text" id="lname" name="password" placeholder="Wachtwoord" />
			<article>
				<input type="submit" value="Log in" />
				<a href="/signup" type="submit2">Registreer hier</a>
			</article>
		</form>
	</div>
</section>

<style>
	div {
		background-color: white;
		border: 3px solid black;
		text-align: center;
		border-radius: 10px;
		padding: 2.5rem;
		width: 40rem;
	}

	section {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	form {
		text-align: left;
	}

	label {
		display: block;
		margin-bottom: 5px;
	}

	article {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
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

	a {
		color: black;
		padding: 14px 20px;
		margin: 8px 0;
		text-align: center;
	}

	@media only screen and (max-width: 600px) {
		section {
			scale: 0.85;
		}
	}
</style>
