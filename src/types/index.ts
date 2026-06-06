export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  label: string;
  value: string;
  icon: string;
}
