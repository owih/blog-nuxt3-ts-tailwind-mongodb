<template>
  <div v-if="portfolioData && Object.keys(portfolioData).length">
    <div class="title-with-link">
      <h1 class="page-title inline-block mr-3 mb-0">
        {{ portfolioData.title }}
      </h1>
      <NuxtLink :to="useDefaultLinks.portfolio.url" class="link">
        Back to portfolio
      </NuxtLink>
    </div>
    <div class="mb-10 text-lg">
      <div class="mb-4 text-3xl">
        Info:
      </div>
      {{ portfolioData.info }}
    </div>
    <div v-if="portfolioData.tecnologys.length" class="mb-10">
      <div class="mb-4 text-3xl">
        Stack:
      </div>
      <div
        class="flex flex-row flex-wrap -mx-2 -my-1"
      >
        <div
          v-for="item in portfolioData.tecnologys"
          :key="item.tecnology.id"
          class="px-2 py-1 text-lg"
        >
          <div class="px-3 py-1 rounded-lg bg-dark dark:bg-light text-light dark:text-dark">
            {{ item.tecnology.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="mb-10">
      <div class="mb-4 text-3xl">
        Source:
      </div>
      <div v-if="portfolioData.linkWeb" class="text-lg">
        Web:
        <a :href="portfolioData.linkWeb" target="_blank" class="link">
          Go to web version
        </a>
      </div>
      <div class="text-lg">
        Github:
        <a :href="portfolioData.linkGit" target="_blank" class="link">
          Go to github repo
        </a>
      </div>
    </div>
    <div>
      <div class="mb-6 text-3xl">
        Preview:
      </div>
      <img
        :src="portfolioData.gif"
        :alt="portfolioData.gif.split('.')[0]"
        class="shadow-xl shadow-secondary rounded-md m-auto"
      >
    </div>
  </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'
import Portfolio from '~/types/portfolio'

const props = defineProps({
  portfolioData: {
    type: Object as PropType<Portfolio>,
    required: true
  }
})
</script>

<style scoped>
</style>
