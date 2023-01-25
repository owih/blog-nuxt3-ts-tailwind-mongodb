import { getAllSkills } from '~/server/repositories/skillRepository'
import Skill from '~/types/skill'

export default defineEventHandler(async () => {
  try {
    return await getAllSkills() as Skill[] | null
  } catch (e) {
    throw (createError({ statusCode: 404, statusMessage: 'Data fetch error' }))
  }
})
