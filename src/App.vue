<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import CallToAction from '@/components/layout/CallToAction.vue'
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <CallToAction />
  </footer>
</template>

<style scoped>
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
