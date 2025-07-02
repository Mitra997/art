<template>
  <div class="font-sans text-gray-800">
    <section
      class="min-h-screen max-h-screen w-screen bg-amber-50 flex overflow-hidden bg-[url(/src/assets/soft-wallpaper.png)] bg-center bg-repeat">
      <div class="grid grid-cols-1 w-full">
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
          <img :src="getImage('phone.png')" alt="phone" class="h-[50vh]" />
        </div>
        <div class="h-[40vh]"></div>
        <div class="flex flex-col items-center">
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
    <section id="gallery" class="pt-6 px-2 bg-white">
      <Carousel :value="[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]" :numVisible="1" :numScroll="1" circular
        :autoplayInterval="5000" containerClass="flex items-center">
        <template #item="slotProps">
          <div v-if="slotProps.data.id === 1" class="grid grid-cols-3 gap-4 px-2 items-center">
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
                <div
                  class="flex flex-col lg:h-[29vw] md:h-[27vw] h-[20vw] items-center justify-center md:p-8 overflow-auto"
                  style="font-size: 1vw;">
                  <p><span class="font-semibold">Title:</span> Contemplation in silence</p>
                  <p><span class="font-semibold">Medium:</span> Charcoal on paper</p>
                  <br>
                  <p class="text-center">This charcoal portrait captures a quiet, emotional moment of deep
                    thought. The
                    detailed textures,
                    freckles, curls, and soft hands; highlight the subject's vulnerability and realism. The soft shading
                    and
                    bold contrast bring focus to the expression, creating a powerful and intimate atmosphere.</p>
                </div>
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('guy-3.jpg')"
                  alt=" gallery-photo" />
              </div>
            </div>
          </div>
          <div v-if="slotProps.data.id === 2" class="grid grid-cols-3 gap-4 px-2 items-center">
            <div class="grid col-span-2 gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('girl-1.png')"
                  alt="gallery-photo" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('girl-3.png')"
                  alt="gallery-photo" />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <div
                  class="flex flex-col lg:h-[29vw] md:h-[27vw] h-[20vw] items-center justify-center md:p-8 overflow-auto"
                  style="font-size: 1vw;">
                  <p><span class="font-semibold">Title:</span> Contemplation in silence</p>
                  <p><span class="font-semibold">Medium:</span> Charcoal on paper</p>
                  <br>
                  <p class="text-center">This charcoal portrait captures a quiet, emotional moment of deep
                    thought. The
                    detailed textures,
                    freckles, curls, and soft hands; highlight the subject's vulnerability and realism. The soft shading
                    and
                    bold contrast bring focus to the expression, creating a powerful and intimate atmosphere.</p>
                </div>
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('girl-2.png')"
                  alt=" gallery-photo" />
              </div>
            </div>
          </div>
          <div v-if="slotProps.data.id === 3" class="grid grid-cols-3 gap-4 px-2 items-center">
            <div class="grid gap-4">
              <div>
                <div
                  class="flex flex-col lg:h-[29vw] md:h-[27vw] h-[20vw] items-center justify-center md:p-8 overflow-auto"
                  style="font-size: 1vw;">
                  <p><span class="font-semibold">Title:</span> Contemplation in silence</p>
                  <p><span class="font-semibold">Medium:</span> Charcoal on paper</p>
                  <br>
                  <p class="text-center">This charcoal portrait captures a quiet, emotional moment of deep
                    thought. The
                    detailed textures,
                    freckles, curls, and soft hands; highlight the subject's vulnerability and realism. The soft shading
                    and
                    bold contrast bring focus to the expression, creating a powerful and intimate atmosphere.</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="grid">
                  <img class="h-auto max-w-full rounded-lg object-cover object-center"
                    :src="getImage('girl-half-3.jpg')" alt=" gallery-photo" />
                </div>
                <div class="grid">
                  <img class="h-auto max-w-full rounded-lg object-cover object-center"
                    :src="getImage('girl-half-4.jpg')" alt=" gallery-photo" />
                </div>
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('girl-half-2.jpg')"
                  alt="gallery-photo" />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('girl-half-1.jpg')"
                  alt="gallery-photo" />
              </div>
            </div>
          </div>
          <div v-if="slotProps.data.id === 4" class="grid grid-cols-3 gap-4 px-2 items-center">
            <div class=" grid gap-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-4">
                  <div>
                    <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('600.800.png')"
                      alt="gallery-photo" />
                  </div>
                  <div>
                    <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('600.510.png')"
                      alt="gallery-photo" />
                  </div>
                  <div>
                    <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('600.505.png')"
                      alt="gallery-photo" />
                  </div>
                </div>
                <div class="grid gap-4">
                  <div>
                    <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('600.500.png')"
                      alt="gallery-photo" />
                  </div>
                  <div>
                    <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('600.915.png')"
                      alt="gallery-photo" />
                  </div>
                  <div>
                    <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('600.400.png')"
                      alt="gallery-photo" />
                  </div>
                </div>
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('600.925.png')"
                  alt="gallery-photo" />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('600.600.png')"
                  alt=" gallery-photo" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg object-cover object-center" :src="getImage('600.300.png')"
                  alt=" gallery-photo" />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-gray-100 py-12">
      <div class="max-w-6xl mx-auto px-8">
        <div class="flex items-center justify-items-center mb-8">
          <div class="relative inline-block mr-4">
            <img class="w-20 h-20 rounded-full border-2 border-white" :src="getImage('mitra-real.jpg')" />
          </div>
          <div class="grid grid-cols-1">
            <div>
              <h3 class="text-2xl font-thin text-white">Mitra Sharifi</h3>
              <span class="flex flex-col">
                <p class="font-thin">I would
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block hover:text-red-600 mb-1.5 mr-0.5"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd" />
                  </svg>
                  to connect with you!
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/mitra-sharifi" target="_blank" rel="noopener noreferrer"
                    class="hover:text-[#0072b1]">
                    Linkedin
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div class="border-t-[0.5px] border-gray-400 pt-4 text-center">
          <p class="text-white text-sm font-thin">&copy; {{ new Date().getFullYear() }} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Carousel from 'primevue/carousel';

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