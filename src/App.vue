<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <RouterView />
</template>

<style scoped>
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
