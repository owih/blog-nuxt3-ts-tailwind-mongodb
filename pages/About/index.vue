<template>
  <div class="container">
    <div>
      <h1 class="page-title inline-block mr-3">
        About
      </h1>
      <router-link :to="useDefaultLinks.portfolio.url" class="link">
        Portfolio
      </router-link>
    </div>
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
</template>

<script setup lang="ts">
const aboutData = useAboutInfo
</script>
