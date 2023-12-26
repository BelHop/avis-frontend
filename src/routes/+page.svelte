<script lang="ts">
  import "../app.css"
	import { blur, fade } from "svelte/transition";
	import type { PageServerLoad } from "./login/$types";
	import { redirect } from "@sveltejs/kit";

  let y: any;
</script>

<svelte:window bind:scrollY={y}/>

<svelte:head>
  <title>Avis</title>
</svelte:head>


<html lang="en">
  <header class="m-2 text-center">
    <div class="inline-block lg:float-left ml-5 card bg-white p-3 border-black border-2">
      <a class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 transition-all ease-in-out hover:scale-125 hover:-translate-x-5 hover:border-[#FFEFE8] border-2 rounded-md" href="/login">
        Sign in
      </a>
      <a class="btn btn-active bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 transition-all ease-in-out hover:scale-125 hover:translate-x-5 hover:border-[#FFEFE8] border-2 rounded-md" href="/register">
        Sign up
      </a>
    </div>
    {#if y > 20}
      <h1 class="font-bold text-4xl m-auto fixed left-1/2 top-1/3 -ml-40 -mr-40" transition:blur={{ amount: 5 }}>Welcome to <p class="italic inline-block">Avis</p></h1>
    {:else}
      <h1 class="font-bold text-4xl hidden" transition:blur={{ amount: 5 }}>Welcome to <p class="italic inline-block">Avis</p></h1>
    {/if}
  </header>
  <main class="mt-20 mx-4">
    <div class="group w-max m-auto">
      <div class="card card-side bg-white border-black border-2 border-dashed text-black shadow-xl justify-center w-fit m-auto translate-y-16 transition-transform ease-in-out group-hover:translate-x-20">
        <div class="card-body">
          <p class="card-title text-center">Simple Note Taking</p>
        </div>
      </div>
      <div class="card card-side bg-white border-black border-2 border-dashed text-black shadow-xl justify-center w-fit m-auto translate-y-12 transition-transform ease-in-out group-hover:-translate-x-20">
        <div class="card-body">
          <p class="card-title text-center">In a simple App</p>
        </div>
      </div>
    </div>
    {#if y > 200}
      <div class="mt-60 mb-60 mr-24 float-right">
        <div class="hero min-h-fit">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src="/landing/undraw_notes_re_pxhw.svg" alt="Woman looking at notebook" class="max-w-sm rounded-lg shadow-2xl card bg-white border-black border-2 border-dashed text-black p-5 translate-y-10 transition-all ease-in-out hover:translate-x-8 -translate-x-6 scale-125" transition:fade={{ delay: 150, duration: 200 }}/>
            <div class="card-body card card-side bg-white border-black border-2 border-dashed text-black shadow-xl justify-center w-fit transition-transform ease-in-out hover:-translate-y-10" transition:fade={{ delay: 150, duration: 300 }}>
              <p class="card-title text-center">All you gotta do is write</p>
            </div>
          </div>
        </div> 
      </div>
    {:else}
      <div class="mt-60 mb-20">
        <div class="hero min-h-fit">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src="/landing/undraw_notes_re_pxhw.svg" alt="Woman looking at notebook" class="max-w-sm rounded-lg shadow-2xl card bg-white border-black border-2 border-dashed text-black p-5 translate-y-10 transition-all ease-in-out hover:translate-x-8 -translate-x-6 scale-125 opacity-0"/>
            <div class="card-body card card-side bg-white border-black border-2 border-dashed text-black shadow-xl justify-center w-fit opacity-0">
              <p class="card-title text-center">All you gotta do is write <br>Go back to the top and sign up</p>
            </div>
          </div>
        </div> 
      </div>
    {/if}
    {#if y > 700}
      <div class="mt-10 mb-60 ml-24 float-left">
        <div class="hero min-h-fit">
          <div class="hero-content flex-col lg:flex-row">
            <img src="/landing/undraw_post_re_mtr4.svg" alt="Woman looking at notebook" class="max-w-sm rounded-lg shadow-2xl card bg-white border-black border-2 border-dashed text-black p-5 translate-y-10 transition-all ease-in-out hover:translate-x-8 -translate-x-6 scale-125" transition:fade={{ delay: 150, duration: 200 }}/>
            <div class="card-body card card-side bg-white border-black border-2 border-dashed text-black shadow-xl justify-center w-fit transition-transform ease-in-out hover:-translate-y-10" transition:fade={{ delay: 150, duration: 300 }}>
              <p class="card-title text-center">That's literally it</p>
            </div>
          </div>
        </div> 
      </div>
    {:else}
      <div class="mt-60 mb-60">
        <div class="hero min-h-fit">
          <div class="hero-content flex-col lg:flex-row">
            <img src="/landing/undraw_post_re_mtr4.svg" alt="Woman looking at notebook" class="max-w-sm rounded-lg shadow-2xl card bg-white border-black border-2 border-dashed text-black p-5 translate-y-10 transition-all ease-in-out hover:translate-x-8 -translate-x-6 scale-125 opacity-0"/>
            <div class="card-body card card-side bg-white border-black border-2 border-dashed text-black shadow-xl justify-center w-fit opacity-0">
              <p class="card-title text-center">That's literally it</p>
            </div>
          </div>
        </div> 
      </div>
    {/if}
    {#if y > 1500}
      <div class="hero min-h-fit mb-40" transition:fade={{ delay: 150, duration: 200 }}>
        <div class="hero-content text-center border-black border-2 border-dashed bg-white rounded-lg">
          <div class="min-w-fit">
            <h3 class="p-10 card-title text-black">You should <p class="italic font-bold">Really</p> try it</h3>
            <button class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 transition-all ease-in-out hover:scale-125 hover:-translate-x-5 hover:border-black border-2 rounded-md scale-125">
              Sign in
            </button>
            <button class="btn btn-active bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 transition-all ease-in-out hover:scale-125 hover:translate-x-5 hover:border-black border-2 rounded-md scale-125">
              Sign up
            </button>
          </div>
        </div>
      </div>
    {:else}
      <div class="hero min-h-fit mb-40" transition:fade={{ delay: 150, duration: 200 }}>
        <div class="hero-content text-center border-black border-2 border-dashed bg-white rounded-lg">
          <div class="min-w-fit">
            <h3 class="p-10 card-title text-black">You should <p class="italic font-bold">Really</p> try it</h3>
            <a class="btn bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 transition-all ease-in-out hover:scale-125 hover:-translate-x-5 hover:border-black border-2 rounded-md" href="/login">
              Sign in
            </a>
            <a class="btn btn-active bg-[#FFEFE8] text-black hover:bg-[#FFEFE8] border-black p-2 transition-all ease-in-out hover:scale-125 hover:translate-x-5 hover:border-black border-2 rounded-md" href="/register">
              Sign up
            </a>
          </div>
        </div>
      </div>
    {/if}
  </main>
  <footer class="w-screen h-fit bg-white border-t-2 border-black border-dashed text-black text-center">
    <img src="/svelte.svg" alt="Svelte Icon" class="w-20 h-20 py-3 m-auto"> 
  </footer>
</html>
