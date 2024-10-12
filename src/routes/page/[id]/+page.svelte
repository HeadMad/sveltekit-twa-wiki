<script>
  export let data;

</script>
<h1>{data.title}</h1>
<ul>
  {#each data.sections as section}
    <li>{section.line}</li>
  {/each}
</ul>