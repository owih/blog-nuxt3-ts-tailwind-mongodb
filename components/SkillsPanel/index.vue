<template>
  <div>
    <div
      v-if="getSkills.length"
      class="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-10 gap-x-6"
    >
      <div
        v-for="skill in getSkills"
        :key="skill.id"
      >
        <SkillsPanelItem :skill="skill" />
      </div>
    </div>
    <div v-if="getSkillsError">
      {{ getSkillsError }}
    </div>
    <div v-else-if="!getSkills.length && !getSkillsError">
      List is empty for now :(
    </div>
  </div>
</template>

<script setup lang='ts'>

const { getSkills, getSkillsError } = useSkillsStore()

</script>

<style scoped>
</style>
