import { defineStore } from 'pinia'
import Portfolio from '~/types/portfolio'

export const usePortfolioStore = defineStore('portfolio', () => {
  const portfolio = ref<Portfolio[]>()

  const getPortfolio = computed(():Portfolio[] => portfolio.value as Portfolio[])

  async function fetchPortfolioToStore () {
    const { data } = await getPortfolioFromApi()
    const arrayData:Portfolio[] = []

    for (const item in data.value) {
      arrayData.push(data.value[item] as Portfolio)
    }
    portfolio.value = arrayData
    console.log(portfolio.value)
  }

  return {
    getPortfolio,
    fetchPortfolioToStore
  }
})
