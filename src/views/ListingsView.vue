<script setup lang="ts">
import { computed, ref } from 'vue'

import ListingsTitle from '@/components/listings-page/ListingsTitle.vue'
import ListingsFilters from '@/components/listings-page/ListingsFilters.vue'
import ListingsGrid from '@/components/listings-page/ListingsGrid.vue'
import ListingsPagination from '@/components/listings-page/ListingsPagination.vue'

import { properties } from '@/mock/properties'

const currentPage = ref(1)
const itemsPerPage = 6

const paginatedProperties = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return properties.slice(start, start + itemsPerPage)
})
</script>

<template>
  <ListingsTitle />
  <ListingsFilters />
  <ListingsGrid :properties="paginatedProperties" />
  <ListingsPagination
    :pages="Math.ceil(properties.length / itemsPerPage)"
    @change-page="currentPage = $event"
  />
</template>

<style scoped></style>
