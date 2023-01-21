<template>
  <div class="container">
    <div>
      <h1 class="page-title inline-block mr-3">
        Portfolio
      </h1>
      <router-link :to="useDefaultLinks.cats.url" class="link">
        Cats?
      </router-link>
    </div>
    <section>
      <PortfolioPanelPreview />
    </section>
  </div>
</template>

<script setup lang="ts">
</script>
