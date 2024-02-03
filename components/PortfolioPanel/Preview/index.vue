<template>
  <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-6" :class="$style.root">
    <div
      v-for="(item, idx) in portfolioState.getSortedPortfolioList.value"
      :key="item.id"
      :class="[$style.item, {'xl:row-start-1 xl:row-end-3 xl:col-start-3 xl:col-end-5': idx === 2}]"
    >
      <PortfolioPanelPreviewItem
        :id="item.id"
        :preview="item.preview"
      />
    </div>
  </div>
</template>

<script setup lang='ts'>

const portfolioState = usePortfolioStore()
</script>

<style module lang="scss">
.root {
  .item {
    min-height: 260px;
  }
}
</style>
