import { partial } from "~utils";

import { ProxyLocalStorage } from "./ProxyLocalStorage";
import { storageFetch } from "./storageFetch";

// Имитирует какое-то хранилище на бэке в отдельном пространстве ключей в localStorage
const backendStorage = new ProxyLocalStorage(localStorage, "backend_");

export const mockFetch = partial(storageFetch, backendStorage);
