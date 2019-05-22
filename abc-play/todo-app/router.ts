import { Router } from "https://deno.sh/abc/mod.ts";
import * as h from "./handler.ts";

const router = new Router();

router.add("GET", "/todo", h.findAllTodo);

router.add("GET", "/todo/:id", h.findTodo);

router.add("POST", "/todo", h.createTodo);

export default router;
