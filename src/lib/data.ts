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


export const SERVICES_DATA = [
  {
    title: 'Frontend Development',
    desc: 'React, Next.js, Tailwind CSS. Building responsive and modern UIs.',
    icon: '💻',
    darkColor: '#00b4d8',
    lightColor: '#0984e3',
  },
  {
    title: 'Backend Development',
    desc: 'Node.js, Express, REST APIs. Scalable backend solutions and API development.',
    icon: '⚙️',
    darkColor: '#9d4edd',
    lightColor: '#6c5ce7',
  },
  {
    title: 'Database Design',
    desc: 'MySQL, MongoDB, Firebase. Designing efficient and optimized databases.',
    icon: '🗄️',
    darkColor: '#ffb703',
    lightColor: '#e17055',
  },
  {
    title: 'Web Scraping',
    desc: 'Playwright, Puppeteer, Cheerio. Extracting valuable data automatically.',
    icon: '🕷️',
    darkColor: '#00e676',
    lightColor: '#00b894',
  },
];

export const ABOUTSKILLS = [
  { name: 'React / Next.js', level: 90, darkColor: '#00b4d8', lightColor: '#0984e3' },
  { name: 'Node.js / Express', level: 82, darkColor: '#00e676', lightColor: '#00b894' },
  { name: 'TypeScript', level: 75, darkColor: '#9d4edd', lightColor: '#6c5ce7' },
  { name: 'MongoDB / MySQL', level: 78, darkColor: '#ffb703', lightColor: '#e17055' },
  { name: 'Tailwind CSS', level: 88, darkColor: '#ff007f', lightColor: '#e84393' },
  { name: 'Docker / DevOps', level: 60, darkColor: '#00b4d8', lightColor: '#0984e3' },
];

export const TIMELINE = [
  {
    year: '2024',
    title: 'Freelance Full-Stack Developer',
    place: 'Self-Employed',
    desc: 'Delivered 20+ client projects ranging from landing pages to full SaaS dashboards.',
    icon: '💼',
  },
  {
    year: '2023',
    title: 'Open Source Contributor',
    place: 'GitHub',
    desc: 'Contributed to several community projects; built a React component library used by 300+ developers.',
    icon: '🌍',
  },
  {
    year: '2022',
    title: 'Started Web Development',
    place: 'Self-Taught',
    desc: 'Dove deep into JavaScript, React, and Node.js. Built first full-stack app within 6 months.',
    icon: '🎓',
  },
];

export const PERSONAL_FACTS = [
  { icon: '📍', label: 'Based in', value: 'Pakistan' },
  { icon: '🌐', label: 'Languages', value: 'English, Urdu' },
  { icon: '☕', label: 'Fuel', value: 'Coffee & curiosity' },
  { icon: '🎮', label: 'Hobby', value: 'Game dev side projects' },
  { icon: '📚', label: 'Currently learning', value: 'Rust & WebAssembly' },
  { icon: '🤝', label: 'Open to', value: 'Freelance & full-time' },
];

export const BANNER_STATS = [
  { value: '50+', label: 'Projects Completed', icon: '🚀', darkColor: '#9d4edd', lightColor: '#6c5ce7' },
  { value: '3+', label: 'Years Learning', icon: '📅', darkColor: '#ff007f', lightColor: '#e84393' },
  { value: '10+', label: 'Technologies', icon: '💻', darkColor: '#00b4d8', lightColor: '#0984e3' },
  { value: '100%', label: 'Client Satisfaction', icon: '😊', darkColor: '#ffb703', lightColor: '#e17055' },
];
