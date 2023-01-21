<template>
  <div>
    {{ props.preview }}
    {{ props.technologies }}
  </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'
import Tecnology from '~/types/tecnology'

const props = defineProps({
  preview: {
    type: String as PropType<string>,
    required: true
  },
  technologies: {
    type: Array as PropType<Tecnology[]>,
    required: true
  }
})
</script>

<style scoped>
</style>
