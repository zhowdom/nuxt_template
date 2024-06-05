import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  // const { session } = useUserSession();
  const token = "";

  const baseHeaders = {
    deviceCode: "db5f85eb47790a4c2663859ac4c9510f",
    device: "Windows 10 amd64",
    deviceType: "web",
    language: "zh",
    version: "Chrome 125.0.0.0",
    clientVersion: "1.0.0",
    source: "http://localhost:3000/",
    sourceType: "Windows",
  };

  const request = $fetch.create({
    baseURL: process.env.API_URL,
    onRequest({ request, options, error }) {
      const headers: any = {
        contentType: "application/json",
        ...baseHeaders,
        ...options.headers,

        // todo
        areaCode: "HK",
        channel: 1003,
        tid: 10,
      };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      options.headers = headers;
    },
    onResponse({ response }) {
      if (response.status === 200 && response._data?.code === 0) {
        response._data = response._data.data;
      }
    },
    async onResponseError({ response }) {
      console.log(`onResponseError`, response);
    },
  });

  return {
    provide: {
      request,
    },
  };
});
