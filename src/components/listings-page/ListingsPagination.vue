<script setup lang="ts">
defineProps<{
  pages: number
  currentPage: number
}>()

const emit = defineEmits<{
  (e: 'change-page', page: number): void
}>()
</script>

<template>
  <div class="container">
    <ul class="pagination justify-content-center">
      <li class="page-item mx-1">
        <button
          v-ripple="'color-mix(in lch, var(--bs-black) 45%, transparent)'"
          class="page-link btn"
          @click="emit('change-page', currentPage - 1 < 1 ? 1 : currentPage - 1)"
        >
          <span class="btn-content"><i class="bi bi-caret-left"></i></span>
        </button>
      </li>
      <li class="page-item mx-1" v-for="page in pages" :key="page">
        <button
          v-ripple="
            currentPage === page
              ? 'color-mix(in oklab, var(--bs-blue) 50%, var(--bs-white) 15%, transparent)'
              : 'color-mix(in lch, var(--bs-black) 45%, transparent)'
          "
          :class="['page-link btn', currentPage === page ? 'active' : '']"
          @click="emit('change-page', page)"
        >
          <span class="btn-content">{{ page }}</span>
        </button>
      </li>
      <li class="page-item mx-1">
        <button
          v-ripple="'color-mix(in lch, var(--bs-black) 45%, transparent)'"
          class="page-link btn"
          @click="emit('change-page', currentPage + 1 > pages ? pages : currentPage + 1)"
        >
          <span class="btn-content"><i class="bi bi-caret-right"></i></span>
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
