export type ProjectRole =
  | 'Frontend'
  | 'Fullstack + UI/UX Design'
  | 'UI/UX + Frontend'
  | 'Product Concept + AI-Paired Development'
  | string

export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  id: number
  slug: string
  title: string
  description: string

  role: ProjectRole
  duration: string
  year: number

  problem: string
  solution: string
  myContribution: string[]
  challenges?: string
  results?: string[]
  roadmap?: string[]

  tags: string[]

  image: string
  gallery?: string[]

  links: ProjectLink[]
  url: string

  featured: boolean
  status: 'live' | 'in-progress' | 'archived'
}
export const projects: Project[] = [
  {
    id: 1,
    slug: 'makon-design-studio',
    title: 'MAKON DESIGN STUDIO',
    description:
      'A multilingual business website with dark/light mode and a custom admin panel, built for an interior design studio.',

    role: 'Fullstack + UI/UX Design',
    duration: '3 weeks',
    year: 2026,

    problem:
      'The studio was active on Instagram, but with a heavy workload, they often responded late to inquiries coming through Instagram or phone calls — losing potential clients in the process.',
    solution:
      'I built a full business website in Uzbek and Russian, with dark/light mode for comfortable evening browsing, including about, portfolio, team, testimonial, and contact sections. The contact form was integrated with a Telegram bot — when a client submits an inquiry, it goes straight to the studio owners\' Telegram. This means the website keeps "selling" the studio\'s services even while they\'re busy or asleep.',
    myContribution: [
      'UI/UX Design',
      'Frontend Development',
      'Backend Development',
      'Admin Panel',
      'Cloudinary Integration',
      'Telegram Bot Integration',
      'Multilingual Support',
      'SEO Optimization',
    ],
    challenges:
      'The biggest challenge was the design phase — since it was my first time designing a UI/UX from scratch, it took longer than planned. The process taught me a lot about the design-to-code workflow.',
    results: [
      'The studio now receives Instagram and phone inquiries in real time through a Telegram bot, with no delay',
      'The studio can independently update its content — portfolio, team, testimonials — through the admin panel, without needing a developer',
    ],

    tags: ['NEXT.JS', 'TAILWINDCSS', 'NODEJS', 'EXPRESSJS', 'POSTGRESQL'],

    image: '/images/makon/cover.png',
    gallery: ["/images/makon/gallery/glr1.png", "/images/makon/gallery/glr2.png","/images/makon/gallery/glr3.png"],

    links: [{ label: 'Live Demo', url: 'https://makondesign.uz' }],
    url: 'https://makondesign.uz',

    featured: true,
    status: 'live',
  },
  {
    id: 2,
    slug: 'dev-journal',
    title: 'DEV JOURNAL',
    description:
      'A personal changelog for developers — a private space to log every bug you fixed and how you fixed it, so the knowledge never gets lost.',

    role: 'Product Concept + AI-Paired Development',
    duration: '1 day',
    year: 2026,

    problem:
      'As a junior developer, I kept solving bugs and problems, but the solutions lived only in my memory — or scattered across random notes. When I hit a similar issue weeks later, I had no reliable place to look back at how I solved it the first time.',
    solution:
      'I designed the concept and UI direction myself, generated the interface using Claude Design from screenshots I described and refined, then built the app using Claude Code with shadcn/ui for clean, consistent components. Each entry follows a simple structure — Problem, Solution, What I Learned, and an optional Improvement Idea — tagged with the tech stack involved, so entries are easy to search and filter later.',
    myContribution: [
      'Product Concept',
      'UI Direction',
      'AI-Paired Development',
      'Tagging System',
      'Search and Filter Logic',
    ],
    challenges:
      'This was a straightforward CRUD app, so no major technical challenges came up — the focus was more on shaping the idea and structuring the entry format in a way that would actually be useful to revisit later.',
    results: [
      'I use it daily now to log real bugs and solutions as I run into them',
      'The first real entry — a FIFO-logic bug in a debt-tracking system — is already logged and searchable',
    ],
    roadmap: [
      'Public, shareable profile view — so the journal can double as proof of problem-solving ability on a CV or portfolio',
    ],

    tags: ['NEXT.JS', 'TYPESCRIPT', 'TAILWINDCSS', 'SHADCN/UI', 'NODEJS', 'POSTGRESQL', 'PRISMA', "CLAUDE CODE"],

    image: '/images/devjournal/cover.png',
    gallery: ['/images/devjournal/gallery/glr1.png','/images/devjournal/gallery/glr2.png','/images/devjournal/gallery/glr3.png'],

    links: [
      { label: 'Live Demo', url: 'https://devjournal-webapp.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/nematjonovv/devjournal-webapp' },
    ],
    url: 'https://devjournal-webapp.vercel.app/',

    featured: true,
    status: 'live',
  }
]