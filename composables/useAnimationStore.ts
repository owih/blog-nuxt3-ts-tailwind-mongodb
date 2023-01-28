import PageAnimations from '~/types/pageAnimations'

type PageAnimationName = 'home' | 'skill' | 'about' | 'portfolio' | 'contact' | 'anyone' | 'portfolioId' | 'cats'

export default () => {
  const useAnimations = useState<PageAnimations>('animations', ():PageAnimations => {
    return {
      home: false,
      skill: false,
      about: false,
      portfolio: false,
      contact: false,
      cats: false,
      anyone: false,
      portfolioId: false
    }
  })

  const getAnimations = computed(():PageAnimations => useAnimations.value)

  function setAnimation (animation: PageAnimationName):void {
    useAnimations.value[animation] = true
    useAnimations.value.anyone = true
  }

  return {
    getAnimations,
    setAnimation
  }
}
