<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Estate</RouterLink>

      <button
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
              class="nav-link rounded-pill"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-ripple="'color-mix(in oklab, var(--bs-blue) 20%, var(--bs-gray) 45%, transparent)'"
              to="/listings"
              class="nav-link rounded-pill"
              >Listings</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-ripple="'color-mix(in oklab, var(--bs-blue) 20%, var(--bs-gray) 45%, transparent)'"
              to="/about"
              class="nav-link rounded-pill"
              >About</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-ripple="'color-mix(in oklab, var(--bs-blue) 20%, var(--bs-gray) 45%, transparent)'"
              to="/contact"
              class="nav-link rounded-pill"
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
</style>
