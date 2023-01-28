<template>
  <div class="container">
    <div
      class="title-with-link animation"
      :class="{ 'animation_line-up': animationStore.getAnimations.value.contact }"
    >
      <h1 class="page-title inline-block mr-3 mb-0">
        {{ useDefaultLinks.contact.title }}
      </h1>
      <NuxtLink :to="useDefaultLinks.cats.url" class="link">
        {{ useDefaultLinks.cats.title }}
      </NuxtLink>
    </div>
    <section
      class="animation"
      :class="{ 'animation_show': animationStore.getAnimations.value.contact }"
    >
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-6/12 mb-12 lg:mb-0">
          <div>
            <ContactPanel />
          </div>
        </div>
        <div class="lg:w-6/12 flex lg:items-center lg:justify-center">
          <SocialPanel />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: useDefaultLinks.contact.pageTitle,
  meta: [
    { name: 'description', content: useDefaultLinks.contact.description }
  ]
})
const animationStore = useAnimationStore()

onMounted(() => {
  animationStore.setAnimation('contact')
})
</script>
