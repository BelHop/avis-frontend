<script lang="ts">
  import "../../app.css"

  let username: any;
  let password: any;
</script>

<svelte:head>
  <title>Login | Avis</title>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
</svelte:head>

<html lang="en">
  <header class="mt-5">
    <a class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 transition-all ease-in-out hover:scale-125 hover:border-[#FFEFE8] border-2 rounded-md ml-5" href="/">
    <span class="material-symbols-outlined">arrow_back</span>
    </a>
  </header>
  <main>
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card shrink-0 w-full max-w-lg shadow-2xl bg-white border-black border-2 border-dashed">
          <form class="card-body" method="POST">
            <div class="form-control">
              <label class="label" for="username">
                <span class="label-text text-black">Username</span>
              </label>
              <input name="username" type="username" placeholder="username" class="input input-bordered bg-white border-black border-2 border-dashed text-black" required />
            </div>
            <div class="form-control">
              <label class="label" for="password">
                <span class="label-text text-black">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" class="input input-bordered bg-white border-black border-2 border-dashed text-black" required />
              <a href="/wip" class="label-text-alt link link-hover text-black mt-3">Forgot password?</a>
            </div>
            <div class="form-control mt-6">
              <button class="btn bg-[#67a391] text-black hover:bg-[#67a391] border-black p-2 transition-all ease-in-out hover:scale-125 hover:border-[#67a391] border-2 rounded-md" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</html>
