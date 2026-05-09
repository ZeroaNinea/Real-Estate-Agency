<script setup lang="ts">
import { propertyTypes } from '@/types/property.interface'

defineProps<{
  location: string
  type: string
  bedrooms: string
  sort: string
}>()

const emit = defineEmits<{
  (e: 'update:location', value: string): void
  (e: 'update:type', value: string): void
  (e: 'update:bedrooms', value: string): void
  (e: 'update:sort', value: string): void
}>()
</script>

<template>
  <section class="filters-section">
    <div class="container">
      <div class="filters-wrapper">
        <div class="row g-3 align-items-center">
          <div class="col-lg">
            <input
              :value="location"
              @input="emit('update:location', ($event.target as HTMLInputElement).value)"
              class="form-control"
              placeholder="Location"
            />
          </div>

          <div class="col-lg">
            <select
              :value="type"
              @change="emit('update:type', ($event.target as HTMLSelectElement).value)"
              class="form-select"
            >
              <option value="">Any Type</option>
              <option
                v-for="propertyType in propertyTypes"
                :key="propertyType"
                :value="propertyType"
              >
                {{ propertyType }}
              </option>
            </select>
          </div>

          <div class="col-lg">
            <select
              :value="bedrooms"
              @change="emit('update:bedrooms', ($event.target as HTMLSelectElement).value)"
              class="form-select"
            >
              <option value="">Bedrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div class="col-lg">
            <select
              :value="sort"
              @change="emit('update:sort', ($event.target as HTMLSelectElement).value)"
              class="form-select"
            >
              <option value="">Sort By</option>
              <option value="newest">Newest</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.filters-section {
  margin-top: -40px;
  position: relative;
  z-index: 10;
}

.filters-wrapper {
  background: var(--bs-white);
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
}
</style>
