<template>
  <div :class="{dark: darkMode}" class="h-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const darkMode = ref(false)
</script>
