<template>
  <section class="cta-section text-center text-white">
    <div class="container">
      <h2 class="cta-title mb-3">Find Your Perfect Home Today</h2>

      <p class="cta-subtitle mb-4">
        Browse our listings or get in touch with our team for personalized help
      </p>

      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <RouterLink to="/listings" class="btn btn-light"> Browse Properties </RouterLink>

        <RouterLink to="/contact" class="btn btn-outline-light"> Contact Us </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 80px 0;

  background: linear-gradient(135deg, var(--bs-primary), var(--bs-indigo));
}

.cta-title {
  font-size: 2rem;
  font-weight: 600;
}

.cta-subtitle {
  max-width: 600px;
  margin: 0 auto;
  color: color-mix(in lch, var(--bs-white) 85%, transparent);
}
</style>
