import type { UseFetchOptions } from "nuxt/app";

export const useRequest = (url: string | (() => string), options: UseFetchOptions<any>) => {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$request,
  });
};
