<script setup lang="ts">
const features = [
  {
    title: 'Verified Listings',
    description: 'All properties are carefully checked for accuracy.',
    icon: 'bi-house-door-fill text-secondary',
  },
  {
    title: 'Local Expertise',
    description: 'We know the market and help you choose wisely.',
    icon: 'bi-graph-up-arrow text-success',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees or unexpected costs.',
    icon: 'bi-currency-exchange text-warning',
  },
  {
    title: 'Fast Support',
    description: 'Quick responses when you need help.',
    icon: 'bi-person-hearts text-danger',
  },
]
</script>

<template>
  <section class="bg-light py-5">
    <div class="container">
      <div class="section-header mb-5 text-center">
        <h2 class="section-title">Why Choose Us</h2>
        <p class="section-subtitle">We make finding your next home simple and reliable</p>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-lg-3" v-for="(item, index) in features" :key="index">
          <div
            class="feature-card text-center h-100"
            v-reveal="{ direction: 'bottom', delay: index * 100 }"
          >
            <div class="icon mb-3">
              <i :class="['bi', item.icon]"></i>
            </div>

            <h5>{{ item.title }}</h5>
            <p class="text-muted">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bi {
  font-size: 2.8rem;
}
</style>
