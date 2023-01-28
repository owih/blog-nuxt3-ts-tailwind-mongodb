<template>
  <div class="absolute inset-0 flex items-center justify-center" :class="{ 'opacity-0': isInit }">
    <Icon name="line-md:loading-twotone-loop" size="80" />
  </div>
  <div class="transition-opacity" :class="isInit ? 'opacity-1' : 'opacity-0'">
    <Swiper
      class="h-full"
      :class="$style.root"
      navigation
      pagination
      :space-between="30"
      :modules="[Navigation, Pagination]"
      :breakpoints="{
        992: {
          'slidesPerView': 3,
          'spaceBetween': 70,
          effect: 'cards'
        }
      }"
      @init="isInit = true"
    >
      <SwiperSlide v-for="(item, idx) in useCatsList" :key="idx" class="lg:max-h-96 lg:max-w-sm">
        <div class="w-full h-full">
          <img :src="'/cats/' + item" :alt="item" class="rounded-md">
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang='ts'>
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useCatsList from '~/composables/useCatsList'

const isInit = ref<boolean>(false)
</script>

<style module lang="scss">
.root {
  height: 400px;
  @media (min-width: 768px) {
    height: 700px;
  }
  @media (min-width: 992px) {
    max-height: unset;
    height: 500px;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
<style lang="scss">
.swiper {
  padding-bottom: 38px;
  .swiper-slide {
    transform: scale(1);
    transition: transform 0.2s ease;
  }
  .swiper-button-next,
  .swiper-button-prev {
    @apply text-dark dark:text-light hidden lg:block;
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active,
  .swiper-pagination-bullet {
    @apply bg-dark dark:bg-light lg:hidden;
  }
  @media (min-width: 992px) {
    padding: 60px;
    .swiper-slide-active + .swiper-slide-next {
      transform: scale(1.2);
      z-index: 2;
    }
  }
}
</style>
