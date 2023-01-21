import { defineStore } from 'pinia'
import Skill from '@/types/skill'

export const useSkillsStore = defineStore('skills', () => {
  const skills = ref<Skill[]>([])

  const getSkills = computed(():Skill[] => skills.value)

  async function fetchSkillsToStore () {
    const { data } = await getSkillsFromApi()
    const arrayData:Skill[] = []

    for (const item in data.value) {
      arrayData.push(data.value[item] as Skill)
    }
    skills.value = arrayData
  }

  return {
    getSkills,
    fetchSkillsToStore
  }
})
