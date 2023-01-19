<template>
  <nav>
    <ul class="flex flex-row justify-end space-x-4">
      <li v-for="link in props.links" :key="link.title">
        <nuxt-link class="link" :to="link.url">
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang='ts'>
const props = defineProps({
  links: {
    type: Object,
    require: true,
    default: null
  }
})
</script>
