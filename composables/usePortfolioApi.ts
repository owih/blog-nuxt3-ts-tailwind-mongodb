import Portfolio from '~/types/portfolio'

export async function getPortfolioListFromApi () {
  return await useFetch<Portfolio[]>(usePathApi.portfolio)
}
export async function getPortfolioPerIdFromApi (id:number) {
  return await useFetch<Portfolio|null>(usePathApi.portfolio + '/' + id)
}
