<script>
    export let students;
</script>
<div class="grid grid-cols-2">
    {#each students as {name, email, grade}}
    <div class="embossed p-4 m-8 grid grid-cols-1 place-items-center">
        <div>{name}</div> 
         <div>{email}</div> 
        <div>{grade}</div>
    </div>
{/each}
</div>
