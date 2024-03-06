<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Thema switch
		const icon = document.getElementById('icon');

		const body = document.querySelector('body'),
			toggle = document.querySelector('.toggle');

		let getMode = localStorage.getItem('mode');
		if (getMode && getMode === 'dark') {
			body?.classList.add('dark');
			toggle?.classList.add('active');
		}

		toggle.addEventListener('click', () => {
			body.classList.toggle('dark');

			localStorage.setItem('mode', 'dark');
			if (!body.classList.contains('dark')) {
				return localStorage.setItem('mode', 'light');
			}
		});

		toggle.addEventListener('click', () => toggle.classList.toggle('active'));
        
	});
</script>

<!-- if (body.classList.contains('dark')) {
  icon.src = "src/lib/assets/oba-logo-2.webp";
} else {
  icon.src = "src/lib/assets/oba-logo.webp";
} -->

<div class="toggle-button-cover">
    <div class="theme-title">Verander thema</div>
    <div class="button r toggle" id="button-3">
        <input type="checkbox" class="checkbox" />
        <div class="knobs"></div>
        <div class="layer"></div>
    </div>
</div>

<style>
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
</style>