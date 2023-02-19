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
    :global(a) {
        text-decoration: none;
        color: #ffd375;
    }
    @media(max-width: 480px){
        :global(.content) {
            display: block;
        }
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        :global(.content) {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>