<script>
	export let tableData;

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

<section class="btn-arrow-down" id="btn-arrow-down">
	<button class="arrow-svg" on:click={countClicks}
		><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height: 30px;"
			><g data-name="15.Arrow Down"
				><path
					d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"
				/><path
					d="m12 18.414-4.707-4.707 1.414-1.414L12 15.586l3.293-3.293 1.414 1.414L12 18.414z"
				/><path d="M11 6h2v11h-2z" /></g
			></svg
		></button
	>
</section>

<section class="btn-arrow-up" id="btn-arrow-up">
	<button class="arrow-svg" on:click={countClicks2}
		><svg
			style="height: 30px;"
			data-name="1.Arrow Up"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			><path
				d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"
			/><path
				d="M15.293 11.707 12 8.414l-3.293 3.293-1.414-1.414L12 5.586l4.707 4.707-1.414 1.414z"
			/><path d="M11 7h2v11h-2z" /></svg
		></button
	>
</section>

<style>
	.overview {
		overflow: hidden;
		height: 270px;
	}

	.btn-arrow-up {
		display: none;
		margin-top: 30px;
	}

	.btn-arrow-down {
		display: grid;
		margin-top: 30px;
	}

	.arrow-svg {
		background-color: #f2f5ff;
		border: none;
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
