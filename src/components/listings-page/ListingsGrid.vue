<script setup lang="ts">
import PropertyCard from '@/components/shared/PropertyCard.vue'
import { properties } from '@/mock/properties'
</script>

<template>
  <section class="container py-5">
    <h1>Listings</h1>
    <p>Listing cards go here</p>

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
