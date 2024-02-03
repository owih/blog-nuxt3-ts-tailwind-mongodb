<template>
  <div>
    <div
      v-if="getSortedSkills.length"
      class="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-10 gap-x-6"
    >
      <div
        v-for="skill in getSortedSkills"
        :key="skill.id"
        class="lg:justify-self-center"
      >
        <SkillsPanelItem :skill="skill" />
      </div>
    </div>
    <div v-if="getSkillsError">
      {{ getSkillsError }}
    </div>
    <div v-else-if="!getSortedSkills.length && !getSkillsError">
      List is empty for now :(
    </div>
  </div>
</template>

<script setup lang='ts'>

const { getSortedSkills, getSkillsError } = useSkillsStore()

</script>

<style scoped>
</style>
