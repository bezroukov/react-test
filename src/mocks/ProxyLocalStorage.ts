/**
 * Примитивный класс обёртка для Storage, прозрачным образом добавляющий
 * prefix ко всем запросам. Это даёт примитивную инкапсуляцию при работе с одним и тем
 * же Storage в разных контекстах
 */
export class ProxyLocalStorage implements Storage {
  constructor(
    private readonly storage: Storage,
    private readonly prefix = "proxy_",
  ) {}

  get length(): number {
    return this.getProxyEntries().length;
  }

  clear(): void {
    this.getProxyEntries().forEach(([key]) => {
      this.storage.removeItem(key);
    });
  }

  getItem(key: string): string | null {
    return this.storage.getItem(this.getProxyKey(key));
  }

  key(index: number): string | null {
    return this.getProxyEntries().length < index
      ? this.getProxyEntries()[index][0].slice(this.prefix.length)
      : null;
  }

  removeItem(key: string): void {
    this.storage.removeItem(this.getProxyKey(key));
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(this.getProxyKey(key), value);
  }

  private getProxyEntries(): [string, string][] {
    return Object.entries(this.storage).filter(
      ([key]) => key.indexOf(this.prefix) === 0,
    );
  }

  private getProxyKey(key: string): string {
    return `${this.prefix}${key}`;
  }
}
