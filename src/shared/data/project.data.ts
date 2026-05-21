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
    title: 'MAKON DESIGN STUDIO',
    description:
      'Makon Interior Design Studio — a business website I built for an interior design studio. It supports multiple languages, has a dark/light mode toggle, and works cleanly across all screen sizes. I also handled the UI/UX design from scratch.',
    tags: ['NEXT.JS', 'TAILWINDCSS',"NODEJS", "EXPRESSJS","POSTGRESQL"],
    url: 'https://makondesign.uz',
    image: '/images/project1.png',
    featured: true,
  },
]