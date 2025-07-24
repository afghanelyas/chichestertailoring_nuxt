<template>
  <div
    class="bg-app-blue text-white font-medium text-base sm:text-xl flex items-center justify-center lg:space-x-16 space-x-4 py-4 sm:h-20"
    role="region"
    aria-label="Key service highlights"
  >
    <ul
      class="flex items-center justify-center lg:space-x-16 space-x-4 w-full"
      role="list"
    >
      <li class="flex items-center space-x-2">
        <img
          :src="item1"
          alt=""
          aria-hidden="true"
          class="w-6 h-6 sm:w-8 sm:h-8"
        />
        <span class="text-xs sm:text-2xl">
          Same Day <br class="sm:hidden" />
          Alterations
        </span>
      </li>
      <li aria-hidden="true" class="h-6 w-px bg-white bg-opacity-50"></li>
      <li class="flex items-center space-x-2">
        <img
          :src="item2"
          alt=""
          aria-hidden="true"
          class="w-8 h-8 sm:w-9 sm:h-9"
        />
        <span class="text-xs sm:text-2xl">
          2–3 Days <br class="sm:hidden" />
          Turnaround
        </span>
      </li>
      <li aria-hidden="true" class="h-6 w-px bg-white bg-opacity-50"></li>
      <li class="flex items-center space-x-2">
        <img
          :src="item3"
          alt=""
          aria-hidden="true"
          class="w-6 h-6 sm:w-8 sm:h-8"
        />
        <span class="text-xs sm:text-2xl">
          20+ Years <br class="sm:hidden" />
          Experience
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import item1 from "@/assets/images/item/Group.svg";
import item2 from "@/assets/images/item/clock.svg";
import item3 from "@/assets/images/item/badge.svg";
</script>
