<script setup>
const { data: posts } = await useAsyncData('posts', () => queryContent('/posts').find())
const { data: authors } = await useAsyncData('authors', () => queryContent('/authors').find())

const sortedPosts = computed(() => {
  return posts.value.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})

const postAuthor = (authorId) => {
  return authors.value.find((author) => {
    return author.id === authorId
  })
}

const formattedDate = (postDate) => {
  const date = postDate.toDateString()
  const formattedDate = date.substring(3)
  return formattedDate
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
          <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10">News & Updates</h2>
          <p class="mt-3 max-w-2xl text-lg leading-7 text-gray-500 sm:mt-4">Projects I'm working on, where I'm working & more...</p>
          <div class="mt-12 h-px w-16 rounded bg-gray-300"></div>
        </div>
        <div class="mx-auto my-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          <NuxtLink v-for="post in sortedPosts" :key="post.title" :to="post.slug" class="flex transform flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
            <div class="flex-shrink-0">
              <img class="h-48 min-h-[48] w-full bg-gray-300 object-cover" :src="post.image" :alt="post.title" />
            </div>
            <div class="flex flex-1 flex-col justify-between bg-white p-6">
              <div class="flex-1">
                <p class="text-sm font-medium uppercase leading-5 text-secondary">
                  {{ post.tags }}
                </p>
                <div class="block">
                  <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                    {{ post.title }}
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    {{ post.description }}
                  </p>
                </div>
              </div>

              <div v-if="postAuthor(post.author)" class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <img class="bg-animate-pulse h-10 w-10 rounded-full bg-gray-300" :src="postAuthor(post.author).image" :alt="postAuthor(post.author).name" />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium leading-5 text-gray-900">
                    {{ postAuthor(post.author).name }}
                  </p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time :datetime="post.createdAt">
                      {{ formattedDate(new Date(post.createdAt)) }}
                      <!-- {{ $moment(post.createdAt).format('MMMM Do YYYY') }} -->
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
