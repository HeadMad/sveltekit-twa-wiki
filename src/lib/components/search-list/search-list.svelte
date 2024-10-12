<script>
  export let query = '';

  async function search(query, offset = 0, limit = 10){
    var response = await fetch('/api/v1/search?query=' + query + '&offset=' + offset + '&limit=' + limit);
    return await response.json();
  }

</script>

{#await search(query)}
  <slot name="loading">Загрузка...</slot>
{:then response} 
  {#each response.result.search as item}
    <slot {item}/>
  {/each}
{/await}  