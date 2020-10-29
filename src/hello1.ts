import { serve } from "https://deno.land/std@0.75.0/http/server.ts";

const port = 8000;
const host = "0.0.0.0";
const server = serve(`${host}:${port}`);
const body = new TextEncoder().encode("Hello, World!\n");

async function main() {
  for await (const request of server) {
    console.log(`Got a ${request.method} at ${request.url}.`);
    request.respond({ body });
  }
}
console.log(`Listening at http://${host}:${port}.`);

main();
