export const stack: StackRow[] = [
  {
    category: 'FRONTEND',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'BACKEND',
    items: ['Node.js', 'Express', 'PostgreSQL', 'REST API'],
  },
  {
    category: 'TOOLING',
    items: ['Git', 'Figma', 'VSCode', 'Vercel'],
  },
]

type StackRow = {
  category: string
  items: string[]
}