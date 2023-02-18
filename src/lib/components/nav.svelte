<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    export let anim;

    onMount(() => {
        if(anim){
            gsap.from(".navlink", { x: -1000, duration: 1, stagger: -.1 })
        }
    })

</script>

<nav class="nav-container">
    <button class="navlink" on:click={() => goto("/")}><span class="material-symbols-outlined">home</span></button>
    <button class="navlink" on:click={() => goto("/about")}><span class="material-symbols-outlined">face</span></button>
    <button class="navlink" on:click={() => goto("/work")}><span class="material-symbols-outlined">code</span></button>
    <button class="navlink" on:click={() => goto("/contact")}><span class="material-symbols-outlined">mail</span></button>
</nav>

<style>
    .nav-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        width: 80%;
        margin: 0 auto;
        justify-items: center;
        padding-top: 5%;
    }
    button {
        height: clamp(3.75rem, 3.5rem + 1.25vw, 5rem);
        width: clamp(3.75rem, 3.5rem + 1.25vw, 5rem);
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
        font-size: 1.5rem;
        font-size: clamp(1.5rem, 1.2rem + 1.5vw, 3rem);
    }
</style>