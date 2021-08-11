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
<div  id="container">

  <div id="login-form">
    <div class="input-container">
      <input type="text" bind:value={email}>
      
        
    </div>
    <div class="input-container">
      <input type="password" bind:value={password}>
    </div>
    
  <button on:click="{()=>{signInWithCheck(email,password)}}">LOGIN</button>
  
  </div>
</div>
<style lang="postcss">
  #container{
    border-radius: 50px;
background: #247f5c;
box-shadow:  20px 20px 60px #1f6c4e,
             -20px -20px 60px #29926a;
             @apply mx-auto p-8 h-96 flex  ;
  }
  #login-form{
    @apply grid grid-cols-1 place-items-stretch gap-2 m-auto;
  }
  input{
    border: none;
    resize: none;
    outline: none;
    background: transparent;
    @apply text-center;
  }
  .input-container{
    border-radius: 50px;
background: #247f5c;
box-shadow: inset 20px 20px 60px #1f6c4e,
            inset -20px -20px 60px #29926a;
            @apply bg-transparent text-center w-96 p-2 m-1;
  }
  button{
    border: none;
    border-radius: 49px;
background: #247f5c;
box-shadow:  23px 23px 54px #1c6449,
             -23px -23px 54px #2c9a6f;
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
