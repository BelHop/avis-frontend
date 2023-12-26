<script lang="ts">
  export let img: string = "";
  export let alt: string = "";
  export let title: string;
  export let content: string;
</script>

<div class="card card-side w-6/12 bg-white border-black border-2 text-black shadow-xl">
<figure><img src={img} alt={alt}/></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{content}</p>
  </div>
</div>
