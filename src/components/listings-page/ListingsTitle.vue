<template>
  <section class="listings-header">
    <div class="container">
      <h1 class="title">Explore Properties</h1>

      <p class="subtitle">Browse apartments, houses, and villas in different locations</p>
    </div>
  </section>
</template>

<style scoped>
.listings-header {
  padding: 120px 0 60px;

  background:
    linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url('https://static.photos/estate/1200x630/12.webp') center/cover no-repeat;

  color: var(--bs-white);
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  max-width: 600px;
  color: color-mix(in lch, var(--bs-white) 80%, transparent);
}
</style>
