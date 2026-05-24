<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import CallToAction from '@/components/layout/CallToAction.vue'

import { onMounted, onUnmounted } from 'vue'

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const updateTheme = (event?: MediaQueryList | MediaQueryListEvent) => {
  document.body.setAttribute('data-bs-theme', event?.matches ? 'dark' : 'light')
}

onMounted(() => {
  updateTheme(mediaQuery)

  mediaQuery.addEventListener('change', updateTheme)
})

onUnmounted(() => {
  mediaQuery.removeEventListener('change', updateTheme)
})
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
