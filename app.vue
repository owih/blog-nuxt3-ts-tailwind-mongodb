<template>
  <div class="h-full wrapper">
    <NuxtLayout>
      <NuxtLoadingIndicator :throttle="20" :height="6" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
</script>
