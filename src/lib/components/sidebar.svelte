<script>
    import { onMount } from "svelte";
    import Nav from "./nav.svelte";

    export let title;
    export let content;
    export let image = true;
    export let anim = false;

    onMount(() => {
        gsap.from(".images", { y: 653, duration: 1, ease: "back.out(1)", delay: .5 })
    })
    function scroll(){
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })
    }
</script>
<div class="sidebar-container flex">
    <Nav anim={anim}/>
    <div class="text">
        <h1>{title}</h1>
        <p>{@html content}</p>
    </div>
    <div class="images">
        {#if image}
            <img class="foreground" src="/PNGme.png" alt="Ryan" >
            <img class="background" src="/imageBG.png" alt="Background" >
        {/if}
    </div>
    <button on:click={scroll}><span class="material-symbols-outlined">arrow_downward</span></button>
</div>

<style>
    .sidebar-container {
        border-right: 23px solid #FFD375;
        height: 100vh;
        overflow: hidden;
        background-color: #010400;
    }
    .flex {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .text {
        width: 80%;
        margin: 0 auto;
    }
    img {
        width: 120%;
    }
    .images {
        position: relative;
        flex-grow: 1;
    }
    .foreground {
        mix-blend-mode: multiply;
        position: absolute;
        bottom: 4px;
        left: 0;
    }
    .background {
        position: absolute;
        bottom: 4px;
        left: 0;
        z-index: -1;
    }
    h1 {
        color: #FFD375;
        font-family: 'IBM Plex Sans', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.875rem;
        font-size: clamp(1.875rem, 1.375rem + 2.5vw, 4.375rem);
        line-height: 83px;
        margin: 0;
        margin-top: 80px;
    }
    p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-size: 1rem;
        font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
        line-height: 110%;
        /* or 22px */

        letter-spacing: 0.05em;

        color: #F2F2F2;
        margin: 0 auto;
        margin-top: 25px;
    }
    button {
        background: none;
        border: none;
        color: #FFD375;
        position: absolute;
        bottom: 0;
        right: 0;
        display: none;
    }
    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
        font-size: 48px;
    }
    @media(max-width: 480px){
        .sidebar-container {
            border: none;
            overflow: visible;
            overflow-x: hidden;
            border-bottom: 23px solid #FFD375;
        }
        h1 {
            margin-top: 40px;
        }
        button {
            display: block;
        }
    }
</style>