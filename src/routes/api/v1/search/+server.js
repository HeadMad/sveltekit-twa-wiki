import { json } from '@sveltejs/kit';

export async function GET({ url, fetch }) {
  const query = url.searchParams.get('query');
  const offset = url.searchParams.get('offset') ?? 0;
  const limit = url.searchParams.get('limit') ?? 10;

  const wikiUrl = `https://ru.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&sroffset=${offset}&srlimit=${limit}&srsearch=` + query;

  const response = await fetch(wikiUrl);
  const data = await response.json();

  if ('error' in data)
    return json({ ok: false, error: data.error });
  
  return json({ ok: true, result: data.query });
}