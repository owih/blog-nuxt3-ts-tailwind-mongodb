import Theme from '@/types/theme'

export default () => {
  const useIsDark = useState<Theme>('dark', () => 'dark')

  const getIsDark = computed(():string => useIsDark.value)

  const getColorThemeFromStorage = ():void => {
    useIsDark.value = localStorage.getItem('isDark') === 'dark' ? 'dark' : 'light'
  }

  const toggleColorTheme = ():void => {
    useIsDark.value = useIsDark.value === 'dark' ? 'light' : 'dark'
    setColorThemeInStorage()
    setColorTheme()
  }
  const setColorThemeInStorage = ():void => {
    localStorage.setItem('isDark', useIsDark.value)
  }
  const setColorTheme = () :void => {
    useColorMode().preference = useIsDark.value
  }

  return {
    getIsDark,
    toggleColorTheme,
    getColorThemeFromStorage,
    setColorThemeInStorage,
    setColorTheme
  }
}
