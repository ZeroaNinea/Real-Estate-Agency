<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const location = ref('')
const type = ref('')

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
  <section class="hero">
    <div class="overlay" />

    <div class="content">
      <h1 class="title">Find Your Dream Home</h1>
      <p class="subtitle">Browse properties in your area</p>

      <div class="search-bar d-flex gap-2 justify-content-center">
        <input v-model="location" class="form-control" placeholder="Location" />

        <select v-model="type" class="form-select">
          <option value="">Any Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
        </select>

        <button @click="search" class="btn btn-primary">Search</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* background: linear-gradient(
    100deg,
    color-mix(in lch, var(--bs-green) 90%, transparent),
    color-mix(in lch, var(--bs-blue) 90%, transparent),
    color-mix(in lch, var(--bs-indigo) 90%, transparent),
    color-mix(in lch, var(--bs-purple) 90%, transparent),
    color-mix(in lch, var(--bs-gray-600) 90%, transparent),
    color-mix(in lch, var(--bs-purple) 90%, transparent),
    color-mix(in lch, var(--bs-indigo) 90%, transparent),
    color-mix(in lch, var(--bs-blue) 90%, transparent),
    color-mix(in lch, var(--bs-green) 90%, transparent)
  ); */
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://static.photos/estate/200x200/20.webp') center/cover no-repeat;
  color: var(--bs-white);

  /* background-size: 200% 200%; */
  /* animation: moveGradient 20s ease infinite; */
}

@keyframes moveGradient {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 200% 50%;
  }
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}

.content {
  position: relative;
  max-width: 700px;
  z-index: 1;
}

.title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.subtitle {
  color: var(--bs-gray-200);
  margin-bottom: 2rem;
}

.search-bar {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.search-bar input,
.search-bar select {
  padding: 0.5rem;
}

.search-bar button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
