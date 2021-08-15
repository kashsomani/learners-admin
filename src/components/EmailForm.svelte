<script>
    export let students;
    import { sendEmail } from "../firebase";
    $: mes = "";
    let grade = 1;
    let subject = "";
    let grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    async function sendEmailToAll() {
            let email = {
                to: students.map((el) => el.email),
                message: {
                    subject: subject,
                    text: mes,
                },
            };
            mes = "";
            await sendEmail(email).then(alert("Email(s) sent to everyonee!"));
    }
    async function sendEmailToGrade() {
        let email = {
            to: students.filter((e) => e.grade === grade).map((el) => el.email),
            message: {
                subject: subject,
                text: mes,
            },
        };
        await sendEmail(email).then(alert(`Email(s) sent to grade ${grade}!`));
    }
</script>

<div class="grid grid-cols-1 place-items-center text-center">
    <div class="input-container depressed ">
        <input class="font-bold" type="text" bind:value={subject} placeholder="Subject" />
    </div>
    <div class="textarea-container depressed">
        <textarea type="text" bind:value={mes} />
    </div>
    <div class="grid grid-cols-7 place-items-center mt-2">
        <div class="col-span-3">
            <button class="embossed p-4 font-bold text-xs md:text-xl" on:click={sendEmailToAll}
                >Send email to all</button
            >
        </div>
        <div>OR</div>
        <div class="grid grid-cols-5 col-span-3 place-items-center">
            <select bind:value={grade} class="embossed col-span-1">
                {#each grades as gradeOption}
                    <option value={gradeOption} class="rounded-2xl">
                        {gradeOption}
                    </option>
                {/each}
            </select>
            <button
                class="embossed p-1 font-bold col-span-4 text-xs md:text-xl"
                on:click={() => {
                    sendEmailToGrade();
                }}>Send email to specific grade</button
            >
        </div>
    </div>
</div>

<style lang="postcss">
    
    textarea {
        border: none;
        outline: none;
        resize: none;
        background: transparent;
        @apply w-4/5 h-96 font-bold text-base;
    }
    .textarea-container {
        @apply bg-transparent text-center w-4/5 p-6 m-1 font-bold grid grid-cols-1 place-items-center;
    }
    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: black;
        opacity: 1; /* Firefox */
        @apply font-bold;
    }
    div{
        @apply text-sm md:text-xl;
    }
</style>
