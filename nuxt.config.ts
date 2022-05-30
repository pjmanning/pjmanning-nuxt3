import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'PJ Manning',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Coffee | Surf | Work | Wine',
        },
      ],
      link: [
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap',
        },
      ],
    },
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@vueuse/nuxt', 'vue-plausible'],

  plausible: {
    domain: 'pjmanning.dev',
  },
})
