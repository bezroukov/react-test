import { createContext, useContext, Context } from "react";
import { TodoStore } from "./TodoStore";
import { CounterStore } from "./CounterStore";

export const TodoStoreContext = createContext(new TodoStore());
export const CounterStoreContext = createContext(new CounterStore());

export const CreateContext = <T extends unknown>(object: Context<T>): T => {
  return useContext(object);
};
