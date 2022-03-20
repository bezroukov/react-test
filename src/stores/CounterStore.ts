import { configure, makeObservable, observable, action, flow } from "mobx";

import { fetchCounter, storeCounter } from "../services";

configure({ enforceActions: "observed" });

export class CounterStore {
  public value: number | null = null;
  public state: "fetching" | "storing" | "pending" = "pending";
  public isInitialized = false;

  constructor() {
    makeObservable(this, {
      value: observable,
      state: observable,
      isInitialized: observable,
      increment: action,
      decrement: action,
      fetch: flow,
      store: flow,
    });
  }

  public increment(): void {
    this.value++;
    this.store();
  }

  public decrement(): void {
    this.value--;
    this.store();
  }

  public *fetch(): Generator<Promise<number>, void, number> {
    this.state = "fetching";
    this.value = (yield fetchCounter()) ?? 0;
    this.state = "pending";
    this.isInitialized = true;
  }

  public *store(): Generator<Promise<void>, void, never> {
    this.state = "storing";
    yield storeCounter(this.value);
    this.state = "pending";
  }
}
