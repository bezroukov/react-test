import { FC } from "react";
import { TodoModel } from "../models";
import * as React from "react";

interface TodoListProps {
  todos: TodoModel[];
  removeTodo: (v: TodoModel) => void;
  doneTodo: (v: TodoModel) => void;
  isDisabled: boolean;
}

export const TodoList: FC<TodoListProps> = ({
  todos,
  removeTodo,
  doneTodo,
  isDisabled,
}) => (
  <ol>
    {todos.map((todo) => (
      <li key={todo.task}>
        {todo.task} | {todo.status} |
        <button
          type="button"
          disabled={isDisabled || todo.status === "ready"}
          onClick={() => doneTodo(todo)}
        >
          Done
        </button>
        <button
          type="button"
          disabled={isDisabled}
          onClick={() => removeTodo(todo)}
        >
          x
        </button>
      </li>
    ))}
  </ol>
);
