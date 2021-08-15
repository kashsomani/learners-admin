<script>
  import "firebase/auth";
  import firebase from "firebase/app";
  import { onMount } from "svelte";
  import { students, getStudents } from "../firebase";
  import { students_store } from "../stores/students";
  import Students from "../components/Students.svelte";
  import Navbar from "../components/Navbar.svelte";
  import EmailForm from "../components/EmailForm.svelte";
  import AddStudent from "../components/AddStudent.svelte";
  import { sortByEmail, sortByGrade, sortByName } from "../components/sorter";
  import Modal from '../components/Modal.svelte'
  import { showModal } from "../stores/show_modal";


  let sorters = {sortByGrade, sortByName, sortByEmail}
  let sorter = sortByGrade;

  async function get() {
    students_store.set(await getStudents());
  }

  let logged_in = false;

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

  $: students_store.subscribe((value) => {
    students_temp = sorter(value) || sortByGrade(value);
  });

  function changeSorter(str){
    sorter = sorters[str]
  }
  

  let showModal_local = false;
  showModal.subscribe((value) => {
        showModal_local = value;
    });
</script>

<Navbar />

<div class="h-full w-full">
  <div class="h-32" />
  <div class="grid grid-cols-1">
    <div class="grid grid-cols-1">
      <div class="grid grid-cols-3">
        <button class="depressed" on:click="{()=>changeSorter("sortByEmail")}"> Sort By Email</button>
        <button class="depressed" on:click="{()=>changeSorter("sortByGrade")}"> Sort By Grade</button>
        <button class="depressed" on:click="{()=>changeSorter("sortByName")}"> Sort By Name</button>
  
      </div>
      <Students students={students_temp} />
    </div>
    <EmailForm students={students_temp} />
    <AddStudent />
    <button class="embossed p-2" on:click="{()=>{showModal.set(true)}}">Graduate Us</button>
    {#if showModal_local}
        <Modal students={students_temp}/>
    {/if}
  </div>
</div>
<style lang="postcss">
  button{
    @apply p-2;
  }
</style>