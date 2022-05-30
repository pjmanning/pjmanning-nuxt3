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

  netlify: {
    redirects: [
      {
        from: '/travel-insurance',
        to: '/digital-nomad-travel-insurance',
        status: 301,
      },
      {
        from: '/10-surf-jobs-that-will-let-you-travel-and-surf-your-entire-life',
        to: '/travel-and-surf-jobs',
        status: 301,
      },
      {
        from: '/digital-nomad-health-insurance',
        to: '/digital-nomad-insurance',
        status: 301,
      },
      {
        from: '/articles',
        to: '/digital-nomad-blog',
        status: 301,
      },
      {
        from: '/phil-manning',
        to: 'https://pjmanning.dev',
        status: 301,
      },
      {
        from: '/pj-manning',
        to: 'https://pjmanning.dev',
        status: 301,
      },
      {
        from: '/phil-manning-digital-nomad',
        to: '/pj-manning-digital-nomad',
        status: 301,
      },
    ],
  },
})
