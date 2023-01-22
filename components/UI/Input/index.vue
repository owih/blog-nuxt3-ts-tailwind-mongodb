<template>
  <label>
    <span class="block mb-2">
      {{ props.label }}
      <span v-if="required" class="text-primary">
        *
      </span>
    </span>
    <input
      class="input"
      :required="required"
      :value="modelValue"
      type="text"
      @input="onUpdateInput"
    >
  </label>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
  label: {
    type: String as PropType<string>,
    required: false,
    default: ''
  },
  required: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false
  },
  modelValue: {
    type: String as PropType<string>,
    required: false,
    default: ''
  }
})
const emits = defineEmits<{(e: 'update:modelValue', value: string):void}>()

const onUpdateInput = (event:Event):void => {
  const target = event.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
</script>

<style scoped>
</style>
