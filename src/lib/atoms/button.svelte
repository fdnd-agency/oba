<script>
    export let buttonText;
</script>

<button>
    {buttonText}
</button>

<style>
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em 2em;
        border: none;
        background-color: var(--primary-accent-color);
        color: var(--primary-light-color);
        text-decoration: none;
        border-radius: .25rem;
        width: fit-content;
        height: fit-content;
    }


    @media (min-width: 40em) {

    }

    @media (min-width: 68em) {
 
    }
</style>