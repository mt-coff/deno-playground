import { Binder } from "https://deno.sh/abc/mod.ts";

@Binder()
export class Todo {
  id: string;
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
