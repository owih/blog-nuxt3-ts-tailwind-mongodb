<template>
  <label :class="$style.root" for="BURGER_MENU_TOGGLE">
    <input
      id="BURGER_MENU_TOGGLE"
      :class="$style.input"
      :checked="props.isOpen"
      type="checkbox"
      @change="onChange"
    >
    <span class="dark:bg-light" :class="$style.first" />
    <span class="dark:bg-light" :class="$style.second" />
    <span class="dark:bg-light" :class="$style.third" />
  </label>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const emits = defineEmits<{(e: 'changeMenu', value: boolean): void}>()
const props = defineProps({
  isOpen: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false
  }
})
const onChange = (event: Event):void => {
  const target = event.target as HTMLInputElement | null
  emits('changeMenu', !!target?.checked as boolean)
}
</script>

<style module lang="scss">
.root {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 48px;
  cursor: pointer;
  @apply z-burger;

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
      transition-property: height, width;
    }
    &:hover {
      &:before {
        width: 10px;
        height: 10px;
      }
    }
  }

  span {
    background-color: #000;
    border-radius:10px;
    height: 4px;
    margin: 4px 0;
    transition: .3s  cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  .first {
    width: 50%;
  }
  .second {
    width: 100%;
  }
  .third {
    width: 75%;
  }

  .input[type="checkbox"] {
    display: none;
  }
  .input[type="checkbox"]:checked ~ span {
    background-color: white;
  }
  .input[type="checkbox"]:checked ~ .first {
    transform-origin:bottom;
    transform:rotatez(45deg) translate(5px,0px)
  }
  .input[type="checkbox"]:checked ~ .second {
    transform-origin:top;
    transform:rotatez(-45deg)
  }
  .input[type="checkbox"]:checked ~ .third {
    transform-origin:bottom;
    width:50%;
    transform: translate(20px,-4px) rotatez(45deg);
  }
}
</style>
