<template>
  <div class="max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-4 py-6 md:py-12">
    <div class="text-center mb-6 md:mb-20">
      <h2 class="text-xl md:text-5xl font-bold text-blue mb-2 md:mb-3">
        CLOTHING SERVICES BY CATEGORY
      </h2>
      <p class="text-md md:text-2xl text-black">
        Life's great with well-fitting clothes.
      </p>
    </div>

    <!-- Desktop services grid -->
    <section
      aria-label="Service categories"
      class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
    >
      <ul class="contents">
        <li
          v-for="(service, index) in services"
          :key="index"
          class="service-container"
          :class="{
            'border-b-2 border-r-2 border-dashed border-gray-300': index < 2,
            'border-r-2 border-dashed border-gray-300':
              index === 3 || index === 4,
            'border-b-2 border-dashed border-gray-300': index === 2,
          }"
        >
          <div class="p-8 flex flex-col items-center service-card">
            <img
              :src="serviceImages[index]"
              :alt="service.title"
              class="w-20 h-20 object-contain"
              loading="lazy"
            />
            <h3
              class="text-center font-bold text-xl mt-6 text-black"
              v-html="service.title"
            ></h3>
          </div>
        </li>
      </ul>
    </section>

    <!-- Mobile swipeable services with dots -->
    <section aria-label="Swipeable service categories" class="md:hidden">
      <div class="relative">
        <ul
          ref="slider"
          class="overflow-x-auto snap-x snap-mandatory scroll-smooth whitespace-nowrap hide-scrollbar"
          id="service-slider"
          @scroll="handleScroll"
        >
          <li
            v-for="(service, index) in services"
            :key="index"
            class="inline-block w-full snap-start"
          >
            <div class="p-6 flex flex-col items-center">
              <img
                :src="serviceImages[index]"
                :alt="service.title"
                class="w-30 h-30 object-contain"
                loading="lazy"
              />
              <h3 class="text-center font-medium text-2xl mt-4 text-black">
                {{ service.title.replace('<br />', ' ') }}
              </h3>
            </div>
          </li>
        </ul>

        <!-- Dots indicator with accessibility -->
        <div
          class="flex justify-center mt-4 space-x-2"
          id="slider-dots"
          role="tablist"
          aria-label="Service category slides"
        >
          <button
            v-for="(dot, index) in services"
            :key="index"
            class="w-2 h-2 rounded-full bg-gray-300 dot-indicator"
            :class="{ 'bg-blue-500 w-4': activeIndex === index }"
            :aria-label="`Slide ${index + 1}`"
            :aria-current="activeIndex === index"
            :tabindex="activeIndex === index ? 0 : -1"
            @click="goToSlide(index)"
            @keydown.enter="goToSlide(index)"
            @keydown.space="goToSlide(index)"
          ></button>
        </div>
      </div>
    </section>

    <div class="text-center mb-6 md:mb-12 mt-6 md:mt-20">
      <p
        class="text-sm md:text-2xl text-blue font-medium leading-6 md:leading-8"
      >
        <span class="md:hidden"
          >Perfect fit, every time. Our expert can tailor <br />
          or mend any garment.</span
        >
        <span class="hidden md:inline"
          >Perfectly sized clothes, nothing too tight or loose. Our expert
          seamstress, a sewing <br />
          wizard with years of skill, can mend any garment.</span
        >
      </p>
      <NuxtLink
        to="/estimator"
        class="bg-app-blue px-10 py-3 rounded-full text-white font-bold text-sm md:text-2xl mt-3 md:mt-5 cursor-pointer primary-btn inline-block"
        role="button"
        aria-label="Get an Instant Quote"
      >
        Get an Instant Quote
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Import all images
import cloth1 from "@/assets/images/cloth/1.svg";
import cloth2 from "@/assets/images/cloth/2.svg";
import cloth3 from "@/assets/images/cloth/3.svg";
import cloth4 from "@/assets/images/cloth/4.svg";
import cloth5 from "@/assets/images/cloth/5.svg";
import cloth6 from "@/assets/images/cloth/6.svg";

// Create an array of imported images
const serviceImages = [cloth1, cloth2, cloth3, cloth4, cloth5, cloth6];

const services = [
  { title: "Formal & Special  Occasion Wear" },
  { title: "Repairs & Zips" },
  { title: "Re-Lining & Specialized Clothing" },
  { title: "Upholstery & Fabric Recovering" },
  { title: "Clothing Alterations" },
  { title: "Curtains" },
];

const slider = ref(null);
const activeIndex = ref(0);
const slides = ref([]);

onMounted(() => {
  if (slider.value) {
    slides.value = slider.value.querySelectorAll(".inline-block");
  }
});

function goToSlide(index) {
  if (slider.value && slides.value[index]) {
    slider.value.scrollLeft = slides.value[index].offsetLeft;
    activeIndex.value = index;
  }
}

function handleScroll() {
  if (slider.value && slides.value.length > 0) {
    const slideWidth = slides.value[0].offsetWidth;
    const scrollLeft = slider.value.scrollLeft;
    const index = Math.round(scrollLeft / slideWidth);
    if (index !== activeIndex.value) {
      activeIndex.value = index;
    }
  }
}
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.service-card-container {
  position: relative;
  overflow: hidden;
}

.service-card {
  transition: all 0.3s ease;
  will-change: transform;
}

.service-card:hover {
  transform: translateY(-8px);
}

.service-card img {
  transition: transform 0.3s ease;
}

.service-card:hover img {
  transform: scale(1.15);
}
</style>
