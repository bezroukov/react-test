import { mockFetch } from "~mocks";

const counterKey = "counter";

export function fetchCounter(): Promise<number | null> {
  return mockFetch(counterKey, "GET");
}

export async function storeCounter(value: number): Promise<void> {
  await mockFetch(counterKey, "POST", value);
}
