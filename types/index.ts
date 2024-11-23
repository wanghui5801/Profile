export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  title: string;
  skills: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
} 