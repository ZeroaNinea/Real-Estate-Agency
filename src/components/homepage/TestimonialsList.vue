<script setup lang="ts">
const testimonials = [
  {
    name: 'Anna M.',
    location: 'Yerevan',
    text: 'The process was smooth and quick. I found an apartment in just a few days.',
  },
  {
    name: 'David K.',
    location: 'Gyumri',
    text: 'Very professional service and clear communication throughout.',
  },
  {
    name: 'Mariam S.',
    location: 'Dilijan',
    text: 'I appreciated the transparency and the support I received.',
  },
]
</script>

<template>
  <section class="container py-5">
    <div class="section-header mb-5 text-center">
      <h2 class="section-title">What Our Clients Say</h2>
      <p class="section-subtitle">Real experiences from people who found their homes with us</p>
    </div>

    <div class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="(testimonial, index) in testimonials" :key="index">
        <div v-reveal="{ direction: 'bottom', delay: index * 100 }">
          <div class="testimonial-card h-100">
            <p class="testimonial-text">"{{ testimonial.text }}"</p>

            <div class="testimonial-user mt-3">
              <strong>{{ testimonial.name }}</strong>
              <div class="text-muted small">
                {{ testimonial.location }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-card {
  padding: 20px;
  border-radius: 12px;
  background: var(--bs-light);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.testimonial-text {
  font-style: italic;
  color: var(--bs-gray-700);
}
</style>
