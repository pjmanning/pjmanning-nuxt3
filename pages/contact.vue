<script setup></script>

<template>
  <div class="mb-8">
    <div class="relative pt-4 sm:px-6 md:pt-12 lg:px-8">
      <div class="absolute inset-0">
        <div class="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div>
          <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10">Get in touch</h2>
          <p class="mt-3 max-w-2xl text-lg leading-7 text-gray-500 sm:mt-4">For projects, inquiries, and/or beer...</p>
          <div class="mt-12 h-px w-16 rounded bg-gray-300"></div>
        </div>

        <div class="mt-8 mb-20">
          <form action="https://formspree.io/xyydaozy" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <div class="mt-1">
                <input id="name" type="text" name="name" placeholder="Elon Musk" required autocomplete="given-name" class="block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <div class="mt-1">
                <input id="email" type="email" name="_replyto" placeholder="elon@spacex.com" required autocomplete="email" class="block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <div class="mt-1">
                <textarea id="message" name="message" rows="5" required placeholder="Can you build me a base on Mars..." class="block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-sky-500 focus:ring-sky-500"></textarea>
              </div>
            </div>

            <div class="sm:col-span-2">
              <button type="submit" class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Let's chat</button>
            </div>
          </form>
        </div>

        <FollowMe />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
