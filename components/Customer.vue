<template>
  <div
    class="h-auto bg-app-customer py-6 text-md font-medium relative overflow-hidden"
    aria-label="Customer testimonials section"
  >
    <div class="text-center px-4 sm:px-0">
      <h2
        class="text-blue font-bold text-2xl sm:text-5xl mt-4 sm:mt-8"
        id="testimonials-title"
      >
        WHAT OUR CUSTOMERS SAY
      </h2>
      <p class="hidden md:block text-2xl mt-2 mb-10">
        Real experiences from people who trust us with their tailoring and dry
        cleaning needs.
      </p>
      <p class="md:hidden text-customer text-base mt-2 mb-6">
        Trusted by our tailoring and <br />
        cleaning customers.
      </p>
      <img :src="quates" class="mx-auto mb-4" alt="" aria-hidden="true" />

      <!-- Slider Wrapper -->
      <div
        class="relative w-full max-w-4xl mx-auto h-[300px] md:h-[250px] flex items-center"
        aria-labelledby="testimonials-title"
      >
        <!-- Slides Container -->
        <div class="w-full transition-all duration-500 ease-in-out">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            v-show="currentIndex === index"
            class="testimonial-slide"
            role="tabpanel"
            :aria-hidden="currentIndex !== index"
          >
            <p class="text-xl leading-8 mb-4 hidden md:block">
              {{ slide.desktopText }}
            </p>
            <p class="md:hidden text-base text-center leading-6 mb-4">
              {{ slide.mobileText }}
            </p>
            <h3 class="text-blue text-center mb-8">{{ slide.author }}</h3>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-64 mb-20 md:hidden"
        >
          <button
            @click="prev"
            class="h-9 w-9 flex items-center justify-center cursor-pointer primary-btn rounded-full bg-white text-gray-600 shadow hover:text-blue-600 transition"
            aria-label="Previous testimonial"
            type="button"
          >
            <ChevronLeftIcon class="w-5 h-5 text-gray-700" />
          </button>
          <button
            @click="next"
            class="h-9 w-9 flex items-center justify-center cursor-pointer primary-btn rounded-full bg-white text-gray-600 shadow hover:text-blue-600 transition"
            aria-label="Next testimonial"
            type="button"
          >
            <ChevronRightIcon class="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <!-- Desktop Navigation -->
        <div
          class="absolute inset-0 items-center justify-between -mr-20 -ml-20 px-4 hidden md:flex"
        >
          <button
            @click="prev"
            class="z-30 h-10 w-10 flex items-center justify-center cursor-pointer primary-btn rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 shadow-md"
            aria-label="Previous testimonial"
            type="button"
          >
            <ChevronLeftIcon class="w-5 h-5 text-gray-700" />
          </button>
          <button
            @click="next"
            class="z-30 h-10 w-10 flex items-center justify-center cursor-pointer primary-btn rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 shadow-md"
            aria-label="Next testimonial"
            type="button"
          >
            <ChevronRightIcon class="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <!-- Review Buttons -->
      <div
        class="flex flex-col sm:flex-row sm:space-x-5 space-y-3 sm:space-y-0 justify-center items-center mb-6 sm:mb-8"
      >
        <a
          href="#"
          class="bg-app-blue px-6 sm:px-10 py-3 rounded-full text-white font-bold text-base sm:text-2xl cursor-pointer primary-btn hover:bg-blue-700 transition-colors sm:w-auto inline-block"
          role="button"
          aria-label="Write a review"
        >
          Write Review
        </a>
        <a
          href="#"
          class="md:block text-blue border px-10 py-3 rounded-full font-bold text-2xl border-app-blue cursor-pointer secondary-btn hover:bg-blue-50 transition-colors inline-block"
          aria-label="Read all reviews"
        >
          Read All Reviews
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import quates from "@/assets/images/customer/double-quotes.svg";

const currentIndex = ref(0);
const slides = ref([
  {
    desktopText:
      "Love this shop, the man there is so helpful and passionate about sewing. I bought some beautiful Indian silks today to make some ties for my partner for his wedding suit and I was given some really good advice. I'm very pleased with the result. Thank you",
    mobileText:
      "Love this shop, the man there is so helpful and passionate about sewing. I bought some beautiful Indian silks today to make some ties for my partner for his wedding suit and was given really good advice. I'm very pleased with the result. Thank you",
    author: "— Rose Leyshon",
  },
  {
    desktopText:
      "Fantastic service! I had some delicate garments dry cleaned and they came back looking brand new. Highly recommend!",
    mobileText:
      "Fantastic service! Delicate garments cleaned perfectly. Highly recommend!",
    author: "— Emily Watson",
  },
  {
    desktopText:
      "Amazing tailor! Always gets the fit just right and the staff is incredibly friendly and professional.",
    mobileText: "Amazing tailor! Perfect fit and very friendly staff.",
    author: "— Sarah Mitchell",
  },
]);

function next() {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
}
function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
}
</script>

<style scoped>
/* Add your scoped styles here */
</style>
