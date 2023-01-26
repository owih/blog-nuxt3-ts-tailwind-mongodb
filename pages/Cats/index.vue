<template>
  <div class="container">
    <div class="title-with-link">
      <h1 class="page-title inline-block mr-3 mb-0">
        {{ useDefaultLinks.cats.title }}
      </h1>
      <NuxtLink :to="useDefaultLinks.home.url" class="link">
        {{ useDefaultLinks.home.title }}
      </NuxtLink>
    </div>
    <section>
      <div class="max-h-96 relative">
        <CatsSwiper />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: useDefaultLinks.cats.pageTitle,
  meta: [
    { name: 'description', content: useDefaultLinks.cats.description }
  ]
})
</script>
