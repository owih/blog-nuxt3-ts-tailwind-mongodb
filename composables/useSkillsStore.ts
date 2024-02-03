import { _AsyncData } from '#app/composables/asyncData'
import { FetchError } from 'ofetch'
import Skill from '~/types/skill'

export default () => {
  const useSkills = useState<Skill[]>('skills', () => [])
  const useSkillsError = useState<string | null>('skillsErrors', () => '')

  const getSkills = computed(():Skill[] => useSkills.value)
  const getSortedSkills = computed(():Skill[] => [...getSkills.value].sort((a, b) => a.id - b.id))
  const getSkillsError = computed(():string | null => useSkillsError.value)

  const setSkillsToStore = (data: _AsyncData<Skill[], FetchError<any> | null>) => {
    const { data: skills, error } = data
    if (error.value) { useSkillsError.value = error.value?.statusMessage || 'Something went wrong :(' } else { useSkills.value = skills.value ?? [] }
  }

  return {
    getSkills,
    getSkillsError,
    getSortedSkills,
    setSkillsToStore
  }
}
