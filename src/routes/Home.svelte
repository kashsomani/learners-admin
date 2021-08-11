<script>
import "firebase/auth";
  import firebase from "firebase/app";
  import { onMount } from "svelte";
    import {students, getStudents, signOut} from '../firebase'
    import { students_store } from "../stores/students"
    import { logged_in_store } from "../stores/logged_in";
    async function get() {
    students_store.set(await getStudents());
  }
  $: logged_in = false;

$: observer = firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    logged_in = true;
  } else {
    logged_in = false;
  }
});

onMount(async () => {
  get();
});
students.onSnapshot(get);

async function signOutCheck() {
  logged_in_store.set(await signOut());
}
let students_temp = []
students_store.subscribe((value) => {
    students_temp = value;
  });
</script>



<div class="h-full w-full">
    {JSON.stringify(students_temp)}
</div>