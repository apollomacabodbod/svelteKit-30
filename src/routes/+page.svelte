

<script>

 import Test from '$lib/Test.svelte'
 import '$db/Start'
 export let data;


   $: ({ latest_episode , all_episodes } = data)

</script>


<h1>{data.latest_episode.title}</h1>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>



<div>

    {#each all_episodes as episode }

     <div id="{episode.slug}">


      <!-- <p>{episode.title}</p> -->

      <a href={`/show/${episode.number}`}>{episode.title}</a>


     </div>
        
    {/each}

    
</div>

<Test/>
