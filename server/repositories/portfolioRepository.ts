import { Portfolio } from '@prisma/client'
import prisma from '@/server/database/skills'

export async function getPortfolioList (): Promise<Portfolio[] | null> {
  try {
    const data = await prisma.portfolio.findMany({
      include: {
        tecnologys: {
          include: {
            tecnology: true
          }
        }
      }
    })
    return data
  } catch (e) {
    throw createError({ statusCode: 500, statusMessage: 'Data fetch error' })
  }
}
export async function getPortfolioPerId (id:number): Promise<Portfolio | null> {
  try {
    const data = await prisma.portfolio.findFirst({
      where: {
        id
      },
      include: {
        tecnologys: {
          include: {
            tecnology: true
          }
        }
      }
    })
    return data
  } catch (e) {
    throw createError({ statusCode: 500, statusMessage: 'Data fetch error' })
  }
}
