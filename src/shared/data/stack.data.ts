type StackRow = {
  category: string
  items: string[]
}

export const stack: StackRow[] = [
  {
    category: 'FRONTEND',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'UI TOOLKIT',
    items: ['shadcn/ui', 'Ant Design', 'Framer Motion', 'Lucide React', 'Swiper'],
  },
  {
    category: 'LIBRARIES',
    items: ['Zustand', 'TanStack Query', 'React Hook Form', 'Zod', 'Axios', 'Day.js'],
  },
  {
    category: 'BACKEND',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST API', 'Swagger', 'Multer', 'JWT', 'bcrypt', 'Socket.io'],
  },
  {
    category: 'AI WORKFLOW',
    items: ['Claude Code', 'Claude', 'Claude Design'],
  },
  {
    category: 'TOOLING',
    items: ['Git', 'GitHub', 'Figma', 'VSCode', 'Vercel', 'Render', 'Cloudinary', 'Turborepo'],
  },
]