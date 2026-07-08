export interface Profile {
  name: string;
  title: string;
  company: string;
  location: string;
  email: string;
  phone: string;
  tagline: string;
  education: string;
  bioId: string;
  bioEn: string;
  profileImage?: SanityImage;
  cvFile?: string;
  linkedin?: string;
  github?: string;
}

export interface Experience {
  _id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  descriptionId: string;
  descriptionEn: string;
  achievements: Achievement[];
  stack?: string[];
  order: number;
}

export interface Achievement {
  textId: string;
  textEn: string;
}

export interface Project {
  _id: string;
  title: string;
  category: "security" | "infrastructure" | "development" | "compliance" | "event-it" | "governance";
  descriptionId: string;
  descriptionEn: string;
  technologies: string[];
  impact: string;
  impactId?: string;
  impactEn?: string;
  status?: string;
  image?: SanityImage;
  order: number;
}

export interface Certification {
  _id: string;
  name: string;
  issuer: string;
  score?: string;
  date?: string;
  badge?: SanityImage;
  order: number;
}

export interface Skill {
  _id: string;
  category: "infrastructure" | "development" | "management";
  categoryLabel: string;
  categoryLabelId?: string;
  items: string[];
  order: number;
}

export interface Stat {
  _id: string;
  label: string;
  labelId?: string;
  labelEn?: string;
  value: string;
  context: string;
  contextId?: string;
  contextEn?: string;
  order: number;
}

export interface SanityImage {
  asset: {
    _ref: string;
    url?: string;
  };
  alt?: string;
}

export type Locale = "id" | "en";
