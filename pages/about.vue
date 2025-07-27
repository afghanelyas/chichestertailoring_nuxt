<template>
  <div class="relative">
    <!-- SEO Metadata -->
    <Head>
      <title>About Us | Chichester Tailoring</title>
      <meta
        name="description"
        content="Learn more about Chichester Tailoring—your trusted local specialists in alterations, dry cleaning, and custom tailoring services."
      />
    </Head>

    <!-- Hero Section with Stitched Texture -->
    <div
      class="relative h-[40vh] lg:h-[70vh] min-h-[400px] bg-app-blue overflow-hidden"
    >
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center app-about opacity-90"
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
            Crafting Perfection <span>Since 1987</span>
          </h1>
          <p class="text-white text-base lg:text-lg font-light mb-6 max-w-lg">
            At Chichester Tailoring, we blend generations of sartorial expertise
            with modern techniques to deliver unparalleled garment care. Each
            stitch reflects our commitment to preserving both fabric and
            tradition.
          </p>
        </div>
      </div>
    </div>

    <!-- Our Story Section -->
    <div class="py-24 bg-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div
              class="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                :src="image1"
                alt="Master tailor at work"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute -bottom-10 right-4 lg:-bottom-8 lg:-right-8 bg-app-blue text-white p-4 lg:p-6 rounded-lg shadow-lg w-48 lg:w-64"
            >
              <span class="block text-3xl lg:text-4xl font-bold">20+</span>
              <span class="block text-base lg:text-lg">Years Experience</span>
            </div>
          </div>

          <div>
            <span
              class="uppercase tracking-widest text-blue font-medium mb-4 block"
              >Our Philosophy</span
            >
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              More Than Just Needle & Thread
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              At Chichester Tailoring, we believe clothing is an extension of
              personality. Our founder, James Whitmore, established this
              principle in 1987 when he opened our first shop on East Street.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Today, our team of master tailors combines traditional techniques
              with modern technology to deliver unparalleled craftsmanship.
              Whether it's a cherished family heirloom or a brand new suit, we
              treat every garment with the same level of care and attention to
              detail.
            </p>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full"
                  :src="about"
                  alt="Founder's signature"
                />
              </div>
              <div class="ml-4">
                <div class="text-base font-medium text-gray-900">
                  James Whitmore
                </div>
                <div class="text-base text-gray-500">
                  Founder & Master Tailor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div id="our-team" class="py-24 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="text-center mb-16">
          <span
            class="uppercase tracking-widest text-blue font-medium mb-4 block"
            >Meet The Experts</span
          >
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Master Tailors
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Each member of our team brings unique skills and decades of
            experience to your garments.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <!-- Team Member 1 -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="h-64 bg-cover bg-center"
              :style="{ backgroundImage: `url(${team1})` }"
            ></div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Sarah Chen</h3>
              <p class="text-blue mb-4">Head Seamstress</p>
              <p class="text-gray-600 mb-4">
                Specializing in delicate fabrics and intricate beadwork with 22
                years experience.
              </p>
              <div class="flex space-x-4">
                <span class="inline-flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  5,200+ garments
                </span>
              </div>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="h-64 bg-cover bg-center"
              :style="{ backgroundImage: `url(${team2})` }"
            ></div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Michael O'Connor
              </h3>
              <p class="text-blue mb-4">Master Tailor</p>
              <p class="text-gray-600 mb-4">
                Expert in suit restructuring and military uniform restoration.
              </p>
              <div class="flex space-x-4">
                <span class="inline-flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  7,500+ garments
                </span>
              </div>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="h-64 bg-cover bg-center"
              :style="{ backgroundImage: `url(${team3})` }"
            ></div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Amina Patel</h3>
              <p class="text-blue mb-4">Textile Specialist</p>
              <p class="text-gray-600 mb-4">
                Preservation expert for vintage fabrics and luxury materials.
              </p>
              <div class="flex space-x-4">
                <span class="inline-flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  3,800+ garments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials -->
    <div class="py-24 bg-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="text-center mb-16">
          <span
            class="uppercase tracking-widest text-blue font-medium mb-4 block"
            >Client Stories</span
          >
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Trusted By Chichester
          </h2>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-gray-50 p-8 rounded-xl">
            <div class="flex items-center mb-4">
              <svg
                v-for="i in 4"
                :key="i"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <blockquote class="text-lg text-gray-600 mb-6">
              "They transformed my grandmother's wedding dress for my own
              wedding. The craftsmanship was breathtaking - every stitch
              perfect."
            </blockquote>
            <div class="flex items-center">
              <img
                class="h-12 w-12 rounded-full"
                :src="customer1"
                alt="Emily R."
              />
              <div class="ml-4">
                <div class="text-base font-medium text-gray-900">
                  Emily Richardson
                </div>
                <div class="text-base text-gray-500">Bride, 2023</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-gray-50 p-8 rounded-xl">
            <div class="flex items-center mb-4">
              <svg
                v-for="i in 5"
                :key="i"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <blockquote class="text-lg text-gray-600 mb-6">
              "As a business professional, my suits are my armor. Chichester
              Tailoring keeps every piece in impeccable condition year after
              year."
            </blockquote>
            <div class="flex items-center">
              <img
                class="h-12 w-12 rounded-full"
                :src="customer3"
                alt="David W."
              />
              <div class="ml-4">
                <div class="text-base font-medium text-gray-900">
                  David Williamson
                </div>
                <div class="text-base text-gray-500">Financial Consultant</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-gray-50 p-8 rounded-xl">
            <div class="flex items-center mb-4">
              <svg
                v-for="i in 4"
                :key="i"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <blockquote class="text-lg text-gray-600 mb-6">
              "The only place I trust with my vintage collection. Their
              knowledge of historical garments is unparalleled in the region."
            </blockquote>
            <div class="flex items-center">
              <img
                class="h-12 w-12 rounded-full"
                :src="customer2"
                alt="Margaret T."
              />
              <div class="ml-4">
                <div class="text-base font-medium text-gray-900">
                  Margaret Taylor
                </div>
                <div class="text-base text-gray-500">Vintage Collector</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final CTA -->
    <div class="bg-app-blue text-white py-16 lg:py-24">
      <div class="container mx-auto px-4 lg:px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          Experience The Chichester Difference
        </h2>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Bring your garments to our East Street location and discover true
          craftsmanship.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center text-center">
          <a
            href="tel:+441243941694"
            class="text-white border px-8 lg:px-10 py-3 rounded-full font-bold text-sm lg:text-2xl border-white cursor-pointer secondary-btn hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </a>
          <NuxtLink
            to="#"
            class="bg-white px-8 lg:px-10 py-3 rounded-full text-blue font-bold text-sm lg:text-2xl cursor-pointer primary-btn transition-colors"
          >
            Book Online
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import about from "~/assets/images/about/about.webp";
import image1 from "~/assets/images/about/image1.webp";
import customer1 from "~/assets/images/about/customer1.webp";
import customer2 from "~/assets/images/about/customer2.webp";
import customer3 from "~/assets/images/about/customer3.webp";
import team1 from "~/assets/images/about/team1.webp";
import team2 from "~/assets/images/about/team2.webp";
import team3 from "~/assets/images/about/team3.webp";

useHead({
  title: "About Us | Chichester Tailoring",
  meta: [
    {
      name: "description",
      content:
        "Learn more about Chichester Tailoring—your trusted local specialists in alterations, dry cleaning, and custom tailoring services.",
    },
  ],
});
</script>

<style scoped></style>
