import * as React from "react";
import { FC } from "react";
import { CreateContext, TodoStoreContext } from "../stores";

export const Todo: FC = () => {
  const {} = CreateContext(TodoStoreContext);
  return (
    <div>
      <h1>Todo:</h1>
    </div>
  );
};
