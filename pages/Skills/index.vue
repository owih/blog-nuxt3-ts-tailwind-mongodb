<template>
  <div class="container">
    <div>
      <h1 class="page-title inline-block mr-3">
        Skills
      </h1>
      <router-link :to="useDefaultLinks.about.url" class="link">
        About
      </router-link>
    </div>
    <section>
      <SkillsPanel />
    </section>
  </div>
</template>

<script setup lang="ts">
</script>
