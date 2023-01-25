<template>
  <div class="container">
    <div class="title-with-link">
      <h1 class="page-title inline-block mr-3 mb-0">
        {{ useDefaultLinks.skills.title }}
      </h1>
      <NuxtLink :to="useDefaultLinks.about.url" class="link">
        {{ useDefaultLinks.about.title }}
      </NuxtLink>
    </div>
    <section>
      <SkillsPanel />
    </section>
  </div>
</template>

<script setup lang="ts">
const { setSkillsToStore } = useSkillsStore()
const skills = await getSkillsFromApi()
setSkillsToStore(skills)
</script>
