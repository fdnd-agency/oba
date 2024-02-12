<script>
    import { SmallCarrousel, Table, Nav, Search } from '$lib/index.js';
    export let data;
</script>

<header>
    <Nav />
    <Search 
    cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}/>
    <!-- menu  -->
</header>

<section>
<h1>Uitleningen</h1>
<h2>Nu in bezit:</h2>

<SmallCarrousel cardData={data.hygraphData.uitleengeschiedenis1}/>
</section>

<section>
<h2>Uitleengeschiedenis</h2>

<Table tableData={data.hygraphData.uitleengeschiedenis1}/>
</section>


<style>
    section {
        margin: 2rem 3rem;
        padding: 1rem;
    }

    h2 {
        margin-bottom: 1rem;
    }
</style>