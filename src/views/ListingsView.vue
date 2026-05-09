<script setup lang="ts">
import ListingsTitle from '@/components/listings-page/ListingsTitle.vue'
import ListingsFilters from '@/components/listings-page/ListingsFilters.vue'
import ListingsGrid from '@/components/listings-page/ListingsGrid.vue'

import { properties } from '@/mock/properties'
</script>

<template>
  <ListingsTitle />
  <ListingsFilters />
  <ListingsGrid :properties="properties" />
</template>

<style scoped></style>
