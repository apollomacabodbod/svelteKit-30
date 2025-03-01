


<script>
 
    import { invalidateAll } from "$app/navigation";
    import { applyAction , deserialize } from "$app/forms";
    import { enhance } from "$app/forms";
    export let form;

    $: console.log("form", form)



    async function handleForm(event){

        // this = form element
  
         const data = new FormData(this)
         const res = await fetch(this.action,{
            method: 'POST',
            body: data
         })


         //get data by deserializing it
         const result = deserialize(await res.text())



         //see if it was success,
         // if success, reload all loaded data

         if(result.type === "success"){


            //reloads all data

            await invalidateAll()

         }


         //  populating form
         //will redirect if thrown redirect in action
         // show error page if thrown error
          applyAction(result);

    }


</script>


{#if form?.error_message}
<p class="message">
    {form.error_message}
</p>
{/if}


{#if form?.message}

<p>{form.message}</p>

{:else}


<!-- <form  use:enhance={({ form, data , action ,cancel }) => {

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

action="/contact?/email"
method="POST"> -->


<form on:submit|preventDefault={handleForm} action="/contact?/email">



    <!-- Action = route + ?/ + action_name -->

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
