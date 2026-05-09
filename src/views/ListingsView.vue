<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import ListingsTitle from '@/components/listings-page/ListingsTitle.vue'
import ListingsFilters from '@/components/listings-page/ListingsFilters.vue'
import ListingsGrid from '@/components/listings-page/ListingsGrid.vue'
import ListingsPagination from '@/components/listings-page/ListingsPagination.vue'

import { properties } from '@/mock/properties'

const location = ref('')
const type = ref('')
const bedrooms = ref('')
const sort = ref('newest')

const currentPage = ref(1)
const itemsPerPage = 6

const filteredProperties = computed(() => {
  let result = [...properties]

  // Location filter.
  if (location.value.trim()) {
    const search = location.value.toLowerCase()
    result = result.filter((property) => property.location.toLowerCase().includes(search))
  }

  // Type filter.
  if (type.value) {
    result = result.filter((property) => property.type === type.value)
  }

  // Bedrooms filter.
  if (bedrooms.value) {
    const minBedrooms = Number(bedrooms.value)
    result = result.filter((property) => property.bedrooms >= minBedrooms)
  }

  // Sorting.
  switch (sort.value) {
    case 'low-high':
      result.sort((a, b) => a.price - b.price)
      break

    case 'high-low':
      result.sort((a, b) => b.price - a.price)
      break

    case 'newest':
    default:
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      break
  }

  return result
})

const paginatedProperties = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProperties.value.slice(start, start + itemsPerPage)
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredProperties.value.length / itemsPerPage)),
)

// Reset to page 1 whenever filters change.
watch([location, type, bedrooms, sort], () => {
  currentPage.value = 1
})
</script>

<template>
  <ListingsTitle />
  <ListingsFilters
    v-model:location="location"
    v-model:type="type"
    v-model:bedrooms="bedrooms"
    v-model:sort="sort"
  />

  <section class="mb-5">
    <ListingsGrid :properties="paginatedProperties" :propertyCount="filteredProperties.length" />
    <ListingsPagination
      :pages="totalPages"
      :currentPage="currentPage"
      @change-page="currentPage = $event"
    />
  </section>
</template>

<style scoped></style>
