<template>
  <div :class="$style.root">
    <div class="text-3xl mb-3">
      {{ props.skill.name }}
    </div>
    <div
      v-for="subskill in props.skill.subskills"
      :key="subskill.id"
      class="mb-1 last:mb-0 text-sm md:text-md lg:text-lg"
      :class="{[$style.pinned]: subskill.pinned}"
    >
      <span>
        {{ subskill.name }} {{ subskill.basic ? ' (basic)' : '' }}
      </span>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'
import Skill from '~/types/skill'

const props = defineProps({
  skill: {
    type: Object as PropType<Skill[]>,
    required: true
  }
})
</script>

<style module lang="scss">
.root {
  .pinned span {
    position: relative;
    display: inline-block;
    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      display: block;
      width: 100%;
      height: 2px;
      background-color: #5386E4;
      opacity: 0.2;
    }
  }
}
</style>
