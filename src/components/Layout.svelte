<script>
    import Router from "svelte-spa-router";
    import { routes } from "../router";
    import Login from "./Login.svelte";
    import { logged_in_store } from "../stores/logged_in";

    let logged_in = false;

    logged_in_store.subscribe((value) => {
        logged_in = value;
    });
</script>

<div>
    {#if logged_in}
        <Router {routes} />
    {:else}
        <Login />
    {/if}
</div>

<style lang="postcss">
    div {
        background-color: #247f5c;
        @apply font-bold text-xl flex h-full w-full items-center justify-items-center;
    }
    *:focus {
        outline: none;
    }
</style>
