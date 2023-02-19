<div class="form-container">
    <form action="" class="contact-form">
        <input type="text" placeholder="name">
        <input type="email" placeholder="email">
        <textarea rows="10" placeholder="message"></textarea>
        <button type="submit">Send</button>
    </form>
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
        height: 50vh;
        background-color: #ffd375;
        width: 80%;
        border-radius: 15px;
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
</style>