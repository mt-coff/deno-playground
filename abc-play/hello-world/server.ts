import { abc } from "https://deno.sh/abc/mod.ts";

const app = abc();

app.get("/", c => {
  return "Hello World";
});

app.start("0.0.0.0:8080");
