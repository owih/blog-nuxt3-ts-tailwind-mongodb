import Portfolio from '~/types/portfolio'
import { getPortfolioList } from '~/server/repositories/portfolioRepository'

export default defineEventHandler(() => {
  return getPortfolioList() as Promise<Portfolio[] | null>
})
