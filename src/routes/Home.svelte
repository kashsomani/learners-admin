<script>
  import "firebase/auth";
  import firebase from "firebase/app";
  import { onMount } from "svelte";
  import { students, getStudents, sendEmail } from "../firebase";
  import { students_store } from "../stores/students";
  import Students from "../components/Students.svelte";
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
  $: mes = "";
  onMount(async () => {
    get();
  });
  students.onSnapshot(get);
  let students_temp = [];
  students_store.subscribe((value) => {
    students_temp = value;
  });
  async function sendEmailToAll() {
    students_temp.forEach(async (el) => {
      let email = {
        to: el.email,
        message: {
          subject: "hi",
          text: mes,
        },
      };
      mes = "";
      await sendEmail(email);
    });
  }
</script>

<Navbar />

<div class="h-full w-full">
  <div class="h-32" />
  <div class="grid grid-cols-1">
    <div>
      <Students students={students_temp} />
    </div>
    <div class="grid grid-cols-1 place-items-center text-center">
      <div class="textarea-container depressed">
        <textarea
          type="text"
          bind:value={mes}
        />
      </div>
      <button class="depressed p-4 font-bold" on:click={sendEmailToAll}
        >Send email to all</button
      >
    </div>
  </div>
</div>

<style lang="postcss">
  textarea {
    border: none;
    outline: none;
    resize: none ;
    background: transparent;
    @apply text-center w-4/5 h-96 font-bold text-base;
  }
  .textarea-container {
    @apply bg-transparent text-center w-4/5 p-6 m-1 font-bold grid grid-cols-1 place-items-center;
  }
</style>
