<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isSticky = ref(false)

const handleScroll = () => {
  isSticky.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div style="height: 56px"></div>
  <nav
    :class="[
      'navbar navbar-expand-lg navbar-light shadow-sm',
      isSticky ? 'navbar-sticky' : 'navbar-default',
    ]"
  >
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Estate</RouterLink>

      <button
        v-ripple="'color-mix(in lch, var(--bs-gray) 45%, transparent)'"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink
              v-ripple="'color-mix(in oklab, var(--bs-blue) 20%, var(--bs-gray) 45%, transparent)'"
              to="/"
              class="nav-link px-2"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-ripple="'color-mix(in oklab, var(--bs-blue) 20%, var(--bs-gray) 45%, transparent)'"
              to="/listings"
              class="nav-link px-2"
              >Listings</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-ripple="'color-mix(in oklab, var(--bs-blue) 20%, var(--bs-gray) 45%, transparent)'"
              to="/about"
              class="nav-link px-2"
              >About</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-ripple="'color-mix(in oklab, var(--bs-blue) 20%, var(--bs-gray) 45%, transparent)'"
              to="/contact"
              class="nav-link px-2"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  transition: background-color 0.2s ease-in-out;
}

.nav-link:hover {
  background-color: color-mix(in oklab, var(--bs-blue) 10%, var(--bs-white) 20%, transparent);
}

.navbar-nav {
  margin-top: 0.5rem;
}

@media (min-width: 992px) {
  .nav-link {
    border-radius: 20px;
  }

  .navbar-nav {
    margin: 0;
  }
}

.navbar {
  transition: all 0.3s ease;
  z-index: 1000;
}

.navbar-default {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: var(--bs-white);
}

.navbar-sticky {
  position: fixed;
  top: 0;
  width: 100%;

  backdrop-filter: blur(10px);
  background-color: color-mix(in lch, var(--bs-white) 95%, transparent);

  transform: translateY(0);
}

.navbar-sticky {
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
