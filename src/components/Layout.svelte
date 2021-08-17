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

<div id="main">
    {#if logged_in}
        <Router {routes} />
    {:else}
        <Login />
    {/if}
    <div
        class="text-green-300 fixed bottom-0 h-16 w-full bg-green-900 bg-opacity-75 grid grid-cols-1 place-items-center text-base p-2"
    >
        <div>&#169; Kash Somani, 2021</div>
        <div class="hover:underline">
            <a href="https://www.kashsomani.com">kashsomani.com</a>
        </div>
    </div>
</div>

<style global lang="postcss">
    #main {
        background-color: #247f5c;
        @apply font-bold text-xl flex h-full w-full items-center justify-items-center;
    }
    button:focus {
        outline: 1px dashed black;
    }
</style>
