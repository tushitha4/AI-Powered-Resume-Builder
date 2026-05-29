import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAISummary(data: any): string {
  const { personalInfo, experience, skills, education } = data;
  
  const skillNames = skills.map((s: any) => s.name).join(', ');
  const latestJob = experience[0];
  const latestEdu = education[0];
  
  return `Results-driven ${latestJob?.position || 'professional'} with expertise in ${skillNames || 'various technologies'}. Proven track record of delivering high-quality solutions at ${latestJob?.company || 'leading organizations'}. Holds a ${latestEdu?.degree || 'degree'} in ${latestEdu?.field || 'relevant field'} from ${latestEdu?.institution || 'accredited institution'}. Passionate about leveraging technical skills to drive innovation and achieve business objectives.`;
}

export function generateCareerObjective(data: any): string {
  const { personalInfo, experience, skills } = data;
  const skillNames = skills.slice(0, 3).map((s: any) => s.name).join(', ');
  
  return `Motivated ${experience[0]?.position || 'professional'} seeking to contribute expertise in ${skillNames || 'relevant skills'} to a dynamic organization. Committed to continuous learning and professional growth while delivering exceptional value through innovative solutions and collaborative teamwork.`;
}
