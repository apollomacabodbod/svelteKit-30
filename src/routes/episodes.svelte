

<script>



 export let episodes;



</script>



<nav>

    {#each episodes as episode }

     <div id="{episode.slug}">


      <!-- <p>{episode.title}</p> -->

      <a href={`/show/${episode.number}`}>{episode.title}</a>


     </div>
        
    {/each}

    
    </nav>