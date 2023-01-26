<template>
  <div :class="[$style.root, {[$style.open]: props.isMenuOpen}]">
    <slot />
  </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
  isMenuOpen: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})
</script>

<style module lang="scss">
.root {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  z-index: 100;
  @apply bg-dark;
  &.open {
    pointer-events: auto;
    opacity: 1;
    @apply z-menu;
  }
}
</style>
