<template>
  <div class="container">
    <div
      class="title-with-link animation"
      :class="{ 'animation_line-up': animationStore.getAnimations.value.about }"
    >
      <h1 class="page-title inline-block mr-3 mb-0">
        {{ useDefaultLinks.about.title }}
      </h1>
      <NuxtLink :to="useDefaultLinks.portfolio.url" class="link">
        {{ useDefaultLinks.portfolio.title }}
      </NuxtLink>
    </div>
    <div
      class="animation"
      :class="{ 'animation_show': animationStore.getAnimations.value.about }"
    >
      <section class="mb-12">
        <AboutPanel :title="aboutData.about.title" :text="aboutData.about.text" :image="aboutData.about.image" />
      </section>
      <section class="mb-12">
        <AboutPanel :title="aboutData.education.title" :text="aboutData.education.text" />
      </section>
      <section>
        <AboutPanel :title="aboutData.experience.title" :text="aboutData.experience.text" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const aboutData = useAboutInfo
const animationStore = useAnimationStore()

onMounted(() => {
  animationStore.setAnimation('about')
})
</script>
