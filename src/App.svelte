<script>
	import Login from "./components/Login.svelte";
  import { logged_in_store } from "./stores/logged_in";
	let logged_in = false;
  
	logged_in_store.subscribe((value) => {
	  logged_in = value;
	});
  
	
  </script>
  
  <main>
	{#if logged_in}
	  hi
	{:else}
	  <Login/>
	{/if}
  </main>
  
  <style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	main{
		@apply p-2;
	}
	body{
		background-color: #247f5c;
	}
  </style>
  