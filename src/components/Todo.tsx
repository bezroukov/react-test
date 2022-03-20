import * as React from "react";
import {
  FC,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { observer } from "mobx-react";

import { TodoStoreContext } from "../stores";
import { TodoList } from "./TodoList";

export const Todo: FC = observer(() => {
  const store = useContext(TodoStoreContext);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (!store.isInitialized) {
      store.fetch();
    }
  }, [store]);

  const addTask = useCallback(() => {
    const trimmedTask = newTask.trim();
    if (trimmedTask.length) {
      store.add(trimmedTask);
      setNewTask("");
    }
  }, [store, newTask]);

  return (
    <div>
      <h1>Todo:</h1>
      {store.isInitialized ? (
        <p>
          {store.todos.length ? (
            <TodoList
              todos={store.todos}
              removeTodo={store.remove.bind(store)}
              doneTodo={store.done.bind(store)}
              isDisabled={store.state !== "pending"}
            />
          ) : (
            "There is no tasks"
          )}
        </p>
      ) : (
        <p>Loading...</p>
      )}
      <p>
        Create task:{" "}
        <input
          type="text"
          value={newTask}
          onInput={(event: FormEvent<HTMLInputElement>) =>
            setNewTask(event.currentTarget.value)
          }
          placeholder="Task description"
          width="120"
        />
        <button
          type="button"
          disabled={store.state !== "pending" || !newTask.trim().length}
          onClick={addTask}
        >
          +
        </button>
        {store.state === "storing" ? "Storing..." : ""}
      </p>
    </div>
  );
});
