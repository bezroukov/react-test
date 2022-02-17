import * as React from "react";
import {FC} from "react";
import {useStoreContext, TodoStoreContext} from "../stores";

export const Todo: FC = () => {
    const {} = useStoreContext(TodoStoreContext);
    return (
        <div>
            <h1>Todo:</h1>
        </div>);
};
