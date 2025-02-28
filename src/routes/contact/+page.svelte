<form method="POST">

    <label>
        Name: <input type="text" required name="name" id="name" />
    </label>

    <label>
        Email: <input type="email" required name="email" id="email" />
    </label>

    <label>
        Message: <textarea required name="message" id="message"></textarea>
    </label>

    <button type="submit">Send Email</button>

</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }
</style>
