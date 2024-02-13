<script>
    // Hier import ik de components die nodig zijn in deze pagina
    import { Card,  LinkButton, Logo, Search, Nav } from '$lib/index.js'
    export let data;
    const hygraphData = data.hygraphData;
    const homepage = hygraphData.homepages;
    // Hier export ik de data zodat ik de data vanuit hygraph kan gebruiken die ik query in de page.server

</script>

<header>
    <Nav />
    <Search 
    cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}/>
    <!-- menu  -->
</header>
 


<section  class="hero-text">
        <article>
                <h1>
                    Welkom <span>{hygraphData.families[0].name}</span> bij OBA!
                </h1>
                <p> {homepage[0].homepageText}</p>
        </article>
        <article class="logo">
                <img src="{Logo}" alt="oba logo" width="100%" >
        </article>

</section>



    <section>
            <article>
                <h2>Jouw recente leeslijst: <span>boeken<span></h2>
                <p> {homepage[1].homepageText}</p>
                <LinkButton buttonText="Bekijk Leeslijst" buttonLink="/leeslijst"/>
            </article>

            <article class="carousel">
                {#each data.apiBooks.results.slice(0, 5) as book}
                <Card 
                    bookAuthor={book.authors}
                    bookTitle={book.titles}
                    bookUrl={book.coverimages}
                    bookDetailLink={book.detailLink}
                />
            {/each}
            </article>
    </section>


<section>   
    <article class="readinglist-text">  
        <h2>
            Jouw recente leeslijst: <span>e-boeken<span>
            </h2>
            <p> {homepage[2].homepageText}</p>
            <LinkButton buttonText="Bekijk Leeslijst" buttonLink="/leeslijst"/>
    </article>

    <article class="carousel">
        {#each data.apiEBooks.results.slice(0, 5) as book}
        <Card 
            bookAuthor={book.authors}
            bookTitle={book.titles}
            bookUrl={book.coverimages}
            bookDetailLink={book.detailLink}
        />
    {/each}

    </article>
    
</section>


<!-- leeslijst sections zijn precies dezelfde classes, want opmaak is exact hetzelfde elke keer -->

<section class="readinglist-books-section">
    <article>
        <h2> Jouw recente leeslijst: <span>luisterboeken<span></h2>
        <p>{homepage[3].homepageText}</p>
        <LinkButton buttonText="Bekijk Leeslijst" buttonLink="/leeslijst"/>
        </article>
    <article class="carousel">
        {#each data.apiAudioBooks.results.slice(0, 5) as book}
        <Card 
            bookAuthor={book.authors}
            bookTitle={book.titles}
            bookUrl={book.coverimages}
            bookDetailLink={book.detailLink}
        />
    {/each}

    </article>

</section>

<section class="about">
    <article class="about-text"> 
        <h2>
        Ontdek de Wereld van Leren bij <span>OBA!</span>
        </h2>
        <p>{homepage[4].homepageText}</p>
        
  
    </article>
        <article class="centerCarousel">
            {#each hygraphData.activiteitens.slice(0, 5) as activiteiten}
            <a href="{activiteiten.activiteitLink}">
                <img src="{activiteiten.activiteitImage.url}" alt="{activiteiten.activiteitNaam}" width="300" height="200">
                <h3>{activiteiten.activiteitNaam}</h3>
            </a>
        {/each} 
    
    </article>    
    <LinkButton buttonText="Meer bekijken" buttonLink="https://www.oba.nl/"/>
</section>


<style>

section{
    margin: 2rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
}

section:nth-child(2n+1){
    background-color: var(--primary-light-color);
}

article{
    padding: 4rem 0;
}

p{
    padding: 2rem 0;

}

.logo{
    padding: 0;
}

.carousel{
 display: flex;
  gap: 10px;
  width: 580px;
  max-width: 90%;
  padding: 10px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  animation-name: tostart;
}

a{
    color: var(--primary-dark-color);
    text-decoration: none;
}
span{
    color: var(--primary-accent-color);
}
.hero-text{
    justify-content: flex-start;
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}

@media only screen and (min-width: 45rem) {
    section{
    height: 65vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    }

    section:nth-of-type(odd):not(.hero-text):not(:last-child) {
        flex-direction: row-reverse;
    }

    section:nth-child(2){
        width: 85%;
    }
    article{
    width: 45%;
    padding: 5rem 0;
    }
    
    .logo{
        width: 50%;
    }
    .about{
      height: 100%;
      display: flex;
      gap: 1.5rem;
      flex-direction: column !important;
      padding-bottom: 5rem;
    }
    .about-text{
      text-align: center;
      padding-bottom: 0;
    }
    .centerCarousel{
    display: flex;
    gap: 10px;
    width: 70vw;
    max-width: 90%;
    padding: 0 1rem;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    animation-name: tostart;
    }
    .centerCarousel a{
      text-decoration: none;
      color: var(--primary-dark-color);
    }
}


</style>