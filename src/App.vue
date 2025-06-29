<template>
  <div class="font-sans text-gray-800">
    <!-- Hero Section -->
    <section
      class="min-h-screen max-h-screen w-screen bg-amber-50 flex items-center overflow-hidden bg-[url(/src/assets/soft-wallpaper.png)] bg-center bg-repeat">
      <div class="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center w-full">
        <!-- Fixed position image in top center of the website -->
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
          <img :src="getImage('phone.png')" alt="Logo" class="h-32 md:h-64 lg:h-128" />
        </div>
        <!-- Left Side - Static Image -->
        <!-- <div class="flex justify-end items-left">
          <img :src="getImage('mitra-charcoal.png')" alt="Artist Portrait"
            class="h-auto object-contain drop-shadow-2xl" />
        </div> -->

        <!-- Right Side - Text -->
        <div class="flex flex-col justify-center items-center">
          <h1
            class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2 leading-tight text-opacity-80">
            Creative Vision
          </h1>
          <h2 class="font-serif text-xl md:text-2xl lg:text-3xl text-black mb-8 italic font-light text-opacity-80">
            Artist & Designer
          </h2>
          <p class="text-gray-800 leading-relaxed font-light">
            Mitra Sharifi
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-12 px-12 bg-white">
      <div class="grid grid-cols-3 gap-4">
        <div class=" grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('guy.jpg')"
              alt="gallery-photo" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('guy-2.jpg')"
              alt="gallery-photo" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('guy-1.jpg')"
              alt="gallery-photo" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('guy-text.jpg')"
              alt="gallery-photo" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('guy-3.jpg')"
              alt=" gallery-photo" />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-gray-100 py-12">
      <div class="max-w-6xl mx-auto px-8">
        <div class="flex items-center justify-items-center mb-8">
          <div class="relative inline-block mr-4">
            <img class="w-20 h-20 rounded-full border-2 border-white" :src="getImage('mitra-animation-1.png')" />
            <!-- <span class="w-5 h-5 rounded-full absolute bottom-0.5 right-0.5">
              <a href="https://www.linkedin.com/in/mitra-sharifi" target="_blank" rel="noopener noreferrer">
                <svg class="
                    h-5
                    w-5
                    inline-block
                    text-gray-400
                    hover:text-[#0072b1]
                  " xmlns="http://www.w3.org/2000/svg" viewBox="7.025 7.025 497.951 497.95">
                  <path
                    d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                    fill="currentColor" />
                </svg>
              </a>
            </span> -->
          </div>
          <div class="grid grid-cols-1">
            <div>
              <h3 class="font-serif text-2xl font-semibold mb-2 text-white">Let's Connect</h3>
              <span class="flex">
                <p class="text-gray-300">Available for commissions and collaborations</p>
              </span>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-500 pt-4 text-center">
          <p class="text-white text-sm">&copy; {{ new Date().getFullYear() }} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const getImage = (path: string) => {
  return new URL(`/src/assets/${path}`, import.meta.url).href;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

/* Global styles for smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>