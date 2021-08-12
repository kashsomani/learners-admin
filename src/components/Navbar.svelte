<script>
    import { logged_in_store } from "../stores/logged_in";
    import {signOut} from '../firebase'
    async function signOutCheck() {
    logged_in_store.set(await signOut());
  }
  
</script>

<div class="fixed top-0 w-full h-1  text-center">
    <div class="p-4 grid grid-cols-5 place-items-center embossed m-4">
        <div>
            <button class="depressed p-4 font-bold" on:click={signOutCheck}>Sign Out</button>
        </div>
        <div class="col-span-1"></div>
        <div>LA Admin Console</div>
        <div class="col-span-2"></div>
    </div>
</div>
