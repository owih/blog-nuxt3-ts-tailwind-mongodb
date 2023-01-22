import Portfolio from '~/types/portfolio'

export function getPortfolioListFromApi () {
  return useFetch<Promise<Portfolio[]>>(usePathApi.portfolio)
}
export function getPortfolioPerIdFromApi (id:number) {
  return useFetch<Portfolio|null>(usePathApi.portfolio + '/' + id)
}
