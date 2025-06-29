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
        <div class="border-t border-gray-400 pt-4 text-center">
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

html {
  scroll-behavior: smooth;
}
</style>