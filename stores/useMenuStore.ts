import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const isOpen = ref<boolean>(false)
  const isMobile = ref<boolean>(false)

  const getIsOpen = computed(():boolean => isOpen.value)
  const getIsMobile = computed(():boolean => isMobile.value)

  function toggleOpen (open:boolean):void {
    isOpen.value = open
  }
  function watchIsMobileDevise ():void {
    window.addEventListener('resize', ():void => {
      isMobile.value = window.matchMedia('(max-width:992px)').matches
    })
  }

  return {
    getIsOpen,
    getIsMobile,
    toggleOpen,
    watchIsMobileDevise
  }
})
