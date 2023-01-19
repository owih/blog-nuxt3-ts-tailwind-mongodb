<template>
  <img
    :src="props.icon"
    :alt="props.icon.split('/').splice(-1)"
    class="max-w-full w-full h-full"
  >
</template>

<script setup lang='ts'>
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
</style>
