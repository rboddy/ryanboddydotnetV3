<script>
    import { onMount } from "svelte";


    let work = [
        {
            name: "Erica Braley Photography",
            url: "https://ericabraley.com/",
            preview: "/EricaBraleyScreenshot.png"
        }
    ]
    onMount(() => {
        gsap.from(".work-pane", { y: 1000, duration: 1, ease: "power3.out" })
    })
</script>

<div class="viewer-container">
    <div class="work-pane">
        {#each work as client}
            <h2>{client.name}</h2>
            <a href={client.url}>
                <img src={client.preview} alt="Client Screenshot">
            </a>
        {/each}
    </div>
</div>

<style>
    .viewer-container {
        height: 100vh;
        display: flex;
        overflow: hidden;
    }
    .work-pane {
        width: 80%;
        margin: 0 auto;
    }
    h2 {
        color: #FFD375;
        font-family: 'IBM Plex Sans', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.625rem;
        font-size: clamp(1.625rem, 1.325rem + 1.5vw, 3.125rem); 
        line-height: 83px;
        margin: 0;
        margin-top: 80px;
    }
    a > img {
        width: 100%;
        height: auto;
    }
    @media(max-width: 480px){
        h2 {
            line-height: initial;
            margin-bottom: 20px;
        }
    }
</style>