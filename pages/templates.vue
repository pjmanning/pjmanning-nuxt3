<script setup lang="ts">
const { data: templates } = await useAsyncData('templates', () => queryContent('/templates').find())
const { data: authors } = await useAsyncData('authors', () => queryContent('/authors').find())

const templateAuthor = (authorId) => {
  return authors.value.find((author) => {
    return author.id === authorId
  })
}

// highly opinionated
// don't include every type of component
// but structured to last
// specific integrations to get started asap
</script>

<template>
  <div class="mb-8">
    <div class="relative pt-4 sm:px-6 md:pt-12 lg:px-8">
      <div class="absolute inset-0">
        <div class="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div>
          <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10">Vue Templates</h2>
          <p class="mt-3 max-w-2xl text-lg leading-7 text-gray-500 sm:mt-4">Get started fast by using these Vue & Nuxt Templates...</p>
          <div class="mt-12 h-px w-16 rounded bg-gray-300"></div>
        </div>

        <ul role="list" class="my-12 mx-auto grid gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          <li v-for="template in templates" :key="template.source" class="relative">
            <div class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img :src="template.image" :alt="template.title" class="pointer-events-none object-cover group-hover:opacity-75" />
              <button type="button" class="absolute inset-0 focus:outline-none">
                <span class="sr-only">View details for {{ template.title }}</span>
              </button>
            </div>
            <p class="pointer-events-none mt-2 block truncate font-medium text-gray-900">{{ template.title }}</p>
            <p class="po inter-events-none block font-medium text-green-600">${{ template.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
