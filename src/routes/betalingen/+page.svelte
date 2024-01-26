<script>
    import { Table, Button, Nav, Search } from '$lib/index.js';
    export let data;
    
    const tellerstand = data.hygraphData.subscriptionCounters[0];

</script>

<header>
    <Nav />
    <Search 
    cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}/>
</header>

<h1>Betalingen</h1>

<section>
    <h2>Tegoed</h2>
    <p>
        Dit tegoed gebruik je met jouw OBA-pas. Je kunt er zowel mee lenen als printen.
    </p>
    <p>
        Hieronder kan je via IDEAL tegoed op jouw OBA-pas zetten.
    </p>
    <div>
        <h3>Jouw tegoed: €{data.hygraphData.balances[0].balance}</h3>
        <Button buttonText="Toevoegen aan tegoed"/>
    </div>
</section>

<section>
    <h2 class="h2-abonnement">Tellerstand abonnement</h2>
    <p>
        Hieronder vind je alles wat je dit jaar nog kan doen met jouw abonnement.
    </p>
    <ul>
        <li>Uitleningen boeken: {tellerstand.bookCurrent} van de {tellerstand.bookMax}</li>
        <li>Uitleningen e-books: {tellerstand.ebookCurrent} van de {tellerstand.ebookMax}</li>
        <li>Beschikbare films: {tellerstand.movieCurrent} van de {tellerstand.movieMax}</li>
        <li>Korting op activiteiten: {tellerstand.activityDiscount}%</li>
        <li>Computertijd: {tellerstand.computerTime} uur per dag</li>
    </ul>
    <div>
        <h3>Jouw abonnement: OBA {tellerstand.subscriptionType}</h3>
        <Button buttonText="Abonnement uitbreiden"/>
    </div>

</section>

<section>

    <h2>Betaalgeschiedenis</h2>
    <Table tableData={data.hygraphData.paymentHistories }/>

</section>

<style>

    section{
        height: fit-content;
        display: flex;
        flex-direction: column;
        padding: 0 0 2.5rem 4rem;
    }

    section > *{
        max-width: 35rem;
    }

    section:nth-of-type(2){
        background-color: var(--primary-light-color);
    }

    h1{
        padding: 2rem 4rem;
        padding-bottom: 0;
    }

    h2{
        padding-top: 2.5rem;
        padding-bottom: 1.5rem;
    }   

    h3{
        padding: 1.5rem 0;
    }

    p:first-of-type{
        padding-bottom: 0;
    }

    ul{
        margin-top: 1.5rem;
        list-style: none;
    }

    li{
        padding-bottom: .75rem;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 2rem;
    }


/* tablet breakpoint */
@media (min-width: 40em) {

    div{
        flex-direction: row;
        align-items: center;
    }
}


/* laptop breakpoint */
@media (min-width: 68em) {
    
}

</style>