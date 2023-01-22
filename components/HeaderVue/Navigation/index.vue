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
          @click="onLinkClick"
        >
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'
import { useMenuStore } from '~/stores/useMenuStore'

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

const menuState = useMenuStore()
const linkWraps = ref<HTMLUListElement[]>([])

const setRandomTransition = ():void => {
  const isDesktop = window.matchMedia('(min-width:992px)').matches
  linkWraps.value.forEach((item, idx):void => {
    item.style.transitionDuration = `${(isDesktop ? 0.3 : 0.2) + idx / 10 * 3}s`
  })
}
const onLinkClick = () => {
  menuState.toggleOpen(false)
}

onMounted(setRandomTransition)
</script>

<style module lang="scss">
.root {
  .linkWrap {
    transform: translateX(-300%);
  }
  &.open {
    .linkWrap {
      transition-property: transform;
      transition-delay: .1s;
      transition-timing-function: ease;
      transform: translateX(0);
    }
  }
}
</style>
