<script setup lang="ts">
import PropertyCard from '@/components/shared/PropertyCard.vue'
import { useRouter } from 'vue-router'

import { properties } from '@/mock/properties'

const router = useRouter()

function toListings() {
  setTimeout(() => router.push('/listings'), 300)
}
</script>

<template>
  <section class="container">
    <div class="section-header mb-4">
      <h2 class="section-title">Featured Properties</h2>
      <p class="section-subtitle">Explore some of our best listings</p>
    </div>

    <div class="row g-4">
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

    <div class="text-center mt-4">
      <button
        v-ripple="'color-mix(in oklab, var(--bs-blue) 50%, var(--bs-white) 15%, transparent)'"
        @click="toListings"
        class="btn btn-outline-primary"
      >
        View All Properties
      </button>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
}
</style>
