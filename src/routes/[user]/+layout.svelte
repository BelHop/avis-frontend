<script lang="ts">
  import type { LayoutData } from "./$types";
  import "../../app.css"

  export let data: LayoutData
</script>

<html lang="en" class="h-screen">
  <header class="m-2">
    <div class="navbar bg-white p-2 border-black border-2 mt-2 rounded-lg">
      <a class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 border-2 rounded-md" href="/{data.username}" data-sveltekit-reload>
        {data.username}
      </a>
    </div>
  </header>
  <main class="min-h-screen">
    <slot></slot>
  </main>
</html>
