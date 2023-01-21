<template>
  <div class="flex flex-col h-full">
    <HeaderVue />
    <main class="grow pt-3 pb-8">
      <slot />
    </main>
    <FooterVue />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
