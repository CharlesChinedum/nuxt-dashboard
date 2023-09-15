// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: ["@bootstrap-vue-next/nuxt", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
    preference: "dark", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
  },
  css: [
    "~/assets/css/main.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
  ],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["primevue"],
  },
});
