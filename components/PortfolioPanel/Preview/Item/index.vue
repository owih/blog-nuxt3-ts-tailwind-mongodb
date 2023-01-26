<template>
  <NuxtLink
    :to="useDefaultLinks.portfolio.url + '/' + id"
    class="w-full flex items-center h-full rounded-xl bg-gray-100 dark:bg-gray-500"
    :class="$style.root"
  >
    <img
      :src="'/portfolio/' + preview"
      :alt="preview.split('.')[0]"
      class="w-full h-full rounded-xl shadow-thinDark dark:shadow-thinLight"
      :class="$style.image"
    >
    <div :class="$style.preview">
      {{ title }}
    </div>
  </NuxtLink>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'
import Tecnology from '~/types/tecnology'

const props = defineProps({
  id: {
    type: Number as PropType<number>,
    required: true
  },
  preview: {
    type: String as PropType<string>,
    required: true
  },
  title: {
    type: String as PropType<string>,
    required: true
  },
  technologies: {
    type: Array as PropType<Tecnology[]>,
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
    //.preview {
    //  display: block;
    //  position: absolute;
    //  font-weight: bold;
    //  top: 0;
    //  @apply p-3 text-3xl;
    //}
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
