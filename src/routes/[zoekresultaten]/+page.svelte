<script>
    export let data; // Assuming this is your search data

    console.log(data.results)
    const results = data.results
    import { Card, Nav, Search} from '$lib/index.js'
    
</script>

<header>
    <Nav />
    <!-- menu  -->
</header>

<h1>Zoekresultaten: </h1>
<main>
<section>
    {#each results as result}
    <a href={result.detailLink}>
        <Card             
            bookAuthor={result.authors[0]}
            bookTitle={result.frabl.key1}
            bookUrl={result.coverimages[0]}
            />
    </a>
    {/each}
</section>

</main>

<style>
    h1 {
        padding: 2rem;
    }

    section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
        justify-items: center;
    }

    a {
        display: block;
        margin-left: 1rem;
    }

    /* tablet breakpoint */
@media (min-width: 40em) {

    section {
        gap: 2rem;
        padding: 2rem;
    }
}
</style>
