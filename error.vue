<script setup>
defineProps({
  error: Object,
})
</script>

<template>
  <div id="error" class="flex h-screen flex-col justify-center bg-gray-50 sm:px-6 lg:px-8">
    <div class="h-96 sm:mx-auto sm:w-full sm:max-w-md">
      <nuxt-img format="webp" class="mx-auto h-20 w-auto rounded-full text-white" src="/images/home/working.jpg" alt="pj manning" />
      <h1 v-if="error.statusCode === 404" class="mt-6 text-center text-3xl font-extrabold leading-9 text-gray-900">Wipeout! 🌊 🏄🏽‍♂️</h1>
      <h1 v-else class="mt-6 text-center text-3xl font-extrabold leading-9 text-gray-900">An error occurred</h1>
      <NuxtLink to="/" class="focus:shadow-outline-blue mt-12 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:border-blue-700 focus:outline-none active:bg-blue-700"
        >Back to Home Page
        <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>
