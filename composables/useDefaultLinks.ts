import PageInfo from '~/types/pageInfo'

type Links = {
  [key:string]: PageInfo;
}
export const useDefaultLinks: Links = {
  home: {
    title: 'Home',
    pageTitle: 'Dmitry Frontend',
    description: 'Portfolio website',
    url: '/'
  },
  skills: {
    title: 'Skills',
    pageTitle: 'Dmitry Frontend - Skills',
    description: 'Hard/soft skills list',
    url: '/skills'
  },
  about: {
    title: 'About',
    pageTitle: 'Dmitry Frontend - About',
    description: 'About me: general, experience and education info',
    url: '/about'
  },
  portfolio: {
    title: 'Portfolio',
    pageTitle: 'Dmitry Frontend - Portfolio',
    description: 'Some portfolio works',
    url: '/portfolio'
  },
  contact: {
    title: 'Contact me',
    pageTitle: 'Dmitry Frontend - Contact me',
    description: 'Contact page with contact form and social links',
    url: '/contact'
  },
  cats: {
    title: 'Cats?',
    pageTitle: 'Dmitry Frontend - Cats?',
    description: 'Some cats.. why not?',
    url: '/cats'
  }
}
