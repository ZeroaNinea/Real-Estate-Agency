<script setup lang="ts">
import type Property from '@/types/property.interface'

defineProps<{
  property: Property
}>()
</script>

<template>
  <div class="card">
    <img class="card-img-top" :src="property.image" :alt="property.title" />

    <div class="card-body">
      <h5 class="card-title">{{ property.title }}</h5>

      <h6 class="card-subtitle mb-2 text-muted">{{ property.location }} / ${{ property.price }}</h6>

      <p class="card-text">
        {{ property.description }}
      </p>

      <p class="card-text">
        <small class="text-muted"
          >Bedrooms: {{ property.bedrooms }}; Area: {{ property.area }} m2; Type:
          {{ property.type }};</small
        >
      </p>

      <button
        v-ripple="'color-mix(in oklab, var(--bs-blue) 75%, var(--bs-white) 15%, transparent)'"
        class="btn btn-primary"
      >
        <span class="btn-content">View Details</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  isolation: isolate;
}

.btn-content {
  position: relative;
  z-index: 1;
}
</style>
