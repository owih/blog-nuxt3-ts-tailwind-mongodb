import { Skill } from '@prisma/client'
import prisma from '@/server/database/skills'

export function getAllSkills (): Promise<Skill[] | null> {
  try {
    const data = prisma.skill.findMany({
      include: {
        subskills: true
      }
    })
    return data
  } catch (e) {
    throw createError({ statusCode: 500, statusMessage: 'Data fetch error' })
  }
}
