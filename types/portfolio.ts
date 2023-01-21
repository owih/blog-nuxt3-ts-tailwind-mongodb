import Tecnology from '~/types/tecnology'

type Portfolio = {
  id: number,
  title: string,
  tecnologys: Tecnology[],
  preview: string,
  gif: string,
  linkWeb?: string,
  linkGit: string
}

export default Portfolio
