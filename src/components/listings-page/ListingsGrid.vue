<script setup lang="ts">
import PropertyCard from '@/components/shared/PropertyCard.vue'
import type Property from '@/types/property.interface'

defineProps<{
  properties: Property[]
}>()
</script>

<template>
  <section class="container py-5">
    <h2>Property Listings</h2>
    <p class="text-muted">We have {{ properties.length }} properties available</p>

    <div v-if="properties.length > 0" class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="(property, index) in properties" :key="property.id">
        <div
          v-reveal="{
            direction: index === 0 ? 'left' : index === properties.length - 1 ? 'right' : 'bottom',
            delay: index * 100,
          }"
        >
          <PropertyCard :property="property" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>X_X No properties found...</p>
    </div>
  </section>
</template>
