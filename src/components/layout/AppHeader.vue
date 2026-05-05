<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
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
</style>
