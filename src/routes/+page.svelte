<script>
  let query = '';

  async function search(query, offset = 0, limit = 10){
    var response = await fetch('/api/v1/search?query=' + query + '&offset=' + offset + '&limit=' + limit);
    return await response.json();
  }

</script>

<form action="/api/v1/search" on:submit|preventDefault={(e) => query = e.target.elements.query.value}>
  <input type="text" name="query">
  <button>Найти</button>
</form>


{#if query}
{#await search(query)}
  Загрузка...
{:then response}
{#if response.ok}
  <ul>
    {#each response.result.search as item}
    <li>
      <h3><a href="/page/{item.pageid}">{item.title}</a></h3>
      <p>{item.snippet}</p>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </li>
    {/each}
  </ul>
{:else}
  <pre>{JSON.stringify(response, null, 2)}</pre>
{/if}
{/await} 
{/if}


