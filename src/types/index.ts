export interface PersonalInfo {
  name: string;
  title: string;
  focus: string[];
  summary: string;
  detailedBio: string[];
  progressionPhases: {
    phase: string;
    title: string;
    description: string;
    technologies: string[];
  }[];
  email: string;
  github: string;
  linkedin: string;
  phone: string;
  location: string;
  cvUrl: string; // Configurable path or URL
  cvFileName: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  year: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  technicalHighlights: string[];
  metrics?: ProjectMetric[];
  architectureLayers?: {
    name: string;
    details: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
  featuredBadge?: string;
  accentColor?: string;
}

export interface CurrentlyBuildingItem {
  id: string;
  title: string;
  status: 'In Progress' | 'Coming Soon';
  description: string;
  highlights: string[];
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  duration?: string;
  location: string;
  responsibilities: string[];
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  faculty: string;
  graduationYear: string;
  gpa: string;
  location: string;
  coreDisciplines: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  verificationUrl?: string;
  isConfigurable: boolean;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  nativeNote?: string;
}

export interface AgentArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  type: 'input' | 'agent' | 'component' | 'output';
  icon: string;
}
