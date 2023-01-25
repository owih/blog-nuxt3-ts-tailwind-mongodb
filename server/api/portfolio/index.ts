import Portfolio from '~/types/portfolio'
import { getPortfolioList } from '~/server/repositories/portfolioRepository'

export default defineEventHandler(async () => {
  try {
    return await getPortfolioList() as Portfolio[] | null
  } catch (e) {
    throw (createError({ statusCode: 404, statusMessage: 'Data fetch error' }))
  }
})
