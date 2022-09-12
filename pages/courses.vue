<script setup lang="ts">
const { data: courses } = await useAsyncData('courses', () => queryContent('/courses').find())
const { data: authors } = await useAsyncData('authors', () => queryContent('/authors').find())

const courseAuthor = (authorId) => {
  return authors.value.find((author) => {
    return author.id === authorId
  })
}
</script>

<template>
  <div class="mb-8">
    <div class="relative pt-4 sm:px-6 md:pt-12 lg:px-8">
      <div class="absolute inset-0">
        <div class="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div>
          <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10">Course Library</h2>
          <p class="mt-3 max-w-2xl text-lg leading-7 text-gray-500 sm:mt-4">Learn design and code by building complete, real apps with the best tools...</p>
          <div class="mt-12 h-px w-16 rounded bg-gray-300"></div>
        </div>

        <div class="mx-auto my-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          <NuxtLink v-for="course in courses" :key="course.title" :to="course.slug" class="flex transform flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
            <div class="flex-shrink-0">
              <img class="h-48 min-h-[48] w-full bg-gray-300 object-cover" :src="course.image" :alt="course.title" />
            </div>
            <div class="flex flex-1 flex-col justify-between bg-white p-6">
              <div class="flex-1">
                <p class="text-sm font-medium uppercase leading-5 text-secondary">
                  {{ course.tags }}
                </p>
                <div class="block">
                  <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                    {{ course.title }}
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    {{ course.description }}
                  </p>
                </div>
              </div>

              <div v-if="courseAuthor(course.author)" class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <img class="bg-animate-pulse h-10 w-10 rounded-full bg-gray-300" :src="courseAuthor(course.author).image" :alt="courseAuthor(course.author).name" />
                </div>
                <div class="ml-3">
                  <p class="text-base font-medium leading-5 text-gray-900">
                    {{ courseAuthor(course.author).name }}
                  </p>
                </div>
                <div class="ml-auto inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">${{ course.price }}</div>

                <!-- <div class="ml-auto">${{ course.price }}</div> -->
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
