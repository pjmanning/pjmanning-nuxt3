<template>
  <div>
    <!-- hero -->
    <div class="mx-4 flex max-w-3xl flex-col justify-between pb-12 sm:mx-auto sm:flex-row sm:py-12">
      <div class="w-full text-left text-4xl font-bold sm:w-3/5 md:mr-8 md:mt-5 md:w-full md:text-4xl">
        <div class="leading-tight">
          Hey, I'm PJ. I&nbsp;build&nbsp;stuff...
          <span class="leading-tight text-blue-400"> <br />and spend a lot of time in the water. </span>
        </div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img src="~/assets/images/home/working.jpg" width="285px" alt="hero" class="mx-auto rounded-lg sm:mx-0" />
      </div>
    </div>
    <!-- end hero -->

    <!-- blurb  -->
    <div class="mx-4 max-w-3xl sm:mx-auto">
      <p class="text-lg sm:text-xl">
        I believe the next wave of great of advances in human society will come from combining
        <strong>technology</strong>, <strong>community</strong>, and <strong>sustainability</strong>. I'm currently working on a few independent and open-sourced projects based on these pillars.
      </p>

      <div class="flex items-center justify-between py-6">
        <div class="w-full">
          <img src="~/assets/images/home/whaleSharkPhoto.jpg" alt="whale shark" />
        </div>
      </div>
    </div>
    <!-- end blurb  -->

    <!-- divider  -->
    <div id="divider" class="relative mx-auto mt-12 mb-4 max-w-3xl">
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
      <div class="get-to-know-me relative mx-4 max-w-3xl pb-16 text-xl sm:mx-auto">
        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div class="mb-8 flex flex-col items-center justify-between sm:flex-row">
          <div class="flex-1 text-lg sm:ml-6 sm:text-xl">Over the past 10 years, I've worked with 30+ businesses creating websites and mobile applications. I have a unique perspective having worked with the fastest growing e-commerce website in the world (Jet.com), to tracking whale sharks in the Maldives.</div>
        </div>

        <div class="h-48 sm:h-96">
          <iframe class="left-0 top-0 h-full w-full border-0" src="https://www.youtube.com/embed/FlAYtA1exRA" style="border: 0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <!-- end about me  -->

    <!-- divider  -->
    <div id="divider" class="relative mx-auto mt-12 mb-4 max-w-3xl">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="bg-white px-3 text-lg font-medium text-gray-900"> Currently In... </span>
      </div>
    </div>
    <!-- end divider  -->

    <FollowMe />
  </div>
</template>
