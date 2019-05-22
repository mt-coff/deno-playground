import { abc } from "https://deno.sh/abc/mod.ts";
import router from "./router.ts";

const app = abc();

app.router = router;

app.start("0.0.0.0:8080");
