import { mockFetch } from "~mocks";

import { TodoModel } from "../models";

const todoKey = "todo";

export function fetchTodos(): Promise<TodoModel[] | null> {
  return mockFetch(todoKey, "GET");
}

export async function storeTodos(todos: TodoModel[]): Promise<void> {
  await mockFetch(todoKey, "POST", todos);
}
