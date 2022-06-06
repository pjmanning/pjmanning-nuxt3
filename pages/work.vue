<script setup>
const { data: work } = await useAsyncData('work', () => queryContent('/work').find())
</script>

<template>
  <div class="mb-8">
    <div class="relative px-4 pt-4 sm:px-6 md:pt-12 lg:px-8">
      <div class="absolute inset-0">
        <div class="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div>
          <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10">Ecommerce Design & Development</h2>
          <p class="mt-3 max-w-2xl text-lg leading-7 text-gray-500 sm:mt-4">Thoughtful design for modern commerce...</p>
          <div class="mt-12 h-px w-16 rounded bg-gray-300"></div>
        </div>

        <ul role="list" class="my-12 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          <a v-for="project in work" :key="project.title" :href="project.slug" target="_blank" class="relative">
            <div class="group aspect-w-16 aspect-h-9 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img :src="project.image" :alt="project.title" class="pointer-events-none object-cover group-hover:opacity-75" />
              <button type="button" class="absolute inset-0 focus:outline-none">
                <span class="sr-only">View details for {{ project.title }} </span>
              </button>
            </div>
            <p class="pointer-events-none mt-2 block truncate text-lg font-medium text-gray-900">{{ project.title }}</p>
            <p class="pointer-events-none block text-sm font-medium text-gray-500">{{ project.description }}</p>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>
