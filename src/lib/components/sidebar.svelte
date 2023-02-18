<script>
    import Nav from "./nav.svelte";
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    export let title;
    export let content;
</script>
<div class="sidebar-container">
    <Nav />
    <h1>{title}</h1>
    <p>{content}</p>
    <div class="images" transition:slide="{{delay: 250, duration: 300, easing: quintOut }}">
        <img class="foreground" src="/PNGme.png" alt="Ryan" >
        <img class="background" src="/imageBG.png" alt="Background" >
    </div>
</div>

<style>
    .sidebar-container {
        border-right: 23px solid #FFD375;
        height: 100vh;
        overflow: hidden;
    }
    .images {
        position: relative;
    }
    .foreground {
        mix-blend-mode: multiply;
    }
    .background {
        position: absolute;
        bottom: 4px;
        z-index: -1;
    }
    h1 {
        color: #FFD375;
        font-family: 'IBM Plex Sans', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.5rem;
        font-size: clamp(1.5rem, 0.7625000000000001rem + 3.6875vw, 5.1875rem);
        line-height: 83px;
        text-align: center;
        margin: 0;
        margin-top: 100px;
    }
    p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-size: 1rem;
        font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
        line-height: 110%;
        /* or 22px */

        letter-spacing: 0.15em;

        color: #F2F2F2;
        width: 90%;
        margin: 0 auto;
        margin-top: 25px;
    }
</style>