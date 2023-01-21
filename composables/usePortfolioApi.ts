import Portfolio from '~/types/portfolio'

export function getPortfolioFromApi () {
  return useFetch<Promise<Portfolio[]>>(usePathApi.portfolio)
}
