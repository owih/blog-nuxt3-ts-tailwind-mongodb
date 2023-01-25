import Skill from '~/types/skill'

export async function getSkillsFromApi () {
  return await useFetch<Skill[]>(usePathApi.skills)
}
