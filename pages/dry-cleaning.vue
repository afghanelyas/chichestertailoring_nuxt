<template>
  <div class="relative bg-white">
    <!-- SEO Metadata -->
    <Head>
      <title>Chichester Tailoring | Dry Cleaning Services in Chichester</title>
      <meta
        name="description"
        content="Professional dry cleaning services in Chichester for suits, dresses, coats, and more. Same-day service available with convenient online booking."
      />
      <meta
        name="keywords"
        content="dry cleaning Chichester, professional dry cleaners, suit cleaning, same-day dry cleaning, Chichester laundry services"
      />
      <meta property="og:image" content="/images/dry-cleaning-banner.jpg" />
    </Head>

    <!-- Hero Section with Slider -->
    <div
      class="relative h-[40vh] lg:h-[70vh] min-h-[400px] bg-app-blue overflow-hidden"
    >
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center app-dryCleaning opacity-90"
      ></div>
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/10"
      ></div>
      <!-- Content -->
      <div
        class="container mx-auto px-4 lg:px-6 relative z-10 h-full flex flex-col justify-center"
      >
        <div class="max-w-3xl">
          <h1
            class="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            Premium <span>Dry Cleaning</span> <br /><span>Services</span>
          </h1>
          <p class="text-white text-base lg:text-lg font-light mb-6 max-w-lg">
            Gentle yet effective cleaning for your most delicate garments, using
            eco-friendly solvents.
          </p>
        </div>
      </div>
    </div>

    <!-- Services Showcase -->
    <div id="services" class="py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="text-center mb-16">
          <span
            class="uppercase tracking-widest text-blue font-medium mb-3 block"
            >Our Process</span
          >
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            How We <span class="text-blue">Care</span> For Your Clothes
          </h2>
        </div>

        <!-- Process Steps with Images -->
        <div class="grid md:grid-cols-3 gap-10">
          <!-- Step 1 -->
          <div
            class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="h-64 bg-cover bg-center"
              :style="{ backgroundImage: `url(${image1})` }"
            >
              >
            </div>
            <div class="p-6">
              <div class="text-blue mb-3">
                <span class="text-2xl font-bold">01</span>
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900">
                Expert Inspection
              </h3>
              <p class="text-gray-600">
                Each garment is carefully inspected for stains, fabric type, and
                special care requirements.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div
            class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="h-64 bg-cover bg-center"
              :style="{ backgroundImage: `url(${image2})` }"
            ></div>
            <div class="p-6">
              <div class="text-blue mb-3">
                <span class="text-2xl font-bold">02</span>
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900">
                Eco-Friendly Cleaning
              </h3>
              <p class="text-gray-600">
                Using state-of-the-art equipment and green solvents for
                effective yet gentle cleaning.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div
            class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="h-64 bg-cover bg-center"
              :style="{ backgroundImage: `url(${image3})` }"
            ></div>
            <div class="p-6">
              <div class="text-blue mb-3">
                <span class="text-2xl font-bold">03</span>
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900">
                Professional Finishing
              </h3>
              <p class="text-gray-600">
                Pressing and steaming to restore the original shape and
                crispness of your garments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fabric Specialties -->
    <div class="py-16 lg:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="text-center mb-16">
          <span
            class="uppercase tracking-widest text-blue font-medium mb-3 block"
            >Fabric Expertise</span
          >
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            We Handle <span class="text-blue">Delicate</span> Fabrics
          </h2>
        </div>

        <!-- Fabric Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            class="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900">Silk</h3>
          </div>

          <div
            class="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900">Wool</h3>
          </div>

          <div
            class="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900">Cashmere</h3>
          </div>

          <div
            class="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900">Linen</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div id="booking" class="py-16 lg:py-20 bg-app-blue text-white">
      <div class="container mx-auto px-4 lg:px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          Ready for Professional Garment Care?
        </h2>
        <p class="text-xl max-w-2xl mx-auto mb-8">
          Schedule a pickup or visit our Chichester location for expert dry
          cleaning services.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="#"
            class="bg-white px-8 lg:px-10 py-3 rounded-full text-blue font-bold text-sm lg:text-2xl cursor-pointer primary-btn transition-colors"
          >
            Book Now
          </NuxtLink>
          <a
            href="tel:+441243941694"
            class="text-white border px-8 lg:px-10 py-3 rounded-full font-bold text-sm lg:text-2xl border-white cursor-pointer secondary-btn hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image1 from "../assets/images/dryCleaning/ex.webp";
import image2 from "../assets/images/dryCleaning/echo.webp";
import image3 from "../assets/images/dryCleaning/pre.webp";
useHead({
  title: "Chichester Tailoring | Dry Cleaning Services in Chichester",
  meta: [
    {
      name: "description",
      content:
        "Professional dry cleaning services in Chichester for suits, dresses, coats, and more. Same-day service available with convenient online booking.",
    },
    {
      name: "keywords",
      content:
        "dry cleaning Chichester, professional dry cleaners, suit cleaning, same-day dry cleaning, Chichester laundry services",
    },
    {
      property: "og:image",
      content: "../assets/images/dry1.webp",
    },
  ],
});
</script>
