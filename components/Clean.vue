<template>
  <div class="max-w-7xl mx-auto sm:px-6 mb-10 lg:px-4">
    <!-- Mobile Layout -->
    <div
      class="md:hidden flex flex-col items-center relative"
      aria-label="Eco-friendly Dry Cleaning Mobile"
    >
      <!-- Person image -->
      <img
        :src="person1"
        alt="Smiling person in clean clothes"
        class="w-full transition-transform duration-500"
        loading="lazy"
      />

      <!-- Leaves and badges -->
      <div class="absolute mt-38">
        <img
          :src="leavesIcon"
          alt="Eco leaves icon"
          class="w-30 h-auto -ml-5"
          loading="lazy"
        />
        <div class="grid grid-cols-2 gap-x-2 mt-2 items-center">
          <img
            :src="ecoFriendly"
            alt="Eco friendly badge"
            class="w-38 h-auto"
            loading="lazy"
          />
          <img
            :src="dryCleaning"
            alt="Dry cleaning badge"
            class="w-38 h-auto"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="relative mt-22 px-4">
        <p class="text-md text-center">
          Fast turnaround in just <strong>2-3 days</strong>,<br />
          with high-quality cleaning.
        </p>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div
      class="hidden md:flex flex-col"
      aria-label="Eco-friendly Dry Cleaning Desktop"
    >
      <div class="flex justify-around items-center">
        <div class="max-w-lg">
          <div class="flex items-center space-x-3">
            <img
              :src="leavesIcon"
              alt="Eco leaves icon"
              class="w-30 h-auto"
              loading="lazy"
            />
            <div class="space-y-4">
              <img
                :src="ecoFriendly"
                alt="Eco friendly badge"
                class="hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
              />
              <img
                :src="dryCleaning"
                alt="Dry cleaning badge"
                class="hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          </div>
          <p class="mt-4 mb-7 leading-8 text-2xl">
            Fast turnaround in just <strong>2-3 days</strong>,<br />
            ensuring high-quality cleaning to <br />
            keep you looking your best.
          </p>
          <div class="space-x-3">
            <NuxtLink
              to="/contact-us"
              class="bg-app-blue px-10 py-3 rounded-full text-white font-bold text-2xl hover:bg-blue-700 primary-btn cursor-pointer transition-colors inline-block"
              role="button"
              aria-label="Book cleaning online"
            >
              Book Now
            </NuxtLink>
            <NuxtLink
              to="/pricing"
              class="text-blue border px-10 py-3 rounded-full font-bold text-2xl border-app-blue hover:bg-blue-50 primary-btn cursor-pointer transition-colors inline-block"
              role="button"
              aria-label="See full cleaning price list"
            >
              See Full Price List
            </NuxtLink>
          </div>
        </div>
        <div>
          <img
            :src="person"
            alt="Smiling person in clean clothes"
            class="hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- CSS Carousel - Desktop -->
    <div class="hidden md:block mt-20 overflow-hidden relative">
      <div
        class="animate-seamless-infinite-scroll flex"
        aria-label="Cleaning prices carousel"
      >
        <div
          v-for="(service, index) in loopServices"
          :key="index"
          class="flex-shrink-0 w-1/7 p-6 flex flex-col items-center"
        >
          <img
            :src="getCleanImage(service.img)"
            :alt="service.alt"
            class="w-25 h-25 object-contain"
            loading="lazy"
          />
          <h3 class="text-center font-medium text-xl mt-4 text-black">
            {{ service.label }}
          </h3>
          <p class="text-black text-sm mt-1">from {{ service.price }}</p>
        </div>
      </div>
    </div>

    <!-- Mobile swipeable services with dots -->
    <div class="md:hidden mt-5">
      <div class="relative">
        <!-- Slider Container -->
        <div
          ref="slider"
          class="mobile-slider-container overflow-x-auto snap-x snap-mandatory scroll-smooth whitespace-nowrap hide-scrollbar"
          aria-label="Cleaning prices slider"
          id="clean-slider"
          @scroll="handleScroll"
        >
          <div
            v-for="(service, index) in mobileServices"
            :key="index"
            class="inline-block w-full snap-start px-4"
          >
            <div class="p-6 flex flex-col items-center">
              <img
                :src="getCleanImage(service.img)"
                :alt="service.alt"
                class="w-35 h-35 object-contain"
                loading="lazy"
              />
              <h3 class="text-center font-medium text-2xl mt-4 text-black">
                {{ service.label }}
              </h3>
              <p class="text-black text-md mt-1">from {{ service.price }}</p>
            </div>
          </div>
        </div>

        <!-- Dots indicator -->
        <div
          class="flex justify-center mt-5 space-x-2 mobile-dots"
          id="clean-slider-dots"
          role="tablist"
          aria-label="Cleaning item slides"
        >
          <button
            v-for="(dot, index) in mobileServices"
            :key="index"
            class="dot w-2 h-2 rounded-full bg-gray-300"
            :class="{ 'bg-blue-500 w-4': activeSlide === index }"
            :aria-label="`Slide ${index + 1}`"
            :aria-current="activeSlide === index ? 'true' : 'false'"
            :tabindex="activeSlide === index ? '0' : '-1'"
            @click="goToSlide(index)"
            @keydown.enter="goToSlide(index)"
            @keydown.space="goToSlide(index)"
          ></button>
        </div>
      </div>
    </div>

    <!-- Mobile Buttons -->
    <div class="grid md:hidden gap-y-5 justify-center text-center mt-8">
      <NuxtLink
        to="/contact-us"
        class="bg-app-blue py-2 px-7 rounded-full text-white font-bold text-base cursor-pointer primary-btn inline-block"
        role="button"
        aria-label="Book cleaning online"
      >
        Book Now
      </NuxtLink>
      <NuxtLink
        to="/pricing"
        class="text-blue underline text-base cursor-pointer secondry-btn inline-block"
        role="button"
        aria-label="See full cleaning price list"
      >
        See Full Price List
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Import all images
import clean1 from "~/assets/images/clean/1.svg";
import clean2 from "~/assets/images/clean/2.svg";
import clean3 from "~/assets/images/clean/3.svg";
import clean4 from "~/assets/images/clean/4.svg";
import clean5 from "~/assets/images/clean/5.svg";
import clean6 from "~/assets/images/clean/6.svg";
import clean8 from "~/assets/images/clean/8.svg";
import dryCleaning from "~/assets/images/clean/DryCleaning.svg";
import ecoFriendly from "~/assets/images/clean/ECOFRIENDLY.svg";
import leavesIcon from "~/assets/images/clean/leaves-icon.svg";
import person from "~/assets/images/clean/p.svg";
import person1 from "~/assets/images/clean/p1.svg";

const services = [
  { img: "1.svg", alt: "Legwear", label: "Legwear", price: "£10" },
  { img: "2.svg", alt: "Full Suits", label: "Full Suits", price: "£16" },
  { img: "3.svg", alt: "Dresses", label: "Dresses", price: "£15" },
  { img: "4.svg", alt: "Skirts", label: "Skirts", price: "£10" },
  { img: "5.svg", alt: "Jackets", label: "Jacket Only", price: "£11" },
  { img: "6.svg", alt: "Tops", label: "Tops", price: "£5" },
  { img: "8.svg", alt: "Coats", label: "Coats", price: "£18" },
];

// For seamless loop, repeat first 3
const loopServices = [...services, ...services.slice(0, 3)];
const mobileServices = [
  { img: "2.svg", alt: "Full Suits", label: "Full Suits", price: "£16" },
  { img: "4.svg", alt: "Skirts", label: "Skirts", price: "£10" },
  { img: "1.svg", alt: "Legwear", label: "Legwear", price: "£10" },
  { img: "3.svg", alt: "Dresses", label: "Dresses", price: "£15" },
  { img: "5.svg", alt: "Jackets", label: "Jackets", price: "£11" },
  { img: "6.svg", alt: "Tops", label: "Tops", price: "£5" },
  { img: "8.svg", alt: "Coats", label: "Coats", price: "£18" },
];

// Image mapping
const cleanImages = {
  "1.svg": clean1,
  "2.svg": clean2,
  "3.svg": clean3,
  "4.svg": clean4,
  "5.svg": clean5,
  "6.svg": clean6,
  "8.svg": clean8,
};

function getCleanImage(imgName) {
  return cleanImages[imgName] || "";
}

const slider = ref(null);
const activeSlide = ref(0);
const slides = ref([]);

onMounted(() => {
  if (slider.value) {
    slides.value = slider.value.querySelectorAll(".inline-block");
  }
});

function goToSlide(index) {
  if (slider.value && slides.value[index]) {
    slider.value.scrollTo({
      left: slides.value[index].offsetLeft,
      behavior: "smooth",
    });
    activeSlide.value = index;
  }
}

function handleScroll() {
  if (slider.value && slides.value.length > 0) {
    const scrollPosition =
      slider.value.scrollLeft + slider.value.clientWidth / 2;
    slides.value.forEach((slide, index) => {
      const slideStart = slide.offsetLeft;
      const slideEnd = slideStart + slide.offsetWidth;
      if (scrollPosition >= slideStart && scrollPosition < slideEnd) {
        activeSlide.value = index;
      }
    });
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

.mobile-slider-container {
  scrollbar-width: none;
}
.mobile-slider-container::-webkit-scrollbar {
  display: none;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-seamless-infinite-scroll {
  display: flex;
  width: 200%;
  animation: scroll 30s linear infinite;
}

.animate-seamless-infinite-scroll:hover {
  animation-play-state: paused;
}
</style>
