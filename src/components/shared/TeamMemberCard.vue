<script setup lang="ts">
import type TeamMember from '@/types/team-members.interface'

defineProps<{
  member: TeamMember
}>()
</script>

<template>
  <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden team-card">
    <!-- Photo -->
    <img :src="member.image" :alt="member.name" class="card-img-top member-image" />

    <!-- Content -->
    <div class="card-body d-flex flex-column p-4">
      <h3 class="h5 fw-semibold mb-1">
        {{ member.name }}
      </h3>

      <p class="text-primary fw-medium mb-3">
        {{ member.role }}
      </p>

      <p class="text-muted mb-0 flex-grow-1">
        {{ member.bio }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.team-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.team-card:hover {
  box-shadow: var(--bs-box-shadow-lg) !important;
  transform: translateY(-4px);
}

.member-image {
  height: 320px;
  object-fit: cover;
}
</style>
