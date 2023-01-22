<template>
  <div class="container">
    <div class="title-with-link">
      <h1 class="page-title inline-block mr-3 mb-0">
        {{ useDefaultLinks.portfolio.title }}
      </h1>
      <NuxtLink :to="useDefaultLinks.contact.url" class="link">
        {{ useDefaultLinks.contact.title }}
      </NuxtLink>
    </div>
    <section>
      <PortfolioPanelPreview />
    </section>
  </div>
</template>

<script setup lang="ts">
</script>
