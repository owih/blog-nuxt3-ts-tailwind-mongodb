import { defineStore } from 'pinia'
import Theme from '@/types/theme'

export const useColorThemeStore = defineStore('theme', () => {
  const isDark = ref<Theme>('dark')

  const getIsDark = computed(():string => isDark.value)

  function getColorThemeFromStorage ():void {
    isDark.value = localStorage.getItem('isDark') === 'dark' ? 'dark' : 'light'
  }
  function toggleColorTheme ():void {
    isDark.value = isDark.value === 'dark' ? 'light' : 'dark'
    setColorThemeInStorage()
    setColorTheme()
  }
  function setColorThemeInStorage ():void {
    localStorage.setItem('isDark', isDark.value)
  }

  function setColorTheme () :void {
    useColorMode().preference = isDark.value
  }

  return {
    getIsDark,
    toggleColorTheme,
    getColorThemeFromStorage,
    setColorThemeInStorage,
    setColorTheme
  }
})
