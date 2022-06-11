<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExternalLinkIcon, AtSymbolIcon, HomeIcon, DesktopComputerIcon, RssIcon, BookOpenIcon, TrashIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, external: false },
  { name: 'Work', href: '/work', icon: DesktopComputerIcon, external: false },
  { name: 'Blog', href: '/blog', icon: BookOpenIcon, external: false },
  { name: 'Newsletter', href: 'https://www.getrevue.co/profile/pjmanning', icon: RssIcon, external: true },
  { name: 'Contact', href: '/contact', icon: AtSymbolIcon, external: false },
]

const projects = [
  { name: 'Glassy', href: 'https://glassy.so', img: 'glassy-logo-whitebg.png' },
  { name: 'SwellPirate', href: 'https://swellpirate.com', img: 'swellpirate-logo.png' },
  { name: 'Binndle', href: 'https://binndle.com/', img: 'binndle-logo.png' },
  { name: 'Animali', href: 'https://animali.life/', img: 'animali-logo.png' },
  { name: '#startsmall', href: 'https://startsmall.llc/', img: 'startsmall-logo.jpg' },
  { name: "Nana's Recipes", href: 'https://apps.apple.com/app/nana-scoppetuolos-recipes/id1012100193?l=id', img: 'nanasrecipes-logo.png' },
  { name: 'DeFacebookMe', href: 'https://defacebookme.com', img: 'defacebookme.svg' },
]

const socials = [
  { name: 'Twitter', href: 'https://twitter.com/pj_manning', img: 'twitter.svg' },
  { name: 'Github', href: 'https://github.com/pjmanning', img: 'github.svg' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCX0zkbdpllaa3h-OZsJhSLQ', img: 'youtube.svg' },
  { name: 'Behance', href: 'https://www.behance.net/philmanning', img: 'behance.svg' },
  { name: 'Medium', href: 'https://medium.com/@pjmanning', img: 'medium.svg' },
  { name: 'Dribbble', href: 'https://dribbble.com/pjmanning', img: 'dribbble.svg' },
]

const sidebarOpen = ref(false)
</script>

<template>
  <div class="flex h-screen">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <NuxtLink to="/" class="flex items-center !bg-white font-marker text-3xl uppercase text-gray-800 hover:text-gray-600" @click.native="sidebarOpen = false">PJ&nbsp;MANNING</NuxtLink>
                </div>
                <nav aria-label="Sidebar" class="mt-5">
                  <div class="space-y-1 px-2">
                    <NuxtLink @click.native="sidebarOpen = false" v-for="item in navigation" :key="item.name" :href="item.href" :target="item.external ? '_blank' : ''" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center rounded-md px-2 py-2 text-base font-medium']">
                      <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 h-6 w-6']" aria-hidden="true" />
                      {{ item.name }}
                      <div v-if="item.external" class="ml-auto">
                        <ExternalLinkIcon class="h-5 w-5" />
                      </div>
                    </NuxtLink>
                    <p class="!mt-6 !mb-2 ml-2 text-xs font-bold uppercase text-gray-400">Projects</p>
                    <a v-for="item in projects" :key="item.name" :href="item.href" target="_blank" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center rounded-md px-2 py-2 text-sm font-medium']">
                      <img :src="`/projects/${item.img}`" :alt="item.name" class="mr-3 h-6 w-6 rounded-sm" />
                      {{ item.name }}
                      <ExternalLinkIcon class="ml-auto h-5 w-5" />
                    </a>
                    <NuxtLink to="/graveyard" class="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900" @click.native="sidebarOpen = false">
                      <component :is="TrashIcon" class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                      Project Graveyard
                    </NuxtLink>
                    <p class="!mt-6 !mb-2 ml-2 text-xs font-bold uppercase text-gray-400">Online</p>
                    <a v-for="item in socials" :key="item.name" :href="item.href" target="_blank" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center rounded-md px-2 py-2 text-sm font-medium']">
                      <img :src="`/socials/${item.img}`" :alt="item.name" class="mr-4 h-auto w-5 rounded-sm contrast-[.25]" />
                      {{ item.name }}
                      <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
                <NuxtLink to="/contact" class="group block flex-shrink-0" @click.native="sidebarOpen = false">
                  <div class="flex items-center !bg-white">
                    <div>
                      <img class="inline-block h-10 w-10 rounded-full" src="~/assets/images/home/meSmallCircle.png" alt="PJ Manning" />
                    </div>
                    <div class="ml-3">
                      <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">PJ Manning</p>
                      <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">Contact Me</p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex w-64 flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
          <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div class="flex flex-shrink-0 items-center px-4">
              <NuxtLink to="/" class="flex items-center !bg-gray-100 font-marker text-3xl uppercase text-gray-800 hover:text-gray-600">PJ&nbsp;MANNING</NuxtLink>
            </div>
            <nav class="mt-5 flex-1" aria-label="Sidebar">
              <div class="space-y-[0.5] px-2">
                <NuxtLink v-for="item in navigation" :key="item.name" :href="item.href" :target="item.external ? '_blank' : ''" class="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                  <component :is="item.icon" class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  {{ item.name }}
                  <div v-if="item.external" class="ml-auto">
                    <ExternalLinkIcon class="h-5 w-5" />
                  </div>
                </NuxtLink>
                <p class="!mt-6 !mb-2 ml-2 text-xs font-bold uppercase text-gray-400">Projects</p>
                <a v-for="item in projects" :key="item.name" :href="item.href" target="_blank" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center rounded-md px-2 py-2 text-sm font-medium']">
                  <img :src="`/projects/${item.img}`" :alt="item.name" class="mr-3 h-6 w-6 rounded-sm" />
                  {{ item.name }}
                  <ExternalLinkIcon class="ml-auto h-5 w-5" />
                </a>
                <NuxtLink to="/graveyard" class="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                  <component :is="TrashIcon" class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  Project Graveyard
                </NuxtLink>
                <p class="!mt-6 !mb-2 ml-2 text-xs font-bold uppercase text-gray-400">Online</p>
                <a v-for="item in socials" :key="item.name" :href="item.href" target="_blank" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center rounded-md px-2 py-2 text-sm font-medium']">
                  <img :src="`/socials/${item.img}`" :alt="item.name" class="mr-4 h-auto w-5 rounded-sm contrast-[.25]" />
                  {{ item.name }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
          <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
            <NuxtLink to="/contact" class="group block w-full flex-shrink-0">
              <div class="flex items-center !bg-gray-100">
                <div>
                  <img class="inline-block h-9 w-9 rounded-full" src="~/assets/images/home/meSmallCircle.png" alt="PJ Manning" />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">PJ Manning</p>
                  <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">Contact Me</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
      <div class="lg:hidden">
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
          <div>
            <NuxtLink to="/" class="flex items-center !bg-gray-50 font-marker text-3xl uppercase text-gray-800 hover:text-gray-600">PJ&nbsp;MANNING</NuxtLink>
          </div>
          <div>
            <button type="button" class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900" @click="sidebarOpen = true">
              <span class="sr-only">Open sidebar</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="relative z-0 flex flex-1 overflow-hidden">
        <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
          <!-- Start main area-->
          <div class="inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <NuxtPage />
          </div>
          <!-- End main area -->
        </main>

        <!-- Start secondary column (hidden on smaller screens) -->
        <!-- <aside class="relative hidden w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
          <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div class="h-full rounded-lg border-2 border-dashed border-gray-200" />
          </div>
        </aside> -->
        <!-- End secondary column -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  @apply bg-gray-200 text-gray-900;
}
.router-link-active.router-link-exact-active svg {
  @apply text-gray-500;
}
</style>
