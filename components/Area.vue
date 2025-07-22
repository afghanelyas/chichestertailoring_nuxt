<template>
  <div class="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="serving-areas-title">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-blue font-bold text-2xl sm:text-3xl md:text-5xl mb-3"
          id="serving-areas-title"
        >
          SERVING CHICHESTER & NEARBY AREAS
        </h2>
        <p class="max-w-2xl mx-auto">
          <span class="block text-sm sm:text-base md:text-2xl text-center">
            Walk-ins welcome at our conveniently located shop
          </span>
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-10 items-center">
        <!-- Contact Info -->
        <div class="w-full lg:w-1/2 space-y-5">
          <div class="p-3 border-b border-app-blue">
            <div class="flex items-start space-x-4">
              <MapPinIcon class="w-6 h-6 text-blue" aria-hidden="true" />
              <div>
                <h3 class="font-bold text-xl mb-1">Address</h3>
                <a
                  href="https://www.google.com/maps/place/6A+North+St,+Chichester+PO19+1LB,+UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-block text-white bg-app-blue px-4 py-2 rounded-full cursor-pointer primary-btn text-sm mb-2 hover:bg-blue-700 transition-colors"
                  aria-label="Get directions to 6A North St, Chichester"
                >
                  Get Directions
                </a>
                <p class="text-gray-900 underline">
                  6A North St, Chichester PO19 1LB, United Kingdom
                </p>
              </div>
            </div>
          </div>

          <div class="p-3 border-b border-app-blue">
            <div class="flex items-start space-x-4">
              <ClockIcon class="w-6 h-6 text-blue" aria-hidden="true" />
              <div>
                <h3 class="font-bold text-xl mb-1">Opening Hours</h3>
                <p class="text-gray-900">Monday to Saturday: 9am–6pm</p>
              </div>
            </div>
          </div>

          <div class="p-3 border-b border-app-blue">
            <div class="flex items-start space-x-4">
              <PhoneIcon class="w-6 h-6 text-blue" aria-hidden="true" />
              <div>
                <h3 class="font-bold text-xl mb-1">Contact</h3>
                <a href="tel:+441243941694" aria-label="Call +44 1243 941694">
                  <p class="text-gray-900 underline">+44 1243 941694</p>
                </a>
              </div>
            </div>
          </div>

          <div class="p-3">
            <div class="flex items-start space-x-4">
              <InboxIcon class="w-6 h-6 text-blue" aria-hidden="true" />
              <div>
                <h3 class="font-bold text-xl mb-1 text-blue">Email</h3>
                <a
                  href="mailto:info@chichestertailoring.com"
                  aria-label="Email info@chichestertailoring.com"
                >
                  <p class="text-gray-900 underline">
                    info@chichestertailoring.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Google Map -->
        <div
          class="w-full lg:w-1/2 h-80 md:h-96 rounded-lg overflow-hidden border border-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.207484294499!2d-0.7810158235376918!3d50.83672097172056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48745a4f5b3c7b4d%3A0x1d1c8b8e0b8e0b8e!2s6A%20North%20St%2C%20Chichester%20PO19%201LB%2C%20UK!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            class="hover:opacity-90 transition-opacity duration-300"
            title="Chichester Tailoring location map"
            aria-label="Chichester Tailoring location map"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  InboxIcon,
} from "@heroicons/vue/24/solid";
</script>

<style></style>
