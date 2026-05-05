<script setup lang="ts">
import PropertyCard from '@/components/shared/PropertyCard.vue'
import type Property from '@/types/property.interface'
import { useRouter } from 'vue-router'

const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Apartment',
    description: 'Beautiful apartment in the city center.',
    price: 120000,
    image: 'https://static.photos/estate/320x240/1.webp',
    location: 'Yerevan',
    type: 'apartment',
    bedrooms: 2,
    area: 85,
  },
  {
    id: 2,
    title: 'Luxury House',
    description: 'Spacious house with a garden.',
    price: 350000,
    image: 'https://static.photos/estate/320x240/2.webp',
    location: 'Dilijan',
    type: 'house',
    bedrooms: 4,
    area: 200,
  },
  {
    id: 3,
    title: 'Cozy Studio',
    description: 'Perfect for one person.',
    price: 60000,
    image: 'https://static.photos/estate/320x240/3.webp',
    location: 'Gyumri',
    type: 'studio',
    bedrooms: 1,
    area: 40,
  },
]

const router = useRouter()

function toListings() {
  setTimeout(() => router.push('/listings'), 300)
}
</script>

<template>
  <section class="container py-5">
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
        v-ripple="'color-mix(in oklab, var(--bs-blue) 75%, var(--bs-white) 15%, transparent)'"
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
