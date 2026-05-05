<script setup lang="ts">
import type Property from '@/types/property.interface'

defineProps<{
  property: Property
}>()
</script>

<template>
  <div v-reveal class="card">
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
.card:hover {
  transform: scale(1.01);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

button {
  isolation: isolate;
}

.btn-content {
  position: relative;
  z-index: 1;
}
</style>
