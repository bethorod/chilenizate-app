/**
 * Cloudflare Worker de entrada para el sitio estático.
 * Si una ruta del cliente no corresponde a un archivo, entrega index.html para
 * que React Router pueda renderizar accesos directos como /juegos.
 */
export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404 || !['GET', 'HEAD'].includes(request.method)) {
      return response;
    }

    const indexUrl = new URL(request.url);
    indexUrl.pathname = '/';
    return env.ASSETS.fetch(new Request(indexUrl, request));
  },
};
