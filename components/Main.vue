<template>
  <div>
    <!-- SEO Metadata -->
    <Head>
      <title>
        Chichester Tailoring | Dry Cleaning & Alterations in Chichester
      </title>
      <meta
        name="description"
        content="Expert tailoring and professional dry-cleaning services in Chichester. Same-day alterations available with convenient online booking."
      />
    </Head>

    <!-- Hero Section -->
    <div
      class="relative h-[40vh] lg:h-[70vh] min-h-[400px] bg-app-blue overflow-hidden"
    >
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center app-main opacity-90"
        aria-hidden="true"
        role="presentation"
      ></div>
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/5"
        aria-hidden="true"
        role="presentation"
      ></div>

      <!-- Content -->
      <div
        class="container mx-auto px-4 lg:px-6 relative z-10 h-full flex flex-col justify-center"
      >
        <div class="max-w-3xl">
          <h1
            class="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            Expert Tailoring <br class="lg:hidden" />
            Made Simple
          </h1>
          <p
            class="lg:hidden text-base font-semibold text-white leading-7 mt-4 mb-4"
          >
            Photo. Few questions. Instant tailoring estimate.
          </p>
          <p
            class="hidden lg:block text-xl font-medium text-white leading-8 mt-7 mb-7"
          >
            Get your clothes perfectly tailored with our easy-to-use <br />
            wizard. Take a photo, answer a few questions, and <br />
            receive an instant cost estimate.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-start">
            <NuxtLink
              to="/estimator"
              class="bg-white px-8 lg:px-10 py-3 rounded-full text-blue font-bold text-sm lg:text-2xl cursor-pointer primary-btn inline-block text-center focus:outline-none focus:ring-2 focus:ring-blue-600"
              role="button"
              aria-label="Try AI Estimator"
            >
              Try AI Estimator
            </NuxtLink>
            <NuxtLink
              to="/contact-us"
              class="text-white border px-8 lg:px-10 py-3 rounded-full font-bold text-sm lg:text-2xl border-app-white cursor-pointer secondary-btn inline-block text-center focus:outline-none focus:ring-2 focus:ring-white"
              role="button"
              aria-label="Visit our shop"
            >
              Visit our shop
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import head from Nuxt
useHead({
  title: "Chichester Tailoring | Dry Cleaning & Alterations in Chichester",
  meta: [
    {
      name: "description",
      content:
        "Expert tailoring and professional dry-cleaning services in Chichester. Same-day alterations available with convenient online booking.",
    },
  ],
});
</script>

<style scoped></style>
