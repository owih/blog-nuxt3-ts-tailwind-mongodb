<template>
  <a :href="url" class="social-link" target="_blank">
    <div class="hidden lg:block">
      <Icon :name="props.icon" size="100" />
    </div>
    <div class="lg:hidden">
      <Icon :name="props.icon" size="60" />
    </div>
  </a>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
  icon: {
    type: String as PropType<string>,
    required: true
  },
  url: {
    type: String as PropType<string>,
    required: true
  }
})
</script>

<style scoped>
</style>
