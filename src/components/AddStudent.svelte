<script>
    import { addStudent } from "../firebase";
    let name = "";
    let email = "";
    let grade = 1;
    let grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    async function add() {
        if (name && email) {
            await addStudent({ name, email, grade });
            name = "";
            email = "";
            grade = 1;
        }
        else
            alert("Name | Email cannot be empty")
    }
</script>

<div class="grid grid-cols-1 place-items-center mt-4">
    <div>
        <h1>ADD STUDENTS:</h1>
    </div>
    <div class="grid grid-cols-2 gap-0 place-items-center depressed w-96 p-2">
        <div class="align-middle">Grade:</div>
        <div class="embossed">
            <select bind:value={grade} class="embossed">
                {#each grades as gradeOption}
                    <option value={gradeOption} class="rounded-2xl">
                        {gradeOption}
                    </option>
                {/each}
            </select>
        </div>
    </div>
    <div class="input-container depressed">
        <input type="text" bind:value={name} placeholder="Name" />
    </div>
    <div class="input-container depressed">
        <input type="text" bind:value={email} placeholder="Email" />
    </div>
    <button class="embossed p-4" on:click={add}>Add</button>
</div>

<style>
    select {
        outline: none;
    }
    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: black;
        opacity: 1; /* Firefox */
    }
</style>
