import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/icon'],
   css: ['~/assets/css/tailwindcss.css'],
  vite:{
    plugins: [
      tailwindcss()
    ]
  }
})