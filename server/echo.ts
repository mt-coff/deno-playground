import { listenAndServe } from "https://deno.land/std/http/server.ts";
const address = "0.0.0.0:8080";

listenAndServe(address, async req => {
  const body = new TextDecoder().decode(await req.body());
  const headers = new Headers();
  headers.set("content-type", "application/json");
  const res = {
    status: 200,
    headers: headers,
    body: new TextEncoder().encode(`response: ${body}`)
  };

  req.respond(res);
});
