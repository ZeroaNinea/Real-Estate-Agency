<script setup lang="ts">
import AboutTitle from '@/components/about-page/AboutTitle.vue'
import AboutCompanySection from '@/components/about-page/AboutComponySection.vue'
import TeamMembersSection from '@/components/about-page/TeamMembersSection.vue'
</script>

<template>
  <AboutTitle />
  <div class="container py-5">
    <AboutCompanySection />
    <TeamMembersSection />
  </div>
</template>
