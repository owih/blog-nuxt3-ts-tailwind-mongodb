<template>
  <div class="grid grid-cols-4 gap-6" :class="$style.root">
    <div
      v-for="(item, idx) in getPortfolio"
      :key="item.id"
      :class="[$style.item, {'row-start-1 row-end-4 col-start-3 col-end-5': idx === 2}]"
    >
      <PortfolioPanelPreviewItem
        :preview="item.preview"
        :technologies="item.tecnology"
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '~/stores/usePortfolioStore'

const portfolioState = usePortfolioStore()
portfolioState.fetchPortfolioToStore()
const { getPortfolio } = storeToRefs(portfolioState)
</script>

<style module lang="scss">
.root {
  .item {
    min-height: 260px;
  }
}
</style>
