<script>
    import Sidebar from "$lib/components/sidebar.svelte";
    import { enhance } from '$app/forms';
    import { onMount } from "svelte";

    let tl;

    onMount(() => {
        gsap.set(".quickflip", {
            transformStyle: "preserve-3d",
            transformPerspective: 1000
        });
        gsap.set(".qf-card", {
            transformStyle: "preserve-3d",
            transformOrigin: "50% 50%",
        });
        gsap.set(".qf-back", {
            rotationY: 180, rotationZ: 180
        });

        const timing = 1;

        tl = gsap.timeline({ paused: true });
        tl.to(".qf-card", { rotationX: "+=180", duration: timing });
        tl.to(".quickflip", { z: 50, duration: timing/2, yoyo: true, repeat: 1 }, 0);
    })

    function flip(){
        tl.play();
    }

</script>
<div class="content">
    <Sidebar title={"Contact"} content={"<p>I'll get back to you as soon as I can.</p>"}/> 
    <div class="form-container">
        <div class="quickflip">
            <div class="qf-card qf-front">
                <form
                    method="POST"
                    use:enhance={({ form, data, action, cancel }) => {

                        flip();

                        return async ({ result, update }) => {
                            console.log(result)
                        };
                    }}
                    >
                    <input type="text" name="name" placeholder="name">
                    <input type="email" name="email" placeholder="email">
                    <textarea rows="10" name="message" placeholder="message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div class="qf-card qf-back">
            </div>
        </div>  
    </div>
</div>

<style>
    .form-container {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
    }
    form * {
        align-self: center;
    }
    input {
        height: 30px;
        border: none;
        background-color: #f2f2f2;
        border-radius: 5px;
        padding: 5px;
        width: 60%;
        font-family: 'IBM Plex Sans', sans-serif;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    textarea {
        border: none;
        background-color: #f2f2f2;
        border-radius: 5px;
        padding: 5px;
        width: 60%;
        font-family: 'IBM Plex Sans', sans-serif;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    textarea::placeholder {
        font-family: 'IBM Plex Sans', sans-serif;
    }
    input:focus, textarea:focus {
        outline: none;
    }
    button {
        border: 3px solid #010400;
        background: none;
        color: #010400;
        height: 40px;
        padding: 5px;
        width: 200px;
        border-radius: 15px;
        font-weight: 700;
        font-size: 16px;
        font-family: 'IBM Plex Sans', sans-serif;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    button:hover {
        cursor: pointer;
    }

    /* gsap stuff */
    .quickflip {
        position:relative;
        height: 50vh;
        width: 80%;
    }
    .qf-card {
        opacity:0.8;
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        background-color: #ffd375;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 15px;
    }
    .qf-card.qf-front {
        position:relative;
        background-color: #ffd375;
    }
    @media(max-width: 480px){
        input, textarea, button {
            width: 85%;
        }
        .quickflip {
            height: 60vh;
        }
    }
</style>