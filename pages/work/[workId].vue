<script setup>
const { params } = useRoute()

const { data: work } = await useAsyncData(`experience-${params.workId}`, () => {
  return queryContent()
    .where({ _path: `/experience/${params.workId}` })
    .findOne()
})
</script>

<template>
  <div>
    <div v-if="work" class="relative -mx-4 -mt-6 h-96 bg-gradient-to-b from-transparent to-black sm:-mx-8 md:h-128">
      <img class="h-full w-full object-cover" :src="work.image" />
      <div class="absolute top-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-black"></div>
      <h1 class="absolute bottom-0 z-10 mb-8 px-8 text-4xl font-thin leading-9 text-white sm:ml-8 sm:px-4 md:text-5xl">{{ work.company }} - {{ work.position }}</h1>
    </div>

    <ContentRenderer v-if="work" class="prose mx-auto my-12 px-4 sm:my-24 lg:prose-lg xl:prose-xl" :value="work" />
  </div>
</template>

<style scoped></style>
