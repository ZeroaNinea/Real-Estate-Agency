<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import FeaturedProperties from '@/components/homepage/FeaturedProperties.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
  <FeaturedProperties />
</template>

<style scoped>
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
