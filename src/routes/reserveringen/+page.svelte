<script>
    import {ReservationCard, Nav, Search} from '$lib/index.js';
    export let data;
</script>

<header>
    <Nav />
    <Search 
    cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}/>
    <!-- menu  -->
</header>


<section>
    <h1>Reserveringen</h1>
    <div>
        {#each Array(2) as _, i}
            {#each data.hygraphData.uitleengeschiedenis1 as book (book.id + i)}
                <ReservationCard 
                    bookDetailLink="{book.detailLink}"
                    bookUrl="{book.image.url}"
                    bookTitle="{book.title}"
                    bookAuthor="{book.author}"
                    bookStatus="{book.beschikbaarheid}"
                />
            {/each}
        {/each}
    </div>
</section>

<style>
    section {
        margin: 2rem 3rem;
        padding: 1rem;
    }

    div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
        justify-items: center;        
    }

    /* tablet breakpoint */
@media (min-width: 40em) {

    div {
        gap: 2rem;
        padding: 2rem 0;
    }
}
</style>

