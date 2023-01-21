<template>
  <div>
    <div
      v-if="skillsState.getSkills.length"
      class="grid md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6"
    >
      <div
        v-for="skill in skillsState.getSkills"
        :key="skill.id"
      >
        <SkillsPanelItem :skill="skill" />
      </div>
    </div>
    <div v-else>
      Sorry, cant load :(
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useSkillsStore } from '~/stores/useSkillsStore'

const skillsState = useSkillsStore()
skillsState.fetchSkillsToStore()

</script>

<style scoped>
</style>
