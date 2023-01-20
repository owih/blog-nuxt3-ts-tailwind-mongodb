<template>
  <button :class="$style.root" @click="onClick">
    <span v-if="props.themeColor === 'dark'">
      <Icon
        name="line-md:sunny-outline-to-moon-alt-loop-transition"
        size="36"
      />
    </span>
    <span v-else>
      <Icon
        name="line-md:moon-alt-to-sunny-outline-loop-transition"
        size="36"
      />
    </span>
  </button>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
  themeColor: {
    type: String as PropType<string>,
    required: true
  }
})
const emits = defineEmits<{(e: 'switchTheme', value: Event): void}>()

const onClick = (e:Event):void => {
  emits('switchTheme', e)
}
</script>

<style module lang="scss">
.root {
  position: relative;

  @media (min-width: 992px) {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-100%, -50%);
      display: block;
      width: 0;
      height: 0;
      background-color: #FF3366;
      border-radius: 100%;
      opacity: 0.5;
      transition: height 0.2s ease, width 0.2s ease;
    }
    &:hover {
      &:before {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
