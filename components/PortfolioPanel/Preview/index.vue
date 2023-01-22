<template>
  <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-6" :class="$style.root">
    <div
      v-for="(item, idx) in getPortfolioList"
      :key="item.id"
      :class="[$style.item, {'xl:row-start-1 xl:row-end-3 xl:col-start-3 xl:col-end-5': idx === 2}]"
    >
      <PortfolioPanelPreviewItem
        :id="item.id"
        :title="item.title"
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
portfolioState.fetchPortfolioListToStore()
const { getPortfolioList } = storeToRefs(portfolioState)
</script>

<style module lang="scss">
.root {
  .item {
    min-height: 260px;
  }
}
</style>
