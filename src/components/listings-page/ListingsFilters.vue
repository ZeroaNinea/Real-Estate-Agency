<script setup lang="ts"></script>

<template>
  <div class="listings-filters">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search Properties" />
            <div class="input-group-append">
              <button
                class="btn btn-primary"
                v-ripple="
                  'color-mix(in oklab, var(--bs-blue) 75%, var(--bs-white) 15%, transparent)'
                "
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
