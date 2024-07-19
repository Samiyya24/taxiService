// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@samk-dev/nuxt-vcalendar", "@pinia/nuxt"],
  vite: {
    optimizeDeps: {
      include: ["@venegrad/vue3-click-outside"],
    },
  },
});
