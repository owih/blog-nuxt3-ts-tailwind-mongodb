import { Portfolio } from '@prisma/client'
import prisma from '@/server/database/skills'

export async function getPortfolioList (): Promise<Portfolio[] | null> {
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
}
export async function getPortfolioPerId (id:number): Promise<Portfolio | null> {
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
}
