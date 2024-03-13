<script>
	export let tableData;

	import { onMount } from 'svelte';

	onMount(() => {
		// PE Zet iets uit wanner Javascript niet werkt
		const icon = document.querySelector('.disable-js');
		icon?.classList.toggle('disable-js');
	});

	function countClicks() {
		document.getElementById('overview').style.height = '100%';
		document.getElementById('btn-arrow-down').style.display = 'none';

		document.getElementById('btn-arrow-up').style.display = 'grid';
	}

	function countClicks2() {
		document.getElementById('overview').style.height = '270px';
		document.getElementById('btn-arrow-down').style.display = 'grid';
		document.getElementById('btn-arrow-up').style.display = 'none';
	}
</script>

<section class="overview" id="overview">
	<table>
		<tbody>
			{#each Object.values(tableData) as row}
				<tr>
					{#if 'image' in row}
						<td class="with-image"
							><img
								src={row.image.url}
								width="50px"
								alt="afbeelding van {row.title}"
								loading="lazy"
							/></td
						>
					{/if}
					{#each Object.entries(row) as [key, cell]}
						{#if (typeof cell !== 'object' || !('url' in cell)) && key !== 'detailLink'}
							<td>{cell}</td>
						{/if}
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<div class="disable-js">
	<section class="btn-arrow-down" id="btn-arrow-down">
		<button class="arrow-svg" on:click={countClicks}
			><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
				><path
					d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
				/></svg
			></button
		>
	</section>

	<section class="btn-arrow-up" id="btn-arrow-up">
		<button class="arrow-svg" on:click={countClicks2}
			><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
				><path
					d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z"
				/></svg
			></button
		>
	</section>
</div>

<style>
	.overview {
		overflow: hidden;
		height: 270px;
		transition: all 0.3s ease;
	}

	.btn-arrow-up {
		display: none;
		margin-top: 30px;
		justify-content: center;
	}

	.btn-arrow-down {
		display: grid;
		margin-top: 30px;
		justify-content: center;
	}

	.arrow-svg {
		height: 50px;
		width: 50px;
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
		background-color: #e5e5e5;
	}

	.arrow-svg:hover {
		background-color: #cecece;
		transition: 0.5s;
	}

	.disable-js {
		display: none;
	}

	table {
		border-collapse: collapse;
		width: 100%;
		table-layout: fixed;
		border-radius: 1rem;
		border-radius: var(--primary-table-border-radius);
	}

	tr {
		background-color: var(--primary-light-color);
		padding: 0.35rem;
		border-bottom: 1px #d9d9d9 solid;
	}

	tr:last-of-type {
		border-bottom: none;
	}

	td {
		padding: 0.625rem;
		text-align: left;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	td.with-image {
		text-align: center;
	}

	tr:first-of-type > td:first-of-type {
		border-top-left-radius: var(--primary-table-border-radius);
	}

	tr:first-of-type > td:last-of-type {
		border-top-right-radius: var(--primary-table-border-radius);
	}

	tr:last-of-type > td:first-of-type {
		border-bottom-left-radius: var(--primary-table-border-radius);
	}

	tr:last-of-type > td:last-of-type {
		border-bottom-right-radius: var(--primary-table-border-radius);
	}

	@media screen and (max-width: 40rem) {
		section {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1rem;
		}

		table {
			border: 0;
		}

		tr {
			display: block;
			margin-bottom: 0.625rem;
			border-radius: var(--primary-table-border-radius);
			border-bottom: none;
		}

		td {
			display: block;
			font-size: 0.8rem;
			text-align: left;
		}

		td.with-image {
			display: none;
		}
	}
</style>
