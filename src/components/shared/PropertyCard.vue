<script setup lang="ts">
import type Property from '@/types/property.interface'

defineProps<{
  property: Property
}>()
</script>

<template>
  <div class="card property-card h-100">
    <div class="image-wrapper">
      <img class="card-img-top" :src="property.image" :alt="property.title" />

      <div class="image-overlay"></div>

      <div class="price-badge">${{ property.price.toLocaleString() }}</div>
    </div>

    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ property.title }}</h5>

      <p class="card-location">
        {{ property.location }}
      </p>

      <div class="property-meta">
        <span>{{ property.bedrooms }} beds</span>
        <span>•</span>
        <span>{{ property.area }} m²</span>
        <span>•</span>
        <span>{{ property.type }}</span>
      </div>

      <p class="card-text flex-grow-1">
        {{ property.description }}
      </p>

      <button
        v-ripple="'color-mix(in oklab, var(--bs-blue) 75%, var(--bs-white) 15%, transparent)'"
        class="btn btn-primary mt-auto"
      >
        <span class="btn-content">View Details</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.property-card {
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.property-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Image. */
.image-wrapper {
  position: relative;
  overflow: hidden;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* Zoom image. */
.property-card:hover .card-img-top {
  transform: scale(1.05);
}

/* Gradient overlay */
.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
}

/* Price badge. */
.price-badge {
  position: absolute;
  bottom: 10px;
  left: 10px;

  background: rgba(0, 0, 0, 0.7);
  color: var(--bs-white);

  padding: 4px 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Text. */
.card-title {
  margin-bottom: 0.3rem;
}

.card-location {
  color: var(--bs-gray-600);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.property-meta {
  font-size: 0.8rem;
  color: var(--bs-gray-500);
  margin-bottom: 0.75rem;

  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

/* Button fix. */
button {
  isolation: isolate;
}

.btn-content {
  position: relative;
  z-index: 1;
}
</style>
