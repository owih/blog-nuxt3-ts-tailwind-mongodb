import { defineStore } from 'pinia'
import Portfolio from '~/types/portfolio'
import { getPortfolioListFromApi, getPortfolioPerIdFromApi } from '~/composables/usePortfolioApi'

export const usePortfolioStore = defineStore('portfolio', () => {
  const portfolioList = ref<Portfolio[]>()
  const portfolio = ref<Portfolio|null>()

  const getPortfolioList = computed(():Portfolio[] => portfolioList.value as Portfolio[])
  const getPortfolioPerId = computed(():Portfolio => portfolio.value as Portfolio)

  async function fetchPortfolioListToStore () {
    const { data } = await getPortfolioListFromApi()
    const arrayData:Portfolio[] = []

    for (const item in data.value) {
      arrayData.push(data.value[item] as Portfolio)
    }
    portfolioList.value = arrayData
  }

  async function fetchPortfolioPerIdToStore (id:number) {
    const { data } = await getPortfolioPerIdFromApi(id)
    if (data) {
      portfolio.value = toRaw<Portfolio|null>(data.value)
    }
  }

  return {
    getPortfolioPerId,
    getPortfolioList,
    fetchPortfolioListToStore,
    fetchPortfolioPerIdToStore
  }
})
