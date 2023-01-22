<template>
  <div class="grid grid-cols-2 grid-rows-2 gap-3">
    <div
      v-for="social in useSocialLinks"
      :key="social.url"
      class="w-32 h-32 lg:w-40 lg:h-40"
    >
      <SocialPanelItem :icon="social.icon" :url="social.url" />
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style scoped>
</style>
