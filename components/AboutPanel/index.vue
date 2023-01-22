<template>
  <div>
    <div class="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
      <div :class="{ 'mb-10 lg:mb-0 lg:w-7/12': props.image }">
        <h2>
          {{ props.title }}
        </h2>
        <p v-for="(item, index) in props.text" :key="index" class="text-lg">
          {{ item }}
        </p>
      </div>
      <div v-if="props.image" class="max-w-xs lg:ml-20">
        <img :src="props.image" alt="avatar" class="w-full rounded-full">
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
  title: {
    type: String as PropType<string>,
    required: true
  },
  text: {
    type: Array as PropType<String[]>,
    required: true
  },
  image: {
    type: String as PropType<string|null>,
    required: false,
    default: null
  }
})
</script>

<style scoped>
</style>
