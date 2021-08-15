<script>
    import { logged_in_store } from "../stores/logged_in";
    import {signOut} from '../firebase'
    async function signOutCheck() {
    logged_in_store.set(await signOut());
  }
  
</script>

<div class="fixed top-0 w-full h-1  text-center">
    <div class="p-4 grid grid-cols-11 place-items-center embossed m-4">
        <div class="col-span-3 grid grid-cols-1 place-items-center">
            <button class="depressed p-4 font-bold text-sm md:text-xl" on:click={signOutCheck}>Sign Out</button>
        </div>
        <div class="col-span-2"></div>
        <div>LA Admin Console</div>
        <div class="col-span-5"></div>
    </div>
</div>
