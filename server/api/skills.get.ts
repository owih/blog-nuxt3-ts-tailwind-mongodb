import { getAllSkills } from '~/server/repositories/skillRepository'
import Skill from '~/types/skill'

export default defineEventHandler(() => {
  return getAllSkills() as Promise<Skill[] | null>
})
