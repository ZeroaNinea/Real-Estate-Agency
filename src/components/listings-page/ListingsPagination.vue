<script setup lang="ts">
defineProps<{ pages: number }>()
</script>

<template>
  <div class="container">
    <ul class="pagination justify-content-center">
      <li class="page-item mx-1" v-for="page in pages" :key="page">
        <button
          v-ripple="'color-mix(in lch, var(--bs-black) 45%, transparent)'"
          class="page-link btn"
        >
          <span class="btn-content">{{ page }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Button fix. */
button {
  isolation: isolate;
}

.btn-content {
  position: relative;
  z-index: 1;
}
</style>
