import { json } from '@sveltejs/kit';

export async function GET({ url, fetch }) {
  const id = url.searchParams.get('id');
  const section = url.searchParams.get('section');

  const wikiUrl = `https://ru.wikipedia.org/w/api.php?action=parse&format=json&prop=wikitext&section=${section}&pageid=` + id;

  const response = await fetch(wikiUrl);
  const data = await response.json();

  if ('error' in data)
    return json({ ok: false, error: data.error });

  const result = {
    title: data.parse.title,
    content: data.parse.wikitext['*']
  };
  
  return json({ ok: true, result });
}