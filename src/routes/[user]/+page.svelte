<script lang="ts">
	import type { PageData } from "./$types";
  import { enhance } from "$app/forms";

  export let data: PageData
  let isModalOpen = false

  async function deleteNote(title: string) {
    let res = await fetch(`http://localhost:3000/delete/${data.user}/${title}`, {
      method: "DELETE",
      headers: {
        'Authorization': `${data.cookieVal}`
      }
    })
    if (res.ok) {
      location.reload()
    }
  }
</script>

<svelte:head>
  <title>{data.user} | Avis</title>
</svelte:head>

<div class="mt-24 mx-4">
  <div class="grid grid-cols-3 z-0">
    {#if data.notes != null}
      {#each data.notes as note }
        <div class="card w-96 bg-white border-black border-2 text-black shadow-xl m-8">
          <div class="card-body">
            <h2 class="card-title">{note.title}</h2>
            <p class="truncate">{note.description}</p>
          </div>
          <div class="card-actions justify-end mr-1">
            <a href="/{data.user}/view/{note.title}" class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 border-2 rounded-xl w-10 h-10 mb-1">
              <span class="material-symbols-outlined">
                edit
              </span>
            </a>
            <button class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 border-2 rounded-xl w-10 h-10 mb-1" on:click={() => deleteNote(note.title)}>
              <span class="material-symbols-outlined">
                delete
              </span>
            </button>
          </div> 
        </div>
      {/each}
    {/if}
  </div>
</div>

<div class="w-screen inline-block fixed bottom-0 p-2">
  <button class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 border-2 rounded-md m-auto mr-2 transition-all ease-in-out hover:scale-125 hover:mr-4 float-left" on:click={()=>isModalOpen = true}>
    <span class="material-symbols-outlined">
      add
    </span>
  </button>
  <form method="POST" action="?/Logout">
    <button class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 border-2 rounded-md m-auto mr-2 transition-all ease-in-out hover:scale-125 float-left">
      <span class="material-symbols-outlined">
        logout
      </span>
      Logout
    </button>
  </form>
</div>

<dialog class="modal" class:modal-open={isModalOpen}>
  <div class="modal-box card bg-white border-2 border-black border-dashed rounded-xl text-black w-10/12">
    <h3 class="font-bold text-3xl justify-center card-title">New Note</h3>
    <form class="card-body" method="POST" action="?/Create" use:enhance> 
      <div class="form-control">
        <label class="label" for="title">
          <span class="label-text text-black">Title</span>
        </label>
        <input name="title" type="text" placeholder="Title" class="input input-bordered bg-white border-black border-2 border-dashed text-black" required />
      </div>
      <div class="form-control">
        <label class="label" for="description">
          <span class="label-text text-black">Description</span>
        </label>
        <textarea id="textarea" name="description" placeholder="Description" class="input input-bordered bg-white border-black border-2 border-dashed text-black h-48 p-2" required />
      </div>
      <div class="form-control mt-6">
        <button class="btn bg-[#67a391] text-black hover:bg-[#67a391] border-black p-2 transition-all ease-in-out hover:scale-125 hover:border-[#67a391] border-2 rounded-md" type="submit">Create</button>
      </div>
    </form>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button on:click={()=>isModalOpen = false}>close</button>
  </form>
</dialog>

