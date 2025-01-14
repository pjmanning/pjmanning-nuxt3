// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/devtools', '@nuxt/content', 'nuxt-icon', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/plausible', '@nuxt/image', 'nuxt-posthog'],

  plausible: {
    domain: 'pjmanning.dev',
  },

  posthog: {
    publicKey: 'phc_usiTt5fmNhl6bpx1iCHTI9BNWFZvlVpRFidjx5oQb2f',
    host: 'https://us.i.posthog.com',
  },

  app: {
    head: {
      title: 'PJ Manning | Developer && UX Designer',
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
        // twitter-card: https://cards-dev.twitter.com/validator
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@pj_manning' },
        { name: 'twitter:creator', content: '@pj_manning' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'PJManning | Designer && Developer',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Coffee ☕️ Surf 🏄🏽‍♂️ Work 💻 Wine 🍷',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://firebasestorage.googleapis.com/v0/b/travel-developer.appspot.com/o/whaleSharkPhoto.jpg?alt=media&token=5e668ead-7b8b-456f-a621-15580c086f29',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'PJ Manning',
        },

        // facebook card https://developers.facebook.com/tools/debug/
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://pjmanning.dev',
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'PJManning | Developer && UX Designer',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://firebasestorage.googleapis.com/v0/b/travel-developer.appspot.com/o/whaleSharkPhoto.jpg?alt=media&token=5e668ead-7b8b-456f-a621-15580c086f29',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Coffee ☕️ Surf 🏄🏽‍♂️ Work 💻 Wine 🍷',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'PJ Manning',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'PJ Manning',
        },
      ],
      link: [
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap',
        },
      ],
      script: [{ src: 'https://assets.onedollarstats.com/tracker.js', defer: true, 'data-site-id': 'pjmanning.dev' }],
    },
  },

  compatibilityDate: '2024-12-10',
})
