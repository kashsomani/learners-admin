<script>
	import Layout from "./components/Layout.svelte";
</script>

<main>
	<Layout />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	main {
		@apply h-full w-full;
	}
	.depressed {
		border-radius: 50px;
		background: #247f5c;
		box-shadow: inset 20px 20px 60px #1f6c4e, inset -20px -20px 60px #29926a;
	}
	.embossed {
		border-radius: 50px;
		background: #247f5c;
		box-shadow: 23px 23px 54px #1c6449, -23px -23px 54px #2c9a6f;
	}
</style>
