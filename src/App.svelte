<script>
import Layout from "./components/Layout.svelte";
  </script>
  
<main>
		<Layout/>
</main>
  
  <style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	main{
		@apply h-full w-full;
	}
  </style>
  