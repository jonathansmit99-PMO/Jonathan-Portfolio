export interface ProjectOutcome {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  id: string;
  number: number;
  title: string;
  challenge: string;
  strategicExecution?: string[];
  executionDetails?: {
    title: string;
    description: string;
  }[];
  outcomes: ProjectOutcome[];
  teamorkDetail?: string;
  reflection?: string;
}

export interface CompetencyCategory {
  id: string;
  title: string;
  description: string;
  items: {
    name: string;
    desc: string;
    percentage: number; // For visualization
  }[];
}

export interface StrategicInitiative {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  description?: string;
}

export interface ReflectiveAnalysis {
  id: string;
  title: string;
  context: string;
  reflection: string;
}

export interface StakeholderMethod {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
}
