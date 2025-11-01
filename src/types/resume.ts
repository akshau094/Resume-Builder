export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  website: string;
  photo: string | null;
  includePhoto: boolean;
  includeLinkedin: boolean;
  includeWebsite: boolean;
}

export interface ResumeContent {
  summary: string;
  experience: string;
  education: string;
  skills: string;
  projects: string;
  certifications: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  content: ResumeContent;
}

export interface DesignSettings {
  template: string;
  fontSize: string;
  colorScheme: string;
  margin: number;
  lineSpacing: number;
}
