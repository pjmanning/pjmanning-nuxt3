<script setup></script>

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
            <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10">Hey, I'm Phil. I&nbsp;build&nbsp;stuff.</h2>
            <p class="mt-3 max-w-2xl text-lg font-medium leading-7 text-sky-600 sm:mt-4">and spend a lot of time in the water...</p>
            <div class="mt-12 h-px w-16 rounded bg-gray-300"></div>
          </div>

          <div class="mt-8 sm:mt-0">
            <nuxt-img format="webp" src="/images/home/working.jpg" alt="hero" class="mx-auto -mt-8 h-auto rounded-full shadow-sm sm:mx-0 sm:-mt-6 sm:h-32" />
          </div>
        </div>
        <!-- end header  -->

        <div class="mx-auto max-w-3xl">
          <!-- blurb  -->
          <div class="mt-12 sm:mx-auto">
            <p class="mb-4 text-lg sm:text-xl">I'm a software developer, UX designer, and SEO consultant. Some of my work is open source and publicly available on <a href="https://github.com/pjmanning" target="_blank" class="text-blue-600">Github</a>. You can follow me on <a href="https://twitter.com/pj_manning" target="_blank" class="text-blue-600">Twitter</a> where I mostly tweet about building side projects.</p>
            <p class="mb-4 text-lg sm:text-xl">I've been working remotely around the world since 2012 - mainly due to a surf addiction.</p>
            <div class="flex items-center justify-between">
              <nuxt-img format="webp" src="/images/home/whaleSharkPhoto.jpg" alt="whale shark" class="w-full rounded-xl" />
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

              <div class="mt-6 h-48 sm:h-[27rem]">
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
              <nuxt-img loading="lazy" format="webp" src="/images/balimap.png" alt="bali" class="mt-6 rounded-xl" />
            </NuxtLink>
            <p class="flex items-center justify-end space-x-2 pt-2 text-sm text-gray-500 md:text-right">
              <!-- <LocationMarkerIcon class="h-4 w-4" /> -->
              <Icon name="heroicons:map-pin" size="20" />
              <span>Bali, Indonesia</span>
            </p>
          </div>
          <!-- end map -->

          <!-- divider  -->
          <div id="divider" class="relative mx-auto mt-12 mb-4">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-white px-3 text-lg font-medium text-gray-900"> Expertise </span>
            </div>
          </div>
          <!-- end divider  -->

          <!-- expertise  -->
          <div class="bg-white">
            <div class="grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
              <a href="https://vuejs.org" target="_blank" class="group relative col-span-1 cursor-pointer flex-col justify-center bg-gray-50 py-8 px-8 text-center transition hover:bg-gray-100">
                <nuxt-img loading="lazy" class="mx-auto max-h-12" src="/images/tools/vue-vector.svg" alt="VueJS" />
                <p class="absolute bottom-2 left-0 hidden w-full text-sm font-medium text-gray-600 group-hover:block">VueJS</p>
              </a>
              <a href="https://nuxtjs.org" target="_blank" class="group relative col-span-1 cursor-pointer flex-col justify-center bg-gray-50 py-8 px-8 text-center transition hover:bg-gray-100">
                <nuxt-img loading="lazy" format="webp" class="mx-auto max-h-14" src="/images/tools/nuxt.png" alt="NuxtJS" />
                <p class="absolute bottom-2 left-0 hidden w-full text-sm font-medium text-gray-600 group-hover:block">NuxtJS</p>
              </a>
              <a href="https://tailwindcss.com" target="_blank" class="group relative col-span-1 cursor-pointer flex-col justify-center bg-gray-50 py-8 px-8 text-center transition hover:bg-gray-100">
                <nuxt-img loading="lazy" format="webp" class="mx-auto max-h-12" src="/images/tools/tailwind.png" alt="TailwindCSS" />
                <p class="absolute bottom-2 left-0 hidden w-full text-sm font-medium text-gray-600 group-hover:block">TailwindCSS</p>
              </a>
              <a href="https://figma.com" target="_blank" class="group relative col-span-1 cursor-pointer flex-col justify-center bg-gray-50 py-8 px-8 text-center transition hover:bg-gray-100">
                <nuxt-img loading="lazy" format="webp" class="mx-auto max-h-12" src="/images/tools/figma.png" alt="Figma" />
                <p class="absolute bottom-2 left-0 hidden w-full text-sm font-medium text-gray-600 group-hover:block">Figma</p>
              </a>
              <a href="https://firebase.google.com" target="_blank" class="group relative col-span-1 cursor-pointer flex-col justify-center bg-gray-50 py-8 px-8 text-center transition hover:bg-gray-100">
                <nuxt-img loading="lazy" format="webp" class="mx-auto max-h-12" src="/images/tools/firebase.png" alt="Firebase" />
                <p class="absolute bottom-2 left-0 hidden w-full text-sm font-medium text-gray-600 group-hover:block">Firebase</p>
              </a>
              <a href="https://supabase.com" target="_blank" class="group relative col-span-1 cursor-pointer flex-col justify-center bg-gray-50 py-8 px-8 text-center transition hover:bg-gray-100">
                <nuxt-img loading="lazy" format="webp" class="mx-auto max-h-12" src="/images/tools/supabase.png" alt="Supabase" />
                <p class="absolute bottom-2 left-0 hidden w-full text-sm font-medium text-gray-600 group-hover:block">Supabase</p>
              </a>
              <a href="https://developer.apple.com/swift/" target="_blank" class="group relative col-span-1 cursor-pointer flex-col justify-center bg-gray-50 py-8 px-8 text-center transition hover:bg-gray-100">
                <nuxt-img loading="lazy" format="webp" class="mx-auto max-h-12" src="/images/tools/swift.png" alt="Swift" />
                <p class="absolute bottom-2 left-0 hidden w-full text-sm font-medium text-gray-600 group-hover:block">Swift</p>
              </a>
              <a href="https://shopify.com" target="_blank" class="group relative col-span-1 cursor-pointer flex-col justify-center bg-gray-50 py-8 px-8 text-center transition hover:bg-gray-100">
                <nuxt-img loading="lazy" class="mx-auto max-h-12" src="/images/tools/shopify.svg" alt="Shopify" />
                <p class="absolute bottom-2 left-0 hidden w-full text-sm font-medium text-gray-600 group-hover:block">Shopify</p>
              </a>
              <a href="https://stripe.com" target="_blank" class="group relative col-span-1 cursor-pointer flex-col justify-center bg-gray-50 py-8 px-8 text-center transition hover:bg-gray-100">
                <nuxt-img loading="lazy" format="webp" class="mx-auto max-h-12" src="/images/tools/stripe.png" alt="Stripe" />
                <p class="absolute bottom-2 left-0 hidden w-full text-sm font-medium text-gray-600 group-hover:block">Stripe</p>
              </a>
              <!-- Sanity  -->
              <!-- Netlify  -->
              <!-- Vercel -->
            </div>
          </div>
          <!-- end expertise  -->

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
              <NuxtLink to="/work/wilshire" class="group flex items-center space-x-4">
                <strong class="flex-none font-medium group-hover:text-blue-600 group-hover:underline">Wilshire</strong>
                <span class="w-full shrink border-t border-dashed border-gray-300"></span>
                <span class="flex-none">Software Engineer</span>
                <span class="flex-none font-mono">2022—&nbsp;&nbsp;</span>
              </NuxtLink>
              <NuxtLink to="/work" class="group flex items-center space-x-4">
                <strong class="flex-none font-medium group-hover:text-blue-600 group-hover:underline">doodDevelopments</strong>
                <span class="w-full shrink border-t border-dashed border-gray-300"></span>
                <span class="flex-none">Founder</span>
                <span class="flex-none font-mono">2013—&nbsp;&nbsp;</span>
              </NuxtLink>
              <NuxtLink to="/work/jet" class="group flex items-center space-x-4">
                <strong class="flex-none font-medium group-hover:text-blue-600 group-hover:underline">Jet.com</strong>
                <span class="w-full shrink border-t border-dashed border-gray-300"></span>
                <span class="flex-none">Analyst</span>
                <span class="flex-none font-mono">2015—17</span>
              </NuxtLink>
              <NuxtLink to="/work/lifeguard" class="group flex items-center space-x-4">
                <strong class="flex-none font-medium group-hover:text-blue-600 group-hover:underline">Surf Lifesaving</strong>
                <span class="w-full shrink border-t border-dashed border-gray-300"></span>
                <span class="flex-none">Head Lifeguard</span>
                <span class="flex-none font-mono">2005—13</span>
              </NuxtLink>
            </div>
          </div>
          <!-- end work -->
        </div>

        <FollowMe class="mt-12" />
      </div>
    </div>
  </div>
</template>
