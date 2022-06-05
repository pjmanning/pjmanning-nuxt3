<script></script>

<template>
  <div>
    <!-- contact form  -->
    <div id="contact" class="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div class="relative mx-auto max-w-xl">
        <div class="text-center">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">For projects, inquiries, and/or&nbsp;beer...</h2>
          <!-- <p class="mt-4 text-lg leading-6 text-gray-500">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p> -->
        </div>
        <div class="mt-8">
          <form action="https://formspree.io/xyydaozy" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <div class="mt-1">
                <input id="name" type="text" name="name" placeholder="Elon Musk" required autocomplete="given-name" class="block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <div class="mt-1">
                <input id="email" type="email" name="_replyto" placeholder="elon@spacex.com" required autocomplete="email" class="block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <div class="mt-1">
                <textarea id="message" name="message" rows="5" required placeholder="Can you build me a base on Mars..." class="block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
            </div>

            <div class="sm:col-span-2">
              <button type="submit" class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Let's chat</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- follow me  -->
    <div class="rounded-xl bg-gray-100">
      <div class="mx-auto max-w-3xl py-16 pb-8 text-center text-xl">
        <h2 class="mb-8 text-2xl font-bold">Follow My Work!</h2>

        <div class="mx-auto mb-8 w-4/5">
          <p class="mb-8 text-lg sm:text-xl">If you're interested in my projects and want to keep up or collaborate - follow and contact me on twitter</p>

          <a href="https://twitter.com/pj_manning" target="_blank" class="inline-flex items-center rounded px-12 py-4" style="background-color: #1da1f2">
            <svg width="20" height="17" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z" fill-rule="nonzero" />
            </svg>
            <span class="ml-4 text-xl text-white">@pj_manning</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
