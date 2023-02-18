<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.from(".navlink", { x: -1000, duration: 1, stagger: -.1 })
    })

</script>

<nav class="nav-container">
    <button class="navlink"><span class="material-symbols-outlined">face</span></button>
    <button class="navlink"><span class="material-symbols-outlined">code</span></button>
    <button class="navlink"><span class="material-symbols-outlined">mail</span></button>
</nav>

<style>
    .nav-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        width: 80%;
        margin: 0 auto;
        justify-items: center;
        padding-top: 5%;
    }
    button {
        height: 80px;
        width: 80px;
        border-radius: 90px;
        border: 5px solid #FFD375;
        background-color: #010400;
        color: #FFD375;
    }
    button:hover {
        cursor: pointer;
    }
    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
        font-size: 48px;
    }
</style>