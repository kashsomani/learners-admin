<script>
    export let students;
    import { deleteStudent } from "../firebase";
    let map = {
            "-2":"Nursery",
            "-1":"LKG",
            "0":"HKG"
        }
    let gradeMapper = (grade)=> grade < 1? map[grade.toString()] : grade
</script>

<div class="grid grid-cols-2">
    {#each students as { name, email, grade, id, phone }}
        <div
            class="embossed p-4 m-8 grid grid-cols-1 place-items-center text-sm md:text-xl"
        >
            <div>Name : {name}</div>
            <div>Email : {email}</div>
            <div>Grade : {gradeMapper(grade)}</div>
            <div>Phone : {phone}</div>
            <div>ID : {id}</div>
            <div>
                <button class="depressed " on:click={deleteStudent(id)}>Delete</button
                >
            </div>
        </div>
    {/each}
</div>
