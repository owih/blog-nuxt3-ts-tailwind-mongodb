<template>
  <label>
    <span class="block mb-2">
      {{ props.label }}
    </span>
    <textarea
      class="textarea"
      type="text"
      :value="modelValue"
      @input="onUpdateTextarea"
    />
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
  modelValue: {
    type: String as PropType<string>,
    required: false,
    default: ''
  }
})
const emits = defineEmits<{(e: 'update:modelValue', value: string):void}>()

const onUpdateTextarea = (event:Event):void => {
  const target = event.target as HTMLTextAreaElement
  emits('update:modelValue', target.value)
}
</script>

<style scoped>
</style>
