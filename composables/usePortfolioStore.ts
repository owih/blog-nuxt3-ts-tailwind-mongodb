import { _AsyncData } from '#app/composables/asyncData'
import { FetchError } from 'ofetch'
import Portfolio from '~/types/portfolio'

export default () => {
  const usePortfolio = useState<Portfolio|null>('portfolio', () => null)
  const usePortfolioList = useState<Portfolio[]>('portfolioList', () => [])
  const usePortfolioError = useState<string>('portfolioError', () => '')

  const getPortfolioPerId = computed(():Portfolio | null => usePortfolio.value)
  const getPortfolioList = computed(():Portfolio[] => usePortfolioList.value)
  const getPortfolioError = computed(():Portfolio[] => usePortfolioList.value)

  const setPortfolioListToStore = (data: _AsyncData<Portfolio[], FetchError<any> | null>) => {
    const { data: portfolioList, error } = data
    if (error.value) { usePortfolioError.value = error.value?.statusMessage || 'Something went wrong :(' } else { usePortfolioList.value = portfolioList.value ?? [] }
  }

  const setPortfolioPerIdToStore = (data: _AsyncData<Portfolio | null, FetchError<any> | null>) => {
    const { data: portfolio, error } = data
    if (error.value) { usePortfolioError.value = error.value?.statusMessage || 'Something went wrong :(' } else { usePortfolio.value = portfolio.value }
  }

  return {
    getPortfolioPerId,
    getPortfolioError,
    getPortfolioList,
    setPortfolioListToStore,
    setPortfolioPerIdToStore
  }
}
