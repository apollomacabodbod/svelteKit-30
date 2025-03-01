


<script>

    import { enhance } from "$app/forms";
    export let form;

    $: console.log("form", form)
</script>


{#if form?.error_message}
<p class="message">
    {form.error_message}
</p>
{/if}


{#if form?.message}

<p>{form.message}</p>

{:else}

<form  use:enhance={({ form, data , action ,cancel }) => {

    // form - form element
    // data - formData object
    // action - url form posts to
    // cancel - cancels form

    return ({ result , update }) => {

        update();

     // result - 'ActionResult'
     // update() -> runs all of the default use:enhance

    }

}} 

action="?/email"
method="POST">

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

{/if}







<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }
</style>
