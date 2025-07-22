<template>
  <header role="banner">
    <!-- Skip to content link for accessibility -->
    <a href="#main-content" class="sr-only focus:not-sr-only"
      >Skip to main content</a
    >

    <div>
      <!-- Desktop Header -->
      <div
        class="max-w-7xl mx-auto py-4 px-2 hidden lg:flex justify-between items-center"
      >
        <NuxtLink
          to="/"
          class="hover:opacity-90 transition-opacity duration-300"
          aria-label="Chichester Tailoring Home"
        >
          <div class="flex items-center">
            <img :src="logo" class="h-auto" alt="Chichester Tailoring Logo" />
            <div class="ml-3">
              <h1 class="text-blue font-semibold text-2xl">
                CHICHESTER TAILORING
              </h1>
              <p class="text-blue font-medium text-base">
                Alterations & Dry Cleaning
              </p>
            </div>
          </div>
        </NuxtLink>

        <nav aria-label="Main navigation">
          <ul class="flex items-center space-x-10 text-blue font-bold text-xl">
            <li>
              <NuxtLink
                to="/alternations-and-tailoring"
                class="nav-link"
                :class="{
                  'active-nav-link': $route.path.includes(
                    '/alternations-and-tailoring'
                  ),
                }"
              >
                Alterations And Tailoring
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/dry-cleaning"
                class="nav-link"
                :class="{
                  'active-nav-link': $route.path.includes('/dry-cleaning'),
                }"
              >
                Dry Cleaning
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/pricing"
                class="nav-link"
                :class="{ 'active-nav-link': $route.path.includes('/pricing') }"
              >
                Pricing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="nav-link"
                :class="{ 'active-nav-link': $route.path.includes('/about') }"
              >
                About Us
              </NuxtLink>
            </li>
            <li>
              <a
                href="tel:+441243941694"
                class="nav-link"
                :class="{
                  'active-nav-link': $route.path.includes('/contact-us'),
                }"
              >
                <svg
                  class="inline-block w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                +44 1243 941694
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Mobile Header -->
      <div class="lg:hidden px-4 py-3 bg-white relative z-30">
        <div class="flex items-center justify-between">
          <NuxtLink
            to="/"
            class="flex items-center"
            aria-label="Chichester Tailoring Home"
          >
            <img
              :src="logo"
              class="h-15 w-auto"
              alt="Chichester Tailoring Logo"
            />
            <div class="ml-2">
              <h1 class="text-blue font-semibold text-lg leading-tight">
                CHICHESTER TAILORING
              </h1>
              <p class="text-blue text-xs leading-tight">
                Alterations And Dry Cleaning
              </p>
            </div>
          </NuxtLink>
          <button
            @click="mobileMenuOpen = true"
            class="text-blue ml-4"
            aria-label="Open menu"
            :aria-expanded="mobileMenuOpen.toString()"
            aria-controls="mobile-nav"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div
          v-show="mobileMenuOpen"
          class="fixed inset-0 z-50 bg-white overflow-y-auto"
          @click.away="mobileMenuOpen = false"
          role="dialog"
          aria-modal="true"
          id="mobile-nav"
        >
          <div
            class="flex justify-between items-center px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10"
          >
            <NuxtLink
              to="/"
              class="flex items-center"
              aria-label="Chichester Tailoring Home"
            >
              <img
                :src="logo"
                class="h-15 w-auto"
                alt="Chichester Tailoring Logo"
              />
              <div class="ml-2">
                <h1 class="text-blue font-semibold text-lg">
                  CHICHESTER TAILORING
                </h1>
                <p class="text-blue text-sm">Alterations & Dry Cleaning</p>
              </div>
            </NuxtLink>
            <button
              @click="mobileMenuOpen = false"
              class="text-blue"
              aria-label="Close menu"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav class="px-4 py-6" aria-label="Mobile navigation">
            <ul class="space-y-4 text-center">
              <li>
                <NuxtLink
                  to="/alternations-and-tailoring"
                  @click="mobileMenuOpen = false"
                  class="block py-2 text-blue font-semibold text-xl hover:pl-2 transition-all"
                  :class="{
                    'active-nav-link': $route.path.includes(
                      '/alternations-and-tailoring'
                    ),
                  }"
                >
                  Alterations And Tailoring
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/dry-cleaning"
                  @click="mobileMenuOpen = false"
                  class="block py-2 text-blue font-semibold text-xl hover:pl-2 transition-all"
                  :class="{
                    'active-nav-link': $route.path.includes('/dry-cleaning'),
                  }"
                >
                  Dry Cleaning
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/pricing"
                  @click="mobileMenuOpen = false"
                  class="block py-2 text-blue font-semibold text-xl hover:pl-2 transition-all"
                  :class="{
                    'active-nav-link': $route.path.includes('/pricing'),
                  }"
                >
                  Pricing
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/about"
                  @click="mobileMenuOpen = false"
                  class="block py-2 text-blue font-semibold text-xl hover:pl-2 transition-all"
                  :class="{ 'active-nav-link': $route.path.includes('/about') }"
                >
                  About Us
                </NuxtLink>
              </li>
              <li>
                <a
                  href="tel:+441243941694"
                  @click="mobileMenuOpen = false"
                  class="block py-2 text-blue font-semibold text-xl hover:pl-2 transition-all"
                  :class="{
                    'active-nav-link': $route.path.includes('/contact-us'),
                  }"
                >
                  <svg
                    class="inline-block w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  +44 1243 941694
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
import logo from "~/assets/images/Logo.png";
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only.focus:not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.nav-link {
  position: relative;
  transition: all 0.3s ease;
  color: #00518f; /* Default blue */
  padding-bottom: 4px; /* Space for the underline */
}

.nav-link::after,
.active-nav-link::after {
  content: "";
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #00518f; /* Your dark blue color */
  transition: width 0.5s ease;
}

.nav-link::after {
  width: 0;
}

.nav-link:hover::after {
  width: 100%;
}

.active-nav-link {
  color: #00518f;
  border-bottom: 2px solid #00518f;
  padding: 0 0 6px;
  font-weight: bold;
}

.active-nav-link::after {
  width: 100%;
}
</style>
