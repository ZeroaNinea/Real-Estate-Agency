<script setup lang="ts">
import type Property from '@/types/property.interface'

const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Apartment',
    description: 'Beautiful apartment in the city center.',
    price: 120000,
    image: 'https://static.photos/estate/400x300/1.webp',
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
    image: 'https://static.photos/estate/400x300/2.webp',
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
    image: 'https://static.photos/estate/400x300/3.webp',
    location: 'Gyumri',
    type: 'studio',
    bedrooms: 1,
    area: 40,
  },
]
</script>

<template>
  <section>
    <div class="row g-4">
      <div class="col-md-4" v-for="property in properties" :key="property.id">
        <PropertyCard :property="property" />
      </div>
    </div>
  </section>
</template>
