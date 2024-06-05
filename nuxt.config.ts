console.log("API_URL:", process.env.API_URL);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: ["@pinia/nuxt", "@nuxtjs/i18n", "@vueuse/nuxt", "nuxt-swiper", "@nuxtjs/ionic", "@nuxtjs/tailwindcss", "nuxt-icon"],
  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "@vueuse/nuxt", "nuxt-swiper", "@nuxtjs/tailwindcss", "nuxt-icon"],

  // ionic: {
  //   integrations: {
  //     //
  //   },
  //   css: {
  //     core: false,
  //     basic: false,
  //     utilities: false,
  //   },
  //   config: {
  //     //
  //   },
  // },

  // nitro: {
  //   devProxy: {
  //     "/api": {
  //       target: process.env.API_URL,
  //       changeOrigin: true,
  //       prependPath: true,
  //     },
  //   },
  //   routeRules: {
  //     "/api/**": {
  //       proxy: process.env.API_URL,
  //     },
  //   },
  // },
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active",
    },
  },
  icon: {
    class: "icon",
    mode: "svg",
    customCollections: [
      {
        prefix: "svg",
        dir: "./assets/icons",
      },
    ],
  },
  imports: {
    autoImport: true,
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.less", { injectPosition: "first" }],
    configPath: "tailwind.config",
    config: {},
    exposeConfig: true,
    viewer: true,
  },
  app: {
    rootId: "app",
  },
  css: ["~/assets/css/main.less"],
  i18n: {
    strategy: "prefix_except_default",
    langDir: "locales",
    locales: [
      {
        code: "zh",
        iso: "zh",
        file: "zh.json",
        name: "中文",
      },
      {
        code: "en",
        iso: "en",
        file: "en.json",
        name: "English",
      },
    ],
    defaultLocale: "en",
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      alwaysRedirect: true,
      redirectOn: "root",
    },
  },
  vite: {
    server: {
      proxy: {
        "/api": {
          target: process.env.API_URL,
          changeOrigin: true,
          bypass: (req, res, proxyOptions) => {
            if (req.url?.startsWith("/api/_nuxt")) {
              return req.url; // 返回请求路径，不进行代理
            }
          },
          rewrite: path => path.replace(/^\/api/, ""),
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "~/assets/css/variables.less";@import "~/assets/css/utils.less";`,
        },
      },
    },
  },
  ssr: true,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
});
