<template>
  <div class="bg-gray-50">
    <!-- SEO Metadata -->
    <Head>
      <title>
        Chichester Tailoring | Transparent Tailoring & Dry Cleaning Prices
      </title>
      <meta
        name="description"
        content="Affordable and transparent pricing for alterations, tailoring, and dry cleaning services in Chichester. View our price list and book online today."
      />
    </Head>

    <!-- Hero Section -->
    <div
      class="relative h-[40vh] lg:h-[70vh] min-h-[400px] bg-app-blue overflow-hidden"
    >
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center app-pricing opacity-90"
      ></div>
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/30"
      ></div>
      <!-- Content -->
      <div
        class="container mx-auto px-4 lg:px-6 relative z-10 h-full flex flex-col justify-center"
      >
        <div class="max-w-3xl">
          <h1
            class="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            Transparent Pricing for Tailoring And Dry Cleaning
          </h1>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl">
            No hidden fees. Just quality service at fair prices.
          </p>
        </div>
      </div>
    </div>

    <!-- Pricing Section -->
    <div id="pricing" class="max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="uppercase tracking-widest text-blue font-medium mb-4 block"
          >Our Services</span
        >
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Clear & Competitive Pricing
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Quality craftsmanship at prices that respect your budget. All prices
          include VAT.
        </p>
      </div>

      <!-- Pricing Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <div class="p-8 text-center">
            <div
              class="w-40 h-40 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center"
            >
              <img
                :src="serviceImages[service.image]"
                :alt="service.title"
                class="w-20 h-20 object-contain"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ service.title }}
            </h3>
            <p class="text-3xl font-bold text-blue mb-6">
              from {{ service.price }}
            </p>

            <ul class="space-y-2 mb-8 text-gray-600">
              <li
                v-for="detail in service.details"
                :key="detail"
                class="flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-blue mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {{ detail }}
              </li>
            </ul>

            <NuxtLink
              to="#booking"
              class="bg-app-blue px-8 lg:px-10 py-3 rounded-full text-white font-bold text-sm lg:text-2xl cursor-pointer primary-btn hover:bg-blue-700 transition-colors inline-block"
            >
              Book This Service
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div id="booking" class="bg-app-blue text-white py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 lg:px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Refresh Your Wardrobe?
        </h2>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Schedule a pickup or visit our Chichester location for expert garment
          care.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+441243941694"
            class="text-white border px-8 lg:px-10 py-3 rounded-full font-bold text-sm lg:text-2xl border-white cursor-pointer secondary-btn hover:bg-blue-50 transition-colors inline-block"
          >
            Contact Us
          </a>
          <NuxtLink
            to="#"
            class="bg-white px-8 lg:px-10 py-3 rounded-full text-blue font-bold text-sm lg:text-2xl cursor-pointer primary-btn transition-colors inline-block"
          >
            Book Online
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Chichester Tailoring | Transparent Tailoring & Dry Cleaning Prices",
  meta: [
    {
      name: "description",
      content:
        "Affordable and transparent pricing for alterations, tailoring, and dry cleaning services in Chichester. View our price list and book online today.",
    },
  ],
});

import image1 from "~/assets/images/clean/2.svg";
import image2 from "~/assets/images/clean/3.svg";
import image3 from "~/assets/images/clean/4.svg";
import image4 from "~/assets/images/clean/5.svg";
import image5 from "~/assets/images/clean/6.svg";
import image6 from "~/assets/images/clean/8.svg";

const serviceImages = {
  "2.svg": image1,
  "3.svg": image2,
  "4.svg": image3,
  "5.svg": image4,
  "6.svg": image5,
  "8.svg": image6,
};

const services = [
  {
    title: "Full Suit Cleaning",
    price: "£16",
    details: ["Jacket & trousers", "Steam pressed", "48-hour service"],
    image: "2.svg",
  },
  {
    title: "Dress Alterations",
    price: "£15",
    details: ["Hem adjustments", "Waist tailoring", "Beading repair"],
    image: "3.svg",
  },
  {
    title: "Skirt Adjustments",
    price: "£10",
    details: ["Hemming", "Waistband", "Lining repair"],
    image: "4.svg",
  },
  {
    title: "Jacket Refitting",
    price: "£11",
    details: ["Sleeve shortening", "Waist suppression", "Shoulder adjustment"],
    image: "5.svg",
  },
  {
    title: "Top Alterations",
    price: "£5",
    details: ["Hem adjustments", "Side seams", "Neckline reshape"],
    image: "6.svg",
  },
  {
    title: "Coat Cleaning",
    price: "£18",
    details: ["Winter coat care", "Leather treatment", "Fur trimming"],
    image: "8.svg",
  },
];
</script>

<style scoped></style>
