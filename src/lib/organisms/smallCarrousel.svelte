<script>
    import {Card} from '$lib/index.js';
    export let cardData;
</script>

<section>
    {#each (cardData) as book}
        <Card 
            bookDetailLink="{book.detailLink}"
            bookUrl="{book.image.url}"
            bookTitle="{book.title}"
            bookAuthor="{book.author}"
        />
    {/each}
    {#each (cardData) as book}
        <Card 
            bookDetailLink="{book.detailLink}"
            bookUrl="{book.image.url}"
            bookTitle="{book.title}"
            bookAuthor="{book.author}"
        />
    {/each}
</section>

<style>
    section  {
        display: flex;
        gap: 10px;
        width: 100%;
        max-width: 100%;
        padding: 10px;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        animation-name: tostart;
    }
</style>