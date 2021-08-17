<script>
    export let students;
    $: grade10 = students.filter((el) => el.grade === 10);
    $: grade1_9 = students.filter((el) => el.grade !== 10);
    import graduate from "./graduate";
    import { showModal } from "../stores/show_modal";
    function graduate_local() {
        graduate(grade1_9, grade10);
        showModal.set(false);
        alert("Students graduated!");
    }
</script>

<div
    class="fixed inset-0 bg-green-900 opacity-80 grid grid-cols-1 place-items-center"
>
    <div
        class="w-60 h-60 bg-green-200 opacity-80 rounded-xl grid grid-cols-1 place-items-center"
    >
        <div class="text-center">
            This action is irreversible please confirm graduation:
        </div>
        <div class="grid grid-cols-2 mx-auto">
            <div
                class="bg-red-500 opacity-95 m-2 grid grid-cols-1 place-items-center"
            >
                <button
                    on:click={() => showModal.set(false)}
                    class="text-sm text-center">CANCEL</button
                >
            </div>
            <div
                class="bg-yellow-500 opacity-95 m-2  grid grid-cols-1 place-items-center"
            >
                <button on:click={graduate_local} class="text-sm"
                    >CONFIRM</button
                >
            </div>
        </div>
    </div>
</div>
