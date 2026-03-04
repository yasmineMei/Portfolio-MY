export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  status: "lu" | "non-lu";
  createdAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: Date;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin";
  createdAt: Date;
}
