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
  
</script>
<div class="grid grid-cols-1 place-items-center gap-2 mx-16" id="login-form">
  <input type="text" bind:value={email}>
<input type="password" bind:value={password}>

<button on:click="{()=>{signInWithCheck("kash@kashsomani.com","Benfinegold99")}}">sgffg</button>

</div>
<style>
  #login-form{
    border-radius: 50px;
background: #247f5c;
box-shadow:  20px 20px 60px #1f6c4e,
             -20px -20px 60px #29926a;
  }
</style>
