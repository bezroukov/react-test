import * as React from "react";
import { FC, useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { CounterStoreContext } from "../stores";

export const Counter: FC = observer(() => {
  const store = useContext(CounterStoreContext);

  useEffect(() => {
    if (!store.isInitialized) {
      store.fetch();
    }
  }, [store]);

  return (
    <div>
      <h1>Counter +/-</h1>
      <p>Current: {store.isInitialized ? store.value : "Loading..."}</p>
      <p>
        <button
          type="button"
          disabled={store.state !== "pending"}
          onClick={() => store.increment()}
        >
          +
        </button>
        <button
          type="button"
          disabled={store.state !== "pending"}
          onClick={() => store.decrement()}
        >
          -
        </button>
        {store.state === "storing" ? "Storing..." : ""}
      </p>
    </div>
  );
});
