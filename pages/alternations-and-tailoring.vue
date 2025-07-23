<template>
  <div class="relative bg-white">
    <!-- SEO Metadata -->
    <Head>
      <title>
        Chichester Tailoring | Alterations & Tailoring Services in Chichester
      </title>
      <meta
        name="description"
        content="Expert alterations and tailoring services in Chichester. Same-day service and online booking available."
      />
    </Head>

    <!-- Hero Section with Balanced Contrast -->
    <div
      class="relative h-[40vh] lg:h-[70vh] min-h-[400px] bg-app-blue overflow-hidden"
    >
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center app-alteration opacity-90"
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
            Precision Tailoring<br /><span>Perfected</span>
          </h1>
          <p class="text-white text-base lg:text-lg font-light mb-6 max-w-lg">
            Where traditional craftsmanship meets contemporary style for your
            perfect fit.
          </p>
        </div>
      </div>
    </div>

    <!-- Services Section - Light/Dark Balance -->
    <div id="services" class="py-24 bg-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="text-center mb-20">
          <span
            class="uppercase tracking-widest text-blue font-medium mb-4 block"
            >Our Expertise</span
          >
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tailoring <span class="text-blue">Services</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service Card 1 -->
          <div
            class="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group"
          >
            <div class="text-blue mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">
              Garment Reshaping
            </h3>
            <p class="text-gray-600">
              Expert adjustments that enhance your silhouette while preserving
              the garment's integrity.
            </p>
            <div class="mt-6">
              <NuxtLink
                to="#"
                class="text-blue hover:text-blue-800 font-medium flex items-center gap-2 transition-colors"
              >
                Details
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Service Card 2 -->
          <div
            class="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group"
          >
            <div class="text-blue mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">
              Bespoke Adjustments
            </h3>
            <p class="text-gray-600">
              Custom reconstruction for challenging fits, including shoulder
              realignment and drape correction.
            </p>
            <div class="mt-6">
              <NuxtLink
                to="#"
                class="text-blue hover:text-blue-800 font-medium flex items-center gap-2 transition-colors"
              >
                Details
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Service Card 3 -->
          <div
            class="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group"
          >
            <div class="text-blue mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">
              Luxury Fabric Care
            </h3>
            <p class="text-gray-600">
              Specialized handling of premium fabrics with museum-quality
              preservation techniques.
            </p>
            <div class="mt-6">
              <NuxtLink
                to="#"
                class="text-blue hover:text-blue-800 font-medium flex items-center gap-2 transition-colors"
              >
                Details
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section - Balanced Contrast -->
    <div id="booking" class="py-24 bg-gray-50 border-t border-gray-200">
      <div class="container mx-auto px-4 lg:px-6 text-center">
        <span class="uppercase tracking-widest text-blue font-medium mb-4 block"
          >Ready To Begin?</span
        >
        <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
          Your Perfect Fit <span class="text-blue">Awaits</span>
        </h2>

        <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Visit our Chichester studio or schedule a virtual consultation with
          our master tailors.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 text-center justify-center">
          <NuxtLink
            to="#"
            class="bg-app-blue px-8 lg:px-10 py-3 rounded-full text-white font-bold text-sm lg:text-2xl cursor-pointer primary-btn hover:bg-blue-700 transition-colors"
          >
            Book Now
          </NuxtLink>
          <a
            href="tel:+441243941694"
            class="text-blue border px-8 lg:px-10 py-3 rounded-full font-bold text-sm lg:text-2xl border-app-blue cursor-pointer secondary-btn hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title:
    "Chichester Tailoring | Alterations & Tailoring Services in Chichester",
  meta: [
    {
      name: "description",
      content:
        "Expert alterations and tailoring services in Chichester. Same-day service and online booking available.",
    },
  ],
});
</script>
