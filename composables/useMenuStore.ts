export default () => {
  const useIsOpen = useState<boolean>('isOpen', () => false)

  const getIsOpen = computed(():boolean => useIsOpen.value)

  const toggleOpen = (open:boolean):void => {
    useIsOpen.value = open
  }

  return {
    getIsOpen,
    toggleOpen
  }
}
