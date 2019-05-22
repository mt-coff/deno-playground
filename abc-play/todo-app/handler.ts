import { HandlerFunc, Context } from "https://deno.sh/abc/mod.ts";
import { uuid } from "https://deno.land/x/uuid/mod.ts";
import { Todo } from "./todo.ts";

const todoList: Todo[] = [];

export const findTodo: HandlerFunc = (c: Context) => {
  const { id } = c.params as { id: string };
  return todoList.find(todo => todo.id === id);
};

export const findAllTodo: HandlerFunc = (c: Context) => {
  return todoList;
};

export const createTodo: HandlerFunc = async (c: Context) => {
  const todo = await c.bind(Todo);
  todo.id = uuid();
  todoList.push(todo);

  return todo;
};
