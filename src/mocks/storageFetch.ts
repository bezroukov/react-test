// Пришлось отказаться от override, так как были сложности с пробросом корректного типа через partial
/**
 * Имитируем работу с бэком через какой-либо Storage.
 * Откладываем выполнение запроса на случайный период
 * до 2 секунд, чтобы воспроизвести сетевые задержки.
 *
 * @param storage
 * @param key
 * @param method
 * @param value
 */
export async function storageFetch<T>(
  storage: Storage,
  key: string,
  method: "GET" | "POST",
  value?: T,
): Promise<T | null> {
  return new Promise((resolve) => {
    const delayMs = Math.random() * 1700 + 300;
    setTimeout(() => {
      switch (method) {
        case "GET":
          resolve(JSON.parse(storage.getItem(key)));
          break;
        case "POST":
          const serialized = JSON.stringify(value);
          storage.setItem(key, serialized);
          resolve(JSON.parse(serialized));
          break;
      }
    }, delayMs);
  });
}
