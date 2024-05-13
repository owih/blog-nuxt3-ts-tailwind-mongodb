<template>
  <div class="container">
    <div class="title-with-link animation animation_line-up">
      <h1 class="page-title inline-block mr-3 mb-0">
        {{ useDefaultLinks.about.title }}
      </h1>
      <NuxtLink :to="useDefaultLinks.portfolio.url" class="link">
        {{ useDefaultLinks.portfolio.title }}
      </NuxtLink>
    </div>
    <div class="animation animation_show">
      <section class="mb-12">
        <AboutPanel :title="aboutData.about.title" :text="aboutData.about.text" :image="aboutData.about.image" />
      </section>
      <section class="mb-12">
        <AboutPanel :title="aboutData.education.title" :text="aboutData.education.text" />
      </section>
      <section>
        <AboutPanel :title="aboutData.experience.title" :text="aboutData.experience.text" :is-experience="true" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const aboutData = useAboutInfo
</script>
