<script>
    import { LinkButton, Logo } from '$lib/index.js'
</script>
<footer>
    <article>
        <nav>
            <a href="/">Home</a>
            <a href="/leeslijst">Leeslijst</a>
            <a href="/uitleningen">Uitleningen</a>
            <a href="/reserveringen">Reserveringen</a>
            <a href="/betalingen">Betalingen</a>
          </nav>
    </article>
    <article>
        <a href="/">
            <img src="{Logo}" alt="oba logo" width="200">
        </a>
    </article>
</footer>
<style>
    footer{
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        background-color: var(--primary-dark-color);
        padding: 1rem;
        margin-top: 2rem;
    }
    footer article{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
    
    nav{
        display: flex;
        flex-direction: column;
        
    }
    nav a{
        text-decoration: none;
        color: var(--primary-light-color);
        padding: .5rem 0;
    }

    @media only screen and (min-width: 45rem) {
        footer{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    }
    
    }

</style>