<slot></slot>

<style>
    :global(body){
        margin: 0;
        background-color: #010400;
    }
    :global(.content) {
        display: grid;
        grid-template-columns: 30% 1fr;
    }
    @media(max-width: 480px){
        :global(.content) {
            grid-template-columns: 1fr;
        }
    }
</style>