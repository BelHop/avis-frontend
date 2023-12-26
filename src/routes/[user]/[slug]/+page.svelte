<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData
</script>

<svelte:head>
  <title>Login | Avis</title>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
</svelte:head>

<div class="card w-6/12 h-fit mt-24 mx-12 bg-white border-black border-2 text-black ">
  <div class="card-body">
    <h2 class="card-title justify-center text-4xl">
      { data.note.Title }
    </h2>
    <p class="justify-center text-xl">
      { data.note.Description }
    </p>
  </div> 
</div>
