<script setup lang="ts">
import TeamMemberCard from '@/components/shared/TeamMemberCard.vue'
import teamMembers from '@/mock/team-members'
</script>

<template>
  <section class="team-members py-5">
    <!-- Section Heading -->
    <div class="text-center mb-5">
      <span class="badge bg-primary-subtle text-primary px-3 py-2 mb-3"> Our Team </span>

      <h2 class="display-6 fw-bold mb-3">Meet the Professionals Behind DreamHome Realty</h2>

      <p class="lead text-muted mx-auto section-description">
        Our fictional team combines years of experience in real estate, marketing, and customer
        service to help clients find their ideal homes.
      </p>
    </div>

    <!-- Team Grid -->
    <div class="row g-4">
      <div v-for="(member, index) in teamMembers" :key="member.id" class="col-12 col-md-6 col-lg-4">
        <div
          v-reveal="{
            direction: index === 0 ? 'left' : index === teamMembers.length - 1 ? 'right' : 'bottom',
            delay: index * 100,
          }"
        >
          <TeamMemberCard :member="member" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-description {
  max-width: 720px;
}
</style>
