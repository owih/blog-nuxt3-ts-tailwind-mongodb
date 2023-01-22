<template>
  <header class="py-6">
    <div class="container flex flex-row justify-end">
      <HeaderVueMenu :isMenuOpen="stateMenu.getIsOpen">
        <HeaderVueNavigation :links="links" :isMenuOpen="stateMenu.getIsOpen" />
      </HeaderVueMenu>
      <div class="flex space-x-6">
        <HeaderVueSwitchThemeButton :themeColor="stateTheme.getIsDark" @switchTheme="onSwitchTheme" />
        <HeaderVueBurgerButton :isOpen="stateMenu.getIsOpen" @changeMenu="onChangeMenu" />
      </div>
    </div>
  </header>
</template>

<script setup lang='ts'>
import { useMenuStore } from '~/stores/useMenuStore'
import { useColorThemeStore } from '~/stores/useColorThemeStore'

const stateMenu = useMenuStore()
const stateTheme = useColorThemeStore()
const links = useDefaultLinks
const onSwitchTheme = ():void => {
  stateTheme.toggleColorTheme()
}
const setThemeFromLocalStorage = ():void => {
  stateTheme.getColorThemeFromStorage()
  stateTheme.setColorTheme()
}
const onChangeMenu = (isOpen:boolean):void => {
  stateMenu.toggleOpen(isOpen)
}

onMounted(setThemeFromLocalStorage)
</script>

<style scoped>
</style>
