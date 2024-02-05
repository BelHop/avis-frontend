<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title> {data.username} account | Avis</title>
</svelte:head>

<body>
  <div class="card bg-white border-black border-2 text-black shadow-xl mx-auto top-16 w-3/4">
    <form action="?/Save" method="POST">
      <div class="card-body">
        <div class="mt-4 mb-2">
          <label for="username" class="inline-block mr-4">Username:</label>
          <input name="title" type="text" placeholder="Username" value={data.username} class="input input-bordered bg-white border-black border-2 border-dashed text-black w-max inline-block" required />
        </div>
        <div class="mt-2">
          <label for="password" class="inline-block mr-5">Password:</label>
          <input name="title" type="password" placeholder="Password" value={data.password} class="input input-bordered bg-white border-black border-2 border-dashed text-black w-max inline-block" required />
        </div>
      </div>
      <div class="card-actions my-8">
        <button class="btn bg-green-300 text-black hover:bg-green-300 border-black p-2 transition-all ease-in-out hover:scale-110 hover:border-green-300 border-2 rounded-md w-1/3 ml-8" >Save</button>
      </div>
    </form>
  </div> 
</body>
