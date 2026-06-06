import { NavLink, Skill, Project, SocialLink, Experience } from '@/types';

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

export const PROJECTS: Project[] = [
  {
    title: 'Modern Interior Design Studio',
    description: 'A responsive website for an interior design studio with immersive 3D room showcases.',
    image: 'interior',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app to manage tasks and projects with real-time collaboration.',
    image: 'task',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Restaurant Website',
    description: 'A modern restaurant website with online reservation and menu management.',
    image: 'restaurant',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
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
