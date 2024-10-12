export async function load({ params }) {
  const response = await fetch(`https://ru.wikipedia.org/w/api.php?action=parse&format=json&prop=sections&pageid=` + params.id);
  const data = await response.json();

  return data.parse;
}