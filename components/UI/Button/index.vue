<template>
  <button
    :type="props.isSubmit ? 'submit' : ''"
    class="button"
    :class="{'button_disabled': props.isDisabled}"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
  text: {
    type: String as PropType<string>,
    required: true
  },
  isSubmit: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false
  },
  isDisabled: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false
  }
})
</script>

<style scoped>
</style>
