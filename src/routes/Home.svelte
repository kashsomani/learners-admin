<script>
  import "firebase/auth";
  import firebase from "firebase/app";
  import { onMount } from "svelte";
  import { students, getStudents, signOut } from "../firebase";
  import { students_store } from "../stores/students";
  import Students from '../components/Students.svelte'
  import Navbar from "../components/Navbar.svelte";
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
  let students_temp = [];
  students_store.subscribe((value) => {
    students_temp = value;
  });
  
</script>
<Navbar/>

<div class="h-full w-full">
  <div class="h-32"></div>
  
  <Students students={students_temp}/>
</div>
