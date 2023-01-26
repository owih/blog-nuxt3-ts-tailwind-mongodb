<template>
  <h1 ref="welcomeTitle" class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
    <span class="opacity-0">
      Hello! I`m Dmitriy, Frontend developer
    </span>
  </h1>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
  titleData: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const welcomeTitle = ref<HTMLDivElement>()
const currentWord = ref<string>('')
const wordCount = ref<number>(0)
const letterCount = ref<number>(0)

// TODO: optimization with <for> construction instead <function> usage
const switchLetter = ():void => {
  if (!welcomeTitle.value) { return }
  currentWord.value += props.titleData[wordCount.value][letterCount.value]
  welcomeTitle.value.textContent = currentWord.value

  if (letterCount.value === props.titleData[wordCount.value].length - 1) {
    letterCount.value = 0
    if (wordCount.value === props.titleData.length - 1) {
      wordCount.value = 0
    } else {
      wordCount.value += 1
    }
    setTimeout(removeLetter, 4000)
    return
  } else {
    letterCount.value += 1
  }

  setTimeout(switchLetter, 60)
}

const removeLetter = () => {
  if (!welcomeTitle.value || !welcomeTitle.value.textContent) { return }
  currentWord.value = currentWord.value.slice(0, -1)
  welcomeTitle.value.textContent = currentWord.value
  currentWord.value.length ? setTimeout(removeLetter, 30) : setTimeout(switchLetter, 500)
}

onMounted(switchLetter)
</script>

<style scoped>
</style>
