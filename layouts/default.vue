<template>
  <div class="flex flex-col h-full">
    <header>
      header
    </header>
    <div class="grow">
      <div class="container">
        <slot />
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
