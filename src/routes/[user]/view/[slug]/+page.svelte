<script lang="ts">
	import type { PageData } from "./$types";
  import { enhance } from "$app/forms";

  export let data: PageData

  async function deleteNote(title: string) {
    let res = await fetch(`http://localhost:3000/delete/${data.username}/${title}`, {
      method: "DELETE",
      headers: {
        'Authorization': `${data.cookie}`
      }
    })
    if (res.ok) {
      location.reload()
    }
  }
</script>

<svelte:head>
  <title>{data.note.Title} | Avis</title>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
</svelte:head>

<div class="card h-fit mt-24 mx-48 bg-white border-black border-2 text-black ">
  <form class="card-body" method="POST" use:enhance> 
    <div class="form-control">
      <label class="label self-center" for="title">
        <span class="label-text text-black">Title</span>
      </label>
      <input name="title" type="text" placeholder="Title" class="input input-bordered bg-white border-black border-2 border-dashed text-black text-center text-2xl self-center" value={data.note.Title} required />
    </div>
    <div class="form-control">
      <label class="label self-center" for="description">
        <span class="label-text text-black">Description</span>
      </label>
      <textarea id="textarea" name="description" placeholder="Description" class="input input-bordered bg-white border-black border-2 border-dashed text-black h-48 p-2" value={data.note.Description} required />
    </div>
    <div class="form-control mt-6 inline-block">
      <button class="btn bg-[#67a391] text-black hover:bg-[#67a391] border-black p-2 transition-all ease-in-out hover:scale-110 hover:border-[#67a391] border-2 rounded-md w-1/3" type="submit">Update</button>
      <button class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 transition-all ease-in-out hover:scale-110 hover:border-[#FFEFE8] border-2 rounded-md w-1/3 ml-8" on:click={() => deleteNote(data.note.Title)}>Delete</button>
      <a class="btn bg-sky-300 text-black hover:bg-sky-300 border-black p-2 border-2 rounded-xl w-10 h-10 float-right" href='/{data.username}'>
        <span class="material-symbols-outlined">
          arrow_back
        </span>
      </a> 
    </div>
  </form>
</div>
