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
      <CatsSwiper />
    </section>
  </div>
</template>

<script setup lang="ts">
</script>
