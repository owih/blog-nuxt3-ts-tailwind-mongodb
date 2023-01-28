<template>
  <div class="container">
    <section>
      <PortfolioPanelMain :portfolioData="portfolioStore.getPortfolioPerId.value" />
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const portfolioStore = usePortfolioStore()
const portfolio = await getPortfolioPerIdFromApi(Number(route.params.id))
portfolioStore.setPortfolioPerIdToStore(portfolio)

const animationStore = useAnimationStore()

onMounted(() => {
  animationStore.setAnimation('portfolioId')
})
</script>
