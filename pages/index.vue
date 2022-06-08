<script setup>
import { LocationMarkerIcon } from '@heroicons/vue/outline'
</script>

<template>
  <div class="mb-8">
    <div class="relative pt-4 sm:px-6 md:pt-12 lg:px-8">
      <div class="absolute inset-0">
        <div class="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div class="relative mx-auto max-w-7xl">
        <!-- header  -->
        <div class="flex justify-between">
          <div class="pr-8">
            <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10">Hey, I'm PJ. I&nbsp;build&nbsp;stuff.</h2>
            <p class="mt-3 max-w-2xl text-lg font-medium leading-7 text-sky-600 sm:mt-4">and spend a lot of time in the water...</p>
            <div class="mt-12 h-px w-16 rounded bg-gray-300"></div>
          </div>

          <div class="mt-8 sm:mt-0">
            <img src="~/assets/images/home/working.jpg" alt="hero" class="mx-auto -mt-8 h-auto rounded-full sm:mx-0 sm:-mt-6 sm:h-32" />
          </div>
        </div>
        <!-- end header  -->

        <div class="mx-auto max-w-3xl">
          <!-- blurb  -->
          <div class="mt-12 sm:mx-auto">
            <p class="text-lg sm:text-xl">
              I believe the next wave of great of advances in human society will come from combining
              <strong>technology</strong>, <strong>community</strong>, and <strong>sustainability</strong>. I'm currently working on a few independent and open-sourced projects based on these pillars.
            </p>

            <div class="flex items-center justify-between">
              <img src="~/assets/images/home/whaleSharkPhoto.jpg" alt="whale shark" class="mt-6 w-full rounded-xl" />
            </div>
          </div>
          <!-- end blurb  -->

          <!-- divider  -->
          <div id="divider" class="relative mx-auto mt-12 mb-4">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-white px-3 text-lg font-medium text-gray-900"> About Me </span>
            </div>
          </div>
          <!-- end divider  -->

          <!-- about me  -->
          <div class="overflow-x-hidden">
            <div class="get-to-know-me relative text-xl sm:mx-auto">
              <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
                <svg width="170px" height="170px">
                  <use xlink:href="#dots-triangle" />
                </svg>
              </div>

              <div class="flex flex-col items-center justify-between sm:flex-row">
                <div class="flex-1 text-lg sm:text-xl">Over the past 10 years, I've worked with 30+ businesses creating websites and mobile applications. I have a unique perspective having worked with the fastest growing e-commerce website in the world (Jet.com), to tracking whale sharks in the Maldives.</div>
              </div>

              <div class="mt-6 h-48 sm:h-96">
                <iframe class="left-0 top-0 h-full w-full rounded-xl border-0" src="https://www.youtube.com/embed/FlAYtA1exRA" style="border: 0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <!-- end about me  -->

          <!-- divider  -->
          <div id="divider" class="relative mx-auto mt-12">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-white px-3 text-lg font-medium text-gray-900"> Where </span>
            </div>
          </div>
          <!-- end divider  -->

          <!-- map -->
          <div>
            <NuxtLink to="https://www.google.com/maps/place/Keramas,+Blahbatuh,+Gianyar+Regency,+Bali/@-8.5853879,115.3177538,15z/data=!3m1!4b1!4m5!3m4!1s0x2dd215b460c4f7cb:0x5030bfbca830f00!8m2!3d-8.5743534!4d115.32228" target="_blank">
              <img src="~/assets/images/balimap.png" alt="bali" class="mt-6 rounded-xl" />
            </NuxtLink>
            <p class="flex items-center justify-end space-x-2 pt-2 text-sm text-gray-500 md:text-right">
              <LocationMarkerIcon class="h-4 w-4" />
              <span>Bali, Indonesia</span>
            </p>
          </div>
          <!-- end map -->

          <!-- divider  -->
          <div id="divider" class="relative mx-auto mt-12">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-white px-3 text-lg font-medium text-gray-900"> Work </span>
            </div>
          </div>
          <!-- end divider  -->

          <!-- work  -->
          <div class="mt-6 mb-20">
            <div class="flex flex-col space-y-3">
              <a target="_blank" rel="noopener noreferrer" href="https://wilshire.com" class="group flex items-center space-x-4">
                <strong class="flex-none font-medium group-hover:text-blue-600 group-hover:underline">Wilshire</strong>
                <span class="w-full shrink border-t border-dashed border-gray-300"></span>
                <span class="flex-none">Software Engineer</span>
                <span class="flex-none font-mono">2022—&nbsp;&nbsp;</span>
              </a>
              <NuxtLink to="/" class="group flex items-center space-x-4">
                <strong class="flex-none font-medium group-hover:text-blue-600 group-hover:underline">doodDevelopments</strong>
                <span class="w-full shrink border-t border-dashed border-gray-300"></span>
                <span class="flex-none">Founder</span>
                <span class="flex-none font-mono">2013—&nbsp;&nbsp;</span>
              </NuxtLink>
              <a target="_blank" rel="noopener noreferrer" href="https://jet.com" class="group flex items-center space-x-4">
                <strong class="flex-none font-medium group-hover:text-blue-600 group-hover:underline">Jet.com</strong>
                <span class="w-full shrink border-t border-dashed border-gray-300"></span>
                <span class="flex-none">Financial Analyst</span>
                <span class="flex-none font-mono">2015—17</span>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#" class="group flex items-center space-x-4">
                <strong class="flex-none font-medium group-hover:text-blue-600 group-hover:underline">Surf Lifesaving</strong>
                <span class="w-full shrink border-t border-dashed border-gray-300"></span>
                <span class="flex-none">Head Lifeguard</span>
                <span class="flex-none font-mono">2005—13</span>
              </a>
            </div>
          </div>
          <!-- end work -->
        </div>

        <FollowMe class="mt-12" />
      </div>
    </div>
  </div>
</template>
