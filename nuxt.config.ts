import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css", "lenis/dist/lenis.css"],

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "nuxt-gtag",
    "lenis/nuxt",
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  gtag: {
    id: "G-LTD90TR5QZ",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },

      title: "Proficio Software Solutions | Websites, Apps & Digital Products",

      meta: [
        {
          name: "google-site-verification",
          content: "qOXMU45wOtB2oDQni1Wl9usigzH_PaihYQFcLHk3hgg",
        },
        {
          charset: "utf-8",
        },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          name: "theme-color",
          content: "#ffffff",
        },

        {
          name: "description",
          content:
            "Proficio Software Solutions is a software development agency specializing in custom software, web applications, mobile apps, e-commerce, AI integration and ERP solutions.",
        },

        {
          name: "keywords",
          content:
            "web development agency, software development agency, software development company, custom software development, custom software development company, web development company, website development company, web application development, web app development company, full stack development company, digital product development, software development services, web development services, custom web development, e-commerce development company, mobile app development company, Flutter app development, React development company, Nuxt development company, AI software development, AI integration services, chatbot integration service, UI UX design agency, startup web development, website redesign service, offshore web development, outsource web development, affordable software development, professional software development, digital agency, web design agency, app development company, Proficio Software Solutions, Proficio Software",
        },
        {
          name: "author",
          content: "Proficio Software Solutions",
        },

        {
          name: "creator",
          content: "Proficio Software Solutions",
        },

        {
          name: "application-name",
          content: "Proficio Software Solutions",
        },

        {
          name: "mobile-web-app-capable",
          content: "yes",
        },

        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },

        {
          name: "apple-mobile-web-app-title",
          content: "Proficio",
        },

        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "default",
        },

        // Robots
        {
          name: "robots",
          content: "index, follow, max-image-preview:large",
        },

        // Open Graph
        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:site_name",
          content: "Proficio Software Solutions",
        },

        {
          property: "og:title",
          content:
            "Proficio Software Solutions | Websites, Apps & Digital Products",
        },

        {
          property: "og:description",
          content:
            "We build strategy-led websites, web apps, e-commerce platforms and custom digital products that help ambitious businesses grow.",
        },

        {
          property: "og:url",
          content: "https://proficiosoftware.in/",
        },

        {
          property: "og:image",
          content: "https://proficiosoftware.in/og-image.png",
        },

        {
          property: "og:image:width",
          content: "1200",
        },

        {
          property: "og:image:height",
          content: "630",
        },

        {
          property: "og:image:alt",
          content: "Proficio Software Solutions",
        },

        {
          property: "og:locale",
          content: "en_IN",
        },

        // Twitter / X
        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content:
            "Proficio Software Solutions | Websites, Apps & Digital Products",
        },

        {
          name: "twitter:description",
          content:
            "Strategy-led websites, web apps, e-commerce and custom software built for ambitious brands and businesses.",
        },

        {
          name: "twitter:image",
          content: "https://proficiosoftware.in/og-image.png",
        },

        {
          name: "twitter:image:alt",
          content: "Proficio Software Solutions",
        },
      ],

      link: [
        // Canonical
        {
          rel: "canonical",
          href: "https://proficiosoftware.in/",
        },

        // Favicon
        {
          rel: "icon",
          href: "/logo.svg",
          type: "image/svg+xml",
        },

        {
          rel: "shortcut icon",
          href: "/favicon.ico",
        },

        // Apple icon
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },

        // Manifest
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],

      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://proficiosoftware.in/#organization",
                name: "Proficio Software Solutions",
                url: "https://proficiosoftware.in/",
                logo: "https://proficiosoftware.in/logo.svg",
                description:
                  "Digital studio building websites, web apps, e-commerce platforms and custom software.",
                telephone: "+91 81140 76364",
                email: "uroojk844@gmail.com",
              },
              {
                "@type": "WebSite",
                "@id": "https://proficiosoftware.in/#website",
                url: "https://proficiosoftware.in/",
                name: "Proficio Software Solutions",
                publisher: {
                  "@id": "https://proficiosoftware.in/#organization",
                },
              },
            ],
          }),
        },
      ],
    },
  },
});
