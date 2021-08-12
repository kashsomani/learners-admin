<script>
    export let students;
    import { deleteStudent } from "../firebase";
</script>

<div class="grid grid-cols-2">
    {#each students as { name, email, grade, id }}
        <div class="embossed p-4 m-8 grid grid-cols-1 place-items-center">
            <div>{name}</div>
            <div>{email}</div>
            <div>{grade}</div>
            <div>{id}</div>
            <div><button class="depressed" on:click="{deleteStudent(id)}">X</button></div>
        </div>
    {/each}
</div>
