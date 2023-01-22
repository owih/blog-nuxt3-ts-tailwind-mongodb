import Portfolio from '~/types/portfolio'
import { getPortfolioPerId } from '~/server/repositories/portfolioRepository'

export default defineEventHandler((event) => {
  return getPortfolioPerId(Number(event.context.params.id)) as Promise<Portfolio | null>
})
