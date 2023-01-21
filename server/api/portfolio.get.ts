import Portfolio from '~/types/portfolio'
import { getPortfolio } from '~/server/repositories/portfolioRepository'

export default defineEventHandler(() => {
  return getPortfolio() as Promise<Portfolio[] | null>
})
