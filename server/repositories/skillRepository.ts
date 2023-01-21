import { Skill } from '@prisma/client'
import prisma from '@/server/database/skills'

export async function getAllSkills (): Promise<Skill[] | null> {
  const data = await prisma.skill.findMany({
    include: {
      subskills: true
    }
  })
  return data
}
