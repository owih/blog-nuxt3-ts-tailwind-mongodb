import Subskills from '~/types/subskill'

type Skill = {
  id: number,
  name: string,
  subskills: Array<Subskills>
}

export default Skill
