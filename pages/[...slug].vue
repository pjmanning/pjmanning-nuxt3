<script setup>
const { path } = useRoute()

const { data: article } = await useAsyncData(`posts-${path}`, () => {
  return queryContent()
    .where({ _path: `/posts${path}` })
    .findOne()
})
const { data: author } = await useAsyncData(`author-${article.value.author}`, () => {
  return queryContent().where({ id: article.value.author }).findOne()
})

useHead({
  title: `${article.value.title} | PJ Manning`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: article.value.description,
    },
    // Open Graph
    {
      hid: 'og:title',
      property: 'og:title',
      content: article.value.title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: article.value.description,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `https://pjmanning.dev/${article.value.slug}`,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: article.value.image,
    },
    // Twitter Card
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: article.value.title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: article.value.description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: article.value.image,
    },
  ],
})
</script>

<template>
  <div>
    <div v-if="article" class="relative -mx-4 -mt-6 h-96 bg-gradient-to-b from-transparent to-black sm:-mx-8 md:h-128">
      <img class="h-full w-full object-cover" :src="article.image" :alt="article.alt" />
      <div class="absolute top-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-black"></div>
      <h1 class="absolute bottom-0 z-10 mb-8 px-8 text-4xl font-thin leading-9 text-white sm:ml-8 sm:px-4 md:text-5xl">
        {{ article.title }}
      </h1>
    </div>

    <ContentRenderer v-if="article" class="prose mx-auto my-12 px-4 sm:my-24 lg:prose-lg xl:prose-xl" :value="article" />

    <Author v-if="author" :author="author" />
  </div>
</template>
