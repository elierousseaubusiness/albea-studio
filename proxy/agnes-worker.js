// Relais Cloudflare Worker pour Agnes AI (gratuit).
// À utiliser SEULEMENT si l'app affiche « Impossible de joindre Agnes depuis ce navigateur ».
// Il transmet les requêtes de l'app vers apihub.agnes-ai.com en ajoutant les
// en-têtes CORS dont le navigateur a besoin. Votre clé n'est pas stockée ici :
// elle reste dans l'app et passe simplement dans l'en-tête Authorization.
const TARGET = 'https://apihub.agnes-ai.com';

function cors(headers) {
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  headers.set('Access-Control-Max-Age', '86400');
  return headers;
}

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(new Headers()) });
    const url = new URL(request.url);
    if (!/^\/(v1\/|agnesapi)/.test(url.pathname)) return new Response('Not found', { status: 404, headers: cors(new Headers()) });
    const headers = new Headers();
    const auth = request.headers.get('Authorization');
    if (auth) headers.set('Authorization', auth);
    const type = request.headers.get('Content-Type');
    if (type) headers.set('Content-Type', type);
    const res = await fetch(TARGET + url.pathname + url.search, {
      method: request.method,
      headers,
      body: request.method === 'GET' || request.method === 'HEAD' ? undefined : await request.arrayBuffer()
    });
    return new Response(res.body, { status: res.status, headers: cors(new Headers(res.headers)) });
  }
};
