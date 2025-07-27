<template>
  <div>
    <Header />
    <slot />
    <Area v-if="showAreaInLayout" />
    <Footer />
  </div>
</template>

<script setup>
const route = useRoute();

const showAreaInLayout = computed(() => {
  return route.meta.hideAreaInLayout !== true;
});
</script>
