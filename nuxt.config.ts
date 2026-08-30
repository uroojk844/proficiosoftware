import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      meta: [
        {
          name: "theme-color",
          content: "#fff",
        },
        {
          name: "mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "application-name",
          content: "Proficio Software Solution",
        },
        {
          name: "description",
          content: "",
        },
        {
          name: "creator",
          content: "uroojk844",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/logo.svg",
          type: "image/svg+xml",
        },
        {
          rel: "apple-touch-icon",
          href: "/logo.svg",
          type: "image/svg+xml",
        },
        {
          rel: "shortcut icon",
          href: "/logo.svg",
          type: "image/svg+xml",
        },
      ],
      title: "Proficio Software Solution",
    },
  },

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
});
