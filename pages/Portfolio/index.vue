<template>
  <div class="container">
    <div class="title-with-link animation animation_line-up">
      <h1 class="page-title inline-block mr-3 mb-0">
        {{ useDefaultLinks.portfolio.title }}
      </h1>
      <NuxtLink :to="useDefaultLinks.contact.url" class="link">
        {{ useDefaultLinks.contact.title }}
      </NuxtLink>
    </div>
    <section class="animation animation_show">
      <PortfolioPanelPreview />
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: useDefaultLinks.portfolio.pageTitle,
  meta: [
    { name: 'description', content: useDefaultLinks.portfolio.description }
  ]
})

const { setPortfolioListToStore } = usePortfolioStore()
const portfolioList = await getPortfolioListFromApi()
setPortfolioListToStore(portfolioList)
</script>
