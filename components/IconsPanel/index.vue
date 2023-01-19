<template>
  <nuxt-link
    :class="$style.root"
    :to="links.skills.url"
  >
    <div
      v-for="icon in props.icons"
      :key="icon"
      ref="iconsRef"
      :class="$style.item"
    >
      <IconsPanelIcon :icon="icon" />
    </div>
  </nuxt-link>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
  icons: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const links = useDefaultLinks
const iconsRef = reactive<HTMLDivElement[]>([])
const animationTypes: Array<string> = ['linear', 'ease', 'ease-in', 'ease-in-out', 'ease-out']
const minAnimationTime = 4
const maxAnimationTime = 10

const useRandomStylesOnIcons = ():void => {
  iconsRef.forEach((item) => {
    const randAnimationType = Math.floor(Math.random() * (animationTypes.length + 1))
    const randAnimationTime = Math.floor(Math.random() * (maxAnimationTime - minAnimationTime) + minAnimationTime)
    item.style.animationTimingFunction = animationTypes[randAnimationType]
    item.style.animationDuration = randAnimationTime + 's'
  })
}

onMounted(useRandomStylesOnIcons)
</script>

<style module lang="scss">
.root {
  display: block;
  position: relative;
  max-height: 460px;
  max-width: 460px;
  height: 100%;
  width: 100%;

  @media (min-width: 1200px) {
    max-height: 600px;
    max-width: 600px;
  }

  .item {
    position: absolute;
    width: 80px;
    height: 80px;
    animation-name: animation;
    animation-duration: 6s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @media (min-width: 992px) {
      width: 100px;
      height: 100px;
    }
    @media (min-width: 1200px) {
      width: 120px;
      height: 120px;
    }

    &:nth-child(1) {
      left: 30%;
      top: 5%;
    }
    &:nth-child(2) {
      left: 50%;
      top: 5%;
    }
    &:nth-child(3) {
      left: 15%;
      top: 20%;
    }
    &:nth-child(4) {
      left: 40%;
      top: 20%;
    }
    &:nth-child(5) {
      left: 65%;
      top: 20%;
    }
    &:nth-child(6) {
      left: 5%;
      top: 35%;
    }
    &:nth-child(7) {
      left: 30%;
      top: 35%;
    }
    &:nth-child(8) {
      left: 55%;
      top: 35%;
    }
    &:nth-child(9) {
      left: 75%;
      top: 35%;
    }
    &:nth-child(10) {
      left: 15%;
      top: 50%;
    }
    &:nth-child(11) {
      left: 40%;
      top: 50%;
    }
    &:nth-child(12) {
      left: 65%;
      top: 50%;
    }
    &:nth-child(13) {
      left: 30%;
      top: 65%;
    }
    &:nth-child(14) {
      left: 50%;
      top: 65%;
    }
    @keyframes animation {
      from {
        transform: rotateY(0);
      }
      to {
        transform: rotateY(-180deg);
      }
    }
  }

  &:hover {
    .item {
      transition: all 0.3s ease;
    }
  }
}

</style>
