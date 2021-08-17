<script>
    export let students;
    import { deleteStudent } from "../firebase";
    let map = {
        "-2": "Nursery",
        "-1": "LKG",
        "0": "HKG",
    };
    let currentGrade = 1;
    let gradeMapper = (grade) => (grade < 1 ? map[grade.toString()] : grade);
    let grades = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(gradeMapper);
    $: gradeStudents = students.filter(
        (stu) => {return currentGrade=="all"?
        true:
        gradeMapper(stu.grade) == gradeMapper(currentGrade)
    }
    );
</script>

<div class="grid grid-cols-2 md:grid-cols-5">
    {#each grades as grade}
        <div
            class="embossed p-4 m-8 grid grid-cols-1 place-items-center text-sm md:text-xl"
        >
            <button
                class="text-sm md:text-lg"
                on:click={() => {
                    currentGrade = grade;
                }}>{grade}</button
            >
        </div>
    {/each}
    <div
            class="embossed p-4 m-8 grid grid-cols-1 place-items-center text-sm md:text-xl"
        >
            <button
                class="text-sm md:text-lg"
                on:click={() => {
                    currentGrade = "all";
                }}>ALL</button
            >
        </div>
</div>
<div class="grid grid-cols-2">
    {#each gradeStudents as { name, email, grade, id, phone }}
        <div
            class="embossed p-4 m-8 grid grid-cols-1 place-items-center text-sm md:text-xl"
        >
            <div>Name : {name}</div>
            <div>Email : {email}</div>
            <div>Grade : {gradeMapper(grade)}</div>
            <div>Phone : {phone}</div>
            <div>ID : {id}</div>
            <div>
                <button class="depressed " on:click={deleteStudent(id)}
                    >Delete</button
                >
            </div>
        </div>
    {/each}
</div>
