<script>
    import {Card, Nav, Search} from '$lib/index.js';
    export let data;
</script>


<header>
    <Nav />
    <Search 
    cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}/>
</header>
<main>
    <h1>Leeslijst</h1>

    <details>
        <summary>Boeken</summary>
        <section>
        {#each data.apiBooks.results as book}
        <Card 
            bookAuthor={book.authors}
            bookTitle={book.titles}
            bookUrl={book.coverimages}
            bookDetailLink={book.detailLink}
        />
    {/each}
    </section>
    </details>

    <details>
    <summary>E-books</summary>
    <section>
        {#each data.apiEBooks.results as book}
        <Card 
            bookAuthor={book.authors}
            bookTitle={book.titles}
            bookUrl={book.coverimages}
            bookDetailLink={book.detailLink}
        />
    {/each}
    </section>
    </details>

    <details>
    <summary>Luisterboeken</summary>
    <section>
        {#each data.apiAudioBooks.results as book}
        <Card 
            bookAuthor={book.authors}
            bookTitle={book.titles}
            bookUrl={book.coverimages}
            bookDetailLink={book.detailLink}
        />
    {/each}
    </section>
    </details>
</main>

<style>

    main{
        min-height: 100vh;
    }
    h1{
        padding: 2rem;
    }

    summary{
        font-size: 1.8rem;
        font-weight: bold;
    }

    summary::marker{
        color:var(--primary-accent-color)
    }

    details{
        padding-left: 2rem;
    }

    section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
        justify-items: center;
    }

    /* tablet breakpoint */
@media (min-width: 40em) {

    section {
        gap: 2rem;
        padding: 2rem;
    }
}
</style>

