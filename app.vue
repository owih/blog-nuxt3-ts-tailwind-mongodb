<template>
  <div :class="{dark: darkMode}">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const darkMode = ref(false)
</script>
