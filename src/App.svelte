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
		@apply w-full min-h-screen;
	}
	body {
		@apply flex h-full w-full;
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
	input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: rgb(0, 0, 0) !important;
  }
  input {
    border: none;
    resize: none;
    outline: none;
    background: transparent;
    @apply text-center;
  }
  .input-container {
    @apply bg-transparent text-center w-96 p-2 m-1;
  }
  button {
    border: none;

    @apply font-bold text-xl mx-8 mt-2 h-16 p-2;
  }
  select{
	border: none;
        outline: none;
        resize: none;
        background: transparent;
  }
</style>
