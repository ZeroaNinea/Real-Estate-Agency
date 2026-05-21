<template>
  <section class="contact-header">
    <div class="overlay"></div>
    <div class="container">
      <h1 class="title">Contact DreamHome Reality</h1>

      <p class="subtitle">We'd love to help you find your perfect property.</p>
    </div>
  </section>
</template>

<style scoped>
.contact-header {
  position: relative;
  padding: 120px 0 60px;

  background: url('https://static.photos/estate/1200x630/187.webp') center/cover no-repeat;

  color: var(--bs-white);
}

.container {
  position: relative;
  z-index: 1;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  max-width: 600px;
  color: color-mix(in lch, var(--bs-white) 80%, transparent);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    color-mix(in lch, var(--bs-gray-900) 70%, transparent),
    color-mix(in lch, var(--bs-gray-900) 75%, transparent),
    color-mix(in lch, var(--bs-gray-900) 75%, transparent),
    color-mix(in lch, var(--bs-gray-900) 70%, transparent)
  );

  background-size: 200% 200%;
  animation: moveGradient 20s ease infinite;
}

@keyframes moveGradient {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 200% 50%;
  }
}
</style>
