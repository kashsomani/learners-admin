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

  
</style>
