<template>
  <div class="flex flex-col h-full">
    <HeaderVue>
      <HeaderVueNavigation :links="links" />
    </HeaderVue>
    <div class="grow">
      <slot />
    </div>
    <FooterVue />
  </div>
</template>

<script setup lang="ts">
const links = useDefaultLinks
</script>

<style scoped>
</style>
