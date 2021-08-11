<script>
  import { logged_in_store } from "../stores/logged_in";
  $: email = "";
  $: password = "";

  import { signIn } from "../firebase.js";

  async function signInWithCheck(email, password) {
    let val = await signIn(email, password);
    if (val) {
      logged_in_store.set(true);
    } else {
      console.log(val);
    }
  }
  function enter(event) {
    if (event.key === "Enter") {
      signInWithCheck(email, password);
    }
  }
</script>

<div id="container" class="embossed">
  <div id="login-form">
    <div class="input-container depressed">
      <input type="text" bind:value={email} on:keydown={enter} />
    </div>
    <div class="input-container depressed">
      <input type="password" bind:value={password} on:keydown={enter} />
    </div>

    <button
      class="embossed"
      on:click={() => {
        signInWithCheck(email, password);
      }}>LOGIN</button
    >
  </div>
</div>

<style lang="postcss">
  #container {
    @apply mx-auto p-8 h-96 flex;
  }
  #login-form {
    @apply grid grid-cols-1 place-items-stretch gap-2 m-auto;
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

    @apply font-bold text-xl mx-8 mt-2 h-16;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: rgb(0, 0, 0) !important;
  }
</style>
