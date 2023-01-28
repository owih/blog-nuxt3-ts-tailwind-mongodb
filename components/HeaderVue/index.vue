<template>
  <header class="py-6">
    <div class="container flex flex-row justify-end">
      <HeaderVueMenu :isMenuOpen="stateMenu.getIsOpen.value">
        <HeaderVueNavigation :links="links" :isMenuOpen="stateMenu.getIsOpen.value" />
      </HeaderVueMenu>
      <div class="flex space-x-6">
        <HeaderVueSwitchThemeButton
          class="animation animation_jumpy"
          :themeColor="stateTheme.getIsDark.value"
          @switchTheme="onSwitchTheme"
        />
        <HeaderVueBurgerButton
          class="animation animation_jumpy"
          :isOpen="stateMenu.getIsOpen.value"
          @changeMenu="onChangeMenu"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang='ts'>

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
