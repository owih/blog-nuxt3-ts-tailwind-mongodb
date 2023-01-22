<template>
  <div class="container">
    <section>
      <PortfolioPanelMain :portfolioData="portfolioState.getPortfolioPerId" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '~/stores/usePortfolioStore'

const route = useRoute()

const portfolioState = usePortfolioStore()
portfolioState.fetchPortfolioPerIdToStore(+route.params.id)
</script>
