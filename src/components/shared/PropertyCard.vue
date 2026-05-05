<script setup lang="ts">
import type Property from '@/types/property.interface'

defineProps<{
  property: Property
}>()
</script>

<template>
  <div class="card h-100">
    <img class="card-img-top" :src="property.image" :alt="property.title" />

    <div class="card-body">
      <h5 class="card-title">{{ property.title }}</h5>

      <h6 class="card-subtitle mb-2 text-muted">{{ property.location }} / ${{ property.price }}</h6>

      <p class="card-text">
        {{ property.description }}
      </p>

      <button class="btn btn-primary">View Details</button>
    </div>
  </div>
</template>
