<template>
  <NuxtLink
    :to="useDefaultLinks.portfolio.url + '/' + id"
    class="w-full flex items-center h-full rounded-sm bg-gray-100 dark:bg-gray-300"
    :class="$style.root"
  >
    <img
      :src="`/works/${ preview }`"
      :alt="preview.split('.')[0]"
      class="w-full h-full rounded-sm shadow-thinDark dark:shadow-thinLight"
      :class="$style.image"
    >
  </NuxtLink>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
  id: {
    type: Number as PropType<number>,
    required: true
  },
  preview: {
    type: String as PropType<string>,
    required: true
  }
})
</script>

<style module lang="scss">
.root {
  .preview {
    display: none;
  }
  @media (min-width: 992px) {
    .image {
      transform: translateY(0);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      z-index: 1;
    }
    &:hover {
      .image {
        transform: translate(8px, 8px);
      }
      .preview {
        transition: opacity 0.2s ease;
      }
    }
  }
}
</style>
