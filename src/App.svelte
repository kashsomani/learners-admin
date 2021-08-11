<script>
	import Login from "./components/Login.svelte";
  import { logged_in_store } from "./stores/logged_in";
	let logged_in = false;
  
	logged_in_store.subscribe((value) => {
	  logged_in = value;
	});
	import Router from 'svelte-spa-router'
	import {routes} from './router'
  </script>
  
  <main>
		{#if logged_in}
		<Router {routes}/>
	{:else}
	  <Login/>
	{/if}
	</main>
  
  <style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	main{
		background-color: #247f5c;
		@apply font-bold text-xl flex h-full w-full items-center justify-items-center ;
	}
	*:focus {
    outline: none;
}
  </style>
  