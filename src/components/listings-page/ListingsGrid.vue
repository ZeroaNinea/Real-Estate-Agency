<script setup lang="ts">
import PropertyCard from '@/components/shared/PropertyCard.vue'
import { properties } from '@/mock/properties'
</script>

<template>
  <section class="container py-5">
    <h2>Property Listings</h2>
    <p class="text-muted">We have {{ properties.length }} properties available</p>

    <div v-if="properties.length > 0" class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="property in properties" :key="property.id">
        <PropertyCard :property="property" />
      </div>
    </div>
    <div v-else>
      <p>X_X No properties found...</p>
    </div>
  </section>
</template>
