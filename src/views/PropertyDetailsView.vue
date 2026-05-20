<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { properties } from '@/mock/properties'

const route = useRoute()

const property = computed(() => {
  const id = Number(route.params.id)

  return properties.find((p) => p.id === id)
})
</script>

<template>
  <div class="container py-5">
    <div v-if="property">
      <div class="row g-5">
        <!-- Main content -->
        <div class="col-lg-8">
          <img
            :src="property.image.replace('320x240', '1024x576')"
            :alt="property.title"
            class="img-fluid rounded shadow-sm mb-4 w-100"
          />

          <h1 class="mb-3">{{ property.title }}</h1>

          <p class="text-muted fs-5">{{ property.location }}</p>

          <h2 class="text-primary mb-4">${{ property.price.toLocaleString() }}</h2>

          <div class="d-flex flex-wrap gap-3 mb-4">
            <span class="badge bg-light text-dark p-2"> {{ property.bedrooms }} Bedrooms </span>
            <span class="badge bg-light text-dark p-2"> {{ property.area }} m² </span>
            <span class="badge bg-light text-dark p-2 text-capitalize">
              {{ property.type }}
            </span>
          </div>

          <h3>Description</h3>
          <p class="lead">{{ property.description }}</p>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <h4 class="mb-4">Request Information</h4>

              <form>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Your Name" />
                </div>

                <div class="mb-3">
                  <input type="email" class="form-control" placeholder="Email Address" />
                </div>

                <div class="mb-3">
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="I'm interested in this property."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  v-ripple="
                    'color-mix(in oklab, var(--bs-blue) 75%, var(--bs-white) 15%, transparent)'
                  "
                  class="btn btn-primary w-100"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-5">
      <i class="bi bi-house-x fs-1 text-muted"></i>
      <h1>Property Not Found</h1>
      <p class="text-muted">The property you are looking for does not exist.</p>
    </div>
  </div>
</template>
