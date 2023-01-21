import { Portfolio } from '@prisma/client'
import prisma from '@/server/database/skills'

export async function getPortfolio (): Promise<Portfolio[] | null> {
  const data = await prisma.portfolio.findMany({
    include: {
      tecnologys: {
        tecnology: true
      }
    }
  })
  return data
}
