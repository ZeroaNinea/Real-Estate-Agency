<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const location = ref('')
const type = ref('')

const search = () => {
  setTimeout(() => {
    router.push({
      path: '/listings',
      query: {
        location: location.value,
        type: type.value,
      },
    })
  }, 300)
}
</script>

<template>
  <div class="listings-filters">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="input-group">
            <input v-model="location" class="form-control" placeholder="Location" />

            <select v-model="type" class="form-select">
              <option value="">Any Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>

            <button
              @click="search"
              class="btn btn-primary"
              v-ripple="'color-mix(in oklab, var(--bs-blue) 75%, var(--bs-white) 15%, transparent)'"
            >
              <span class="btn-content">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
