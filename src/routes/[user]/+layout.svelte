<script lang="ts">
  import type { LayoutData } from "./$types";
  import "../../app.css"

  export let data: LayoutData
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
</svelte:head>

<html lang="en" class="h-screen">
  <header class="m-2">
    <div class="navbar bg-white p-2 border-black border-2 mt-2 rounded-lg inline-block">
      <a class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 border-2 rounded-md float-left" href="/{data.username}" data-sveltekit-reload>
        {data.username}
      </a>
      <div class="dropdown dropdown-end float-right">
        <div tabindex="0" role="button" class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 border-2 rounded-md">
          <span class="material-symbols-outlined">
            account_circle
          </span>
        </div>
        <ul tabindex="-1" class="dropdown-content z-[1] menu p-2 shadow bg-[#FFEFE8] text-black rounded-box min-w-max border-black border-2">
          <li>
            <a href='/{data.username}/account' class="line-through">
              Account
              <span class="material-symbols-outlined">
                manage_accounts
              </span>
            </a>
          </li>
          <li>
            <a href='/{data.username}/settings' class="line-through">
              Settings
              <span class="material-symbols-outlined">
                settings
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main class="min-h-screen">
    <slot></slot>
  </main>
</html>
