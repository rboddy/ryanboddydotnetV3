<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.from(".hero", { x: -2000, duration: 1.5, ease: "power.out" })
    })

</script>

<div class="hero">
    <img src="/about.png" alt="Ryan Posing" >
</div>

<style>
    :global(body) {
        overflow: hidden;
    }
    div {
        background-color: #ffd375;
        height: 100vh;
        overflow: hidden;
        width: 100%;
        background-size: cover;
        z-index: -1;
    }
    img {
        width: 100%;
        height: auto;
        mix-blend-mode: multiply;
        position: absolute;
        bottom: 0;
        right: 10%;
    }
</style>