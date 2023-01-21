<template>
  <div class="container h-full">
    <div class="lg:flex flex-col lg:flex-row lg:justify-between w-full h-full">
      <section class="lg:w-6/12 flex flex-col justify-center">
        <WelcomeTitle :titleData="titleMessages" class="h-40 px-2 mb-6 lg:pb-20 lg:px-0 lg:h-1/2" />
      </section>
      <section class="lg:w-6/12 flex flex-col justify-center items-center lg:items-end h-60 md:h-80 lg:h-auto lg:pb-20">
        <IconsPanel :icons="icons" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const titleMessages = useTitleMessages
const icons = useHomeIconsPanel
</script>
