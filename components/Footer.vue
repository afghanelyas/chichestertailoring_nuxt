<template>
  <footer class="bg-app-blue text-white" role="contentinfo">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col items-center text-center">
        <!-- Logo and Branding -->
        <div class="mb-6">
          <img
            :src="whiteLogo"
            class="h-16 w-auto mx-auto hover:opacity-90 transition-opacity duration-300"
            alt="H&F Haberdashery & Fabric logo"
            width="64"
            height="64"
          />
        </div>
        <h2 class="text-2xl md:text-3xl font-bold mb-2">
          CHICHESTER TAILORING
        </h2>
        <p class="text-lg text-blue-100 mb-8">Alterations And Dry Cleaning</p>

        <!-- Navigation Links Section -->
        <nav aria-label="Footer navigation">
          <div class="w-full max-w-5xl mb-8">
            <ul class="flex flex-wrap justify-center gap-6 list-none">
              <li>
                <NuxtLink to="/alternations-and-tailoring" class="footer-link"
                  >Alterations & Tailoring</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/pricing" class="footer-link">Pricing</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/dry-cleaning" class="footer-link"
                  >Dry Cleaning</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/about" class="footer-link">About Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact-us" class="footer-link"
                  >Contact Us</NuxtLink
                >
              </li>
              <li><NuxtLink to="/faqs" class="footer-link">FAQs</NuxtLink></li>
              <li>
                <NuxtLink to="/terms" class="footer-link"
                  >Terms & Conditions</NuxtLink
                >
              </li>
            </ul>
          </div>
        </nav>

        <!-- Copyright Section -->
        <div class="w-full">
          <p class="text-blue-100 mb-2">
            © 2025 H&F Haberdashery & Fabric. All Rights Reserved.
          </p>
          <p class="text-blue-100">
            Design & Developed by
            <a
              href="https://sabaq.af"
              class="hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-app-blue rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sabaq.af
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import whiteLogo from "@/assets/images/WhiteLogo.svg";
</script>

<style scoped>
.footer-link {
  position: relative;
  transition: all 0.3s ease;
}
.footer-link:hover {
  color: white;
}
.footer-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: white;
  transition: width 0.5s ease;
}
.footer-link:hover::after {
  width: 100%;
}
</style>
