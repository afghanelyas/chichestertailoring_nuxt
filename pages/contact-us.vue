<template>
  <div class="bg-white">
    <!-- SEO Metadata -->
    <Head>
      <title>Contact Us | Chichester Tailoring</title>
      <meta
        name="description"
        content="Find our tailoring shop in Chichester. Get directions, opening hours, and contact information for expert alterations and dry cleaning services."
      />
    </Head>

    <!-- Hero Section -->
    <div
      class="relative h-[40vh] lg:h-[70vh] min-h-[400px] bg-app-blue overflow-hidden"
    >
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center app-contact opacity-90"
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
            Visit Our Tailoring Shop
          </h1>
          <p class="text-white text-base lg:text-lg font-light mb-6 max-w-lg">
            We're conveniently located in the heart of Chichester
          </p>
        </div>
      </div>
    </div>

    <!-- Getting Here Section -->
    <div class="py-16 lg:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            How To Find Us
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Conveniently located in central Chichester with excellent transport
            links
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- By Train -->
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <div
              class="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full text-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-center text-gray-900 mb-3">
              By Train
            </h3>
            <p class="text-gray-600 text-center">
              Chichester Station is just a 10-minute walk from our shop. Exit
              the station and head east on Southgate, then turn right onto East
              Street.
            </p>
          </div>

          <!-- By Bus -->
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <div
              class="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full text-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-center text-gray-900 mb-3">
              By Bus
            </h3>
            <p class="text-gray-600 text-center">
              The closest bus stops are East Street (Stop E1) and Cathedral
              (Stop C3), both served by multiple routes including the 700
              Coastliner.
            </p>
          </div>

          <!-- On Foot -->
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <div
              class="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full text-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-center text-gray-900 mb-3">
              On Foot
            </h3>
            <p class="text-gray-600 text-center">
              We're just 5 minutes from the Cathedral and the Market Cross. Look
              for our classic tailoring shopfront with gold lettering.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Contact Us | Chichester Tailoring",
  meta: [
    {
      name: "description",
      content:
        "Find our tailoring shop in Chichester. Get directions, opening hours, and contact information for expert alterations and dry cleaning services.",
    },
  ],
});
</script>

<style scoped></style>
