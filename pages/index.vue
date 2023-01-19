<template>
  <div class="container h-full">
    <div class="flex justify-between w-full h-full">
      <div class="lg:w-6/12 flex flex-col justify-center">
        <ClientOnly>
          <WelcomeTitle :titleData="titleMessages" class="h-48 lg:pb-20 lg:h-1/2" />
        </ClientOnly>
      </div>
      <div class="w-6/12 flex-col justify-center items-end hidden lg:flex lg:pb-20">
        <ClientOnly>
          <IconsPanel :icons="icons" />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const titleMessages = useTitleMessages
const icons = useHomeIconsPanel
</script>
