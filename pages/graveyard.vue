<script setup>
const { data: projects } = await useAsyncData('graveyard', () => queryContent('/graveyard').sort({ started: 1 }).find())
</script>

<template>
  <div class="mb-8">
    <div class="relative pt-4 sm:px-6 md:pt-12 lg:px-8">
      <div class="absolute inset-0">
        <div class="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div>
          <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10">Project Graveyard</h2>
          <p class="mt-3 max-w-2xl text-lg leading-7 text-gray-500 sm:mt-4">The shit that didn't quite work out... 💀 RIP</p>
          <div class="mt-12 h-px w-16 rounded bg-gray-300"></div>
        </div>

        <div class="flex flex-col">
          <div class="-my-2 mt-12 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Project</th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Type</th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Description</th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Started</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="project in projects" :key="project.title" class="odd:bg-white even:bg-gray-50">
                      <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{{ project.title }}</td>
                      <td class="whitespace-nowrap px-6 py-4 text-sm capitalize text-indigo-600">{{ project.type }}</td>
                      <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{{ project.tagline }}</td>
                      <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{{ project.started }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
