<script>
    export let tableData;
</script>

<section>
    <table>
        <tbody>
            {#each Object.values(tableData) as row}
                <tr>
                    {#if 'image' in row}
                        <td class="with-image"><img src={row.image.url} width="50px" alt="afbeelding van {row.title}" loading="lazy"></td>
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

<style>
    
    table {
        border-collapse: collapse;
        width: 100%;
        table-layout: fixed;
        border-radius: 1rem;
        border-radius: var(--primary-table-border-radius);
    }

    tr {
        background-color: var(--primary-light-color);
        padding: .35rem;
        border-bottom: 1px #D9D9D9 solid;
    }

    tr:last-of-type{
        border-bottom: none;
    }
    
    td {
        padding: .625rem;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    td.with-image{
        text-align: center;
    }

    tr:first-of-type > td:first-of-type{
        border-top-left-radius: var(--primary-table-border-radius);
    }

    tr:first-of-type > td:last-of-type{
        border-top-right-radius: var(--primary-table-border-radius);
    }

    tr:last-of-type > td:first-of-type{
        border-bottom-left-radius: var(--primary-table-border-radius);
    }
    
    tr:last-of-type > td:last-of-type{
        border-bottom-right-radius: var(--primary-table-border-radius);
    }


    @media screen and (max-width: 40rem) {

    section{
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
        margin-bottom: .625rem;
        border-radius: var(--primary-table-border-radius);
        border-bottom: none;
    }

    td {
        display: block;
        font-size: .8rem;
        text-align: left;
    }

    td.with-image{
        display: none;
    }
}

</style>