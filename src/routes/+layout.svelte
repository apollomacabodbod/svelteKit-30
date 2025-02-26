
<script>

    import Header from "./header.svelte";
    import Footer from "./footer.svelte";
    import "./styles.css"
    import Episodes from "./episodes.svelte";

    export let data;

    $: ({ all_episodes } = data)


</script>


<Header />


<main>


  <div class="main">

    <slot />

  </div>
     

    <aside>

        <Episodes episodes={all_episodes} />

    </aside>
   

</main>


<Footer />


<style>

    main {
        display: grid;
        grid-template-columns: 1fr 300px;
    }


    aside {
        order:-1;
    }
</style>


