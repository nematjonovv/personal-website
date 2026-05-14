export type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  url: string
  image: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'INTERIOR DESIGN STUDIO WEBSITE',
    description:
      'High-performance landing page with custom transitions, dynamic grid layout, and a bespoke content management system.',
    tags: ['NEXT.JS', 'TAILWIND', 'CMS'],
    url: 'https://example.com',
    image: '/images/project1.png',
    featured: true,
  },
  {
    id: 2,
    title: 'PET PROJECT 1',
    description: 'Experimental application focused on exploring modern patterns.',
    tags: ['REACT'],
    url: 'https://example.com',
    image: '/images/project2.png',
    featured: false,
  },
  {
    id: 3,
    title: 'PET PROJECT 2',
    description: 'Experimental application focused on exploring modern patterns.',
    tags: ['REACT'],
    url: 'https://example.com',
    image: '/images/project2.png',
    featured: false,
  },
  {
    id: 4,
    title: 'PET PROJECT 3',
    description: 'Experimental application focused on exploring modern patterns.',
    tags: ['REACT'],
    url: 'https://example.com',
    image: '/images/project2.png',
    featured: false,
  },
]