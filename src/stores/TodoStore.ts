import { action, configure, flow, makeObservable, observable } from "mobx";

import { fetchTodos, storeTodos } from "../services";
import { TodoModel } from "../models";

configure({ enforceActions: "observed" });

export class TodoStore {
  public todos: TodoModel[] | null = null;
  public state: "fetching" | "storing" | "pending" = "pending";
  public isInitialized = false;

  constructor() {
    makeObservable(this, {
      todos: observable,
      state: observable,
      isInitialized: observable,
      add: action,
      remove: action,
      done: action,
      fetch: flow,
      store: flow,
    });
  }

  public add(task: string): void {
    this.todos = this.todos.concat({ task, status: "pending" });
    this.store();
  }

  public done(todo: TodoModel): void {
    this.todos = this.todos.map((storedTodo) =>
      storedTodo === todo ? { ...todo, status: "ready" } : storedTodo,
    );
    this.store();
  }

  public remove(todo: TodoModel): void {
    this.todos = this.todos.filter((storedTodo) => storedTodo !== todo);
    this.store();
  }

  public *fetch(): Generator<Promise<TodoModel[]>, void, TodoModel[]> {
    this.state = "fetching";
    this.todos = (yield fetchTodos()) ?? [];
    this.state = "pending";
    this.isInitialized = true;
  }

  public *store(): Generator<Promise<void>, void, never> {
    this.state = "storing";
    yield storeTodos(this.todos);
    this.state = "pending";
  }
}
