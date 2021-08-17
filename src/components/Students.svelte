<script>
    export let students;
    import { deleteStudent } from "../firebase";
</script>

<div class="grid grid-cols-2">
    {#each students as { name, email, grade, id, phone }}
        <div
            class="embossed p-4 m-8 grid grid-cols-1 place-items-center text-sm md:text-xl"
        >
            <div>Name : {name}</div>
            <div>Email : {email}</div>
            <div>Grade : {grade}</div>
            <div>Phone : {phone}</div>
            <div>ID : {id}</div>
            <div>
                <button class="depressed " on:click={deleteStudent(id)}>Delete</button
                >
            </div>
        </div>
    {/each}
</div>
