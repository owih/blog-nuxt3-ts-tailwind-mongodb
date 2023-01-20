<template>
  <nav
    :class="[$style.root, {[$style.open]: isMenuOpen}]"
    class="h-full flex justify-center lg:justify-start items-center md:container"
  >
    <ul class="flex flex-col justify-end">
      <li v-for="link in props.links" :key="link.title" ref="linkWraps" :class="$style.linkWrap">
        <nuxt-link
          class="link text-3xl sm:text-4xl lg:text-7xl text-light px-2 py-3 block"
          :to="link.url"
        >
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
  links: {
    type: Object,
    require: true,
    default: null
  },
  isMenuOpen: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})

const linkWraps = reactive<HTMLUListElement[]>([])

const setRandomTransition = ():void => {
  linkWraps.forEach((item, idx):void => {
    item.style.transitionDuration = `${0.4 + idx / 10 * 3}s`
  })
}

onMounted(setRandomTransition)
</script>

<style module lang="scss">
.root {
  .linkWrap {
    opacity: 0;
    transform: translateX(-300%);
  }
  &.open {
    .linkWrap {
      transition-property: transform;
      transition-delay: .2s;
      transition-timing-function: ease;
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
