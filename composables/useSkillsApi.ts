import Skill from '~/types/skill'

export function getSkillsFromApi () {
  return useFetch<Promise<Skill[]>>(usePathApi.skills)
}
