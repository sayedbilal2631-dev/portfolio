import { NavLink, Skill, SocialLink, Experience } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'HTML', icon: '🌐', color: '#E34F26' },
  { name: 'CSS', icon: '🎨', color: '#1572B6' },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Next.js', icon: '▲', color: '#FFFFFF' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248' },
];

export const PROJECTS = [
  {
    id: '1',
    title: 'Xivia Store',
    description:
      'Modern full-stack e-commerce platform featuring product categories, shopping cart, product management, deals, promotions, and responsive shopping experience.',
    category: 'Full Stack',
    featured: true,
    image: '',
    liveUrl: 'https://xivia-store.vercel.app/',
    githubUrl: '',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
    ],
  },
  {
    id: '2',
    title: 'Xivia Soft',
    description:
      'Professional software company website showcasing IT consultancy, UI/UX design, digital solutions, technology advisory, and software development services.',
    category: 'Frontend',
    featured: true,
    image: '',
    liveUrl: 'https://www.xiviasoft.com/',
    githubUrl: '',
    technologies: [
      'React',
      'Next.js',
      'JavaScript',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    id: '3',
    title: 'Usman Motors',
    description:
      'Vehicle rental and fleet management platform allowing users to browse available cars, view pricing, and request rental services online.',
    category: 'Full Stack',
    featured: true,
    image: '',
    liveUrl: 'https://usmanmotors.vercel.app/',
    githubUrl: '',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Firebase',
      'Tailwind CSS',
    ],
  },
];
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: '#', icon: 'github' },
  { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
  { platform: 'Twitter', url: '#', icon: 'twitter' },
  { platform: 'Instagram', url: '#', icon: 'instagram' },
];

export const ABOUT_STATS: Experience[] = [
  { label: 'Experience', value: '3+ Years', icon: '📅' },
  { label: 'Location', value: 'Based in India', icon: '📍' },
  { label: 'Availability', value: 'Open for Freelance', icon: '⚡' },
];
