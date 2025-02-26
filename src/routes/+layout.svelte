
<script>

    import Header from "./header.svelte";
    import Footer from "./footer.svelte";
    import "./styles.css"

    export let data;

    $: ({ all_episodes } = data)


</script>


<Header />


<main>

    <slot />

</main>


<Footer />


