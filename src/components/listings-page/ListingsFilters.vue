<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { propertyTypes } from '@/types/property.interface'

const router = useRouter()

const location = ref('')
const type = ref('')

const bedrooms = ref('')
const sort = ref('')

const search = () => {
  router.push({
    path: '/listings',
    query: {
      location: location.value,
      type: type.value,
    },
  })
}
</script>

<template>
  <section class="filters-section">
    <div class="container">
      <div class="filters-wrapper">
        <div class="row g-3 align-items-center">
          <div class="col-lg">
            <input v-model="location" class="form-control" placeholder="Location" />
          </div>

          <div class="col-lg">
            <select v-model="type" class="form-select">
              <option value="">Any Type</option>
              <option v-for="type in propertyTypes" v-bind:key="type" :value="type">
                {{ type }}
              </option>
            </select>
          </div>

          <div class="col-lg">
            <select v-model="bedrooms" class="form-select">
              <option value="">Bedrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div class="col-lg">
            <select v-model="sort" class="form-select">
              <option value="">Sort By</option>
              <option value="newest">Newest</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <div class="col-auto">
            <button
              @click="search"
              class="btn btn-primary px-4"
              v-ripple="'color-mix(in oklab, var(--bs-blue) 75%, var(--bs-white) 15%, transparent)'"
            >
              <span class="btn-content"> Search </span>
            </button>
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
