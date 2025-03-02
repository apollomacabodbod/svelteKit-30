
<script>



      import { goto } from "$app/navigation";

      // lifecycle, afterNavigate , beforeNavigate
      // disableScrolling - SvelteKit's built in scroll handling 
      // goto -> programically routing
      // invalidate -> load functions on active page re-run.
      // invalidateALl -> causes all load functions to re-run.
      // preloadCode -> load is code for given routes
      // preloadData -> load data from load functions for given routes

     import { env } from "$env/dynamic/public";
     console.log('env', env)


    import { browser, building, dev, version } from "$app/environment";
    import { navigating } from "$app/stores";
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";
    import "./styles.css"
    import Episodes from "./episodes.svelte";

    export let data;

    $: ({ all_episodes } = data)



    console.log(browser,building,dev,version)

    // browser  ->  boolean, if app is running in browser
    // building -> boolean, true , if currently building in production..
    // dev ->  boolean, if in development mode 
    // version -> config.kit.version.name



</script>


<!-- {#if !!$navigating}

<div class="loading">

    Loading...
</div>

{/if} -->


<Header />


<main>


  <div class="main">

    <button on:click={() => goto('/contact')}>Change Page</button>

    <slot />

  </div>
     

    <aside>

        <Episodes episodes={all_episodes} />

    </aside>
   

</main>


<Footer />


<style lang="postcss">

  

    main {
        display: grid;
        grid-template-columns: 1fr 300px;
    }


    aside {
        order:-1;
    }




</style>


