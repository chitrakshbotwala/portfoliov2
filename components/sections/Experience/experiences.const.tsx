import { type ReactNode } from 'react';


const intive: Company = {
  color: '#007ac9',
  logo: 'intive',
};

const shippo: Company = {
  color: '#25d695',
  logo: 'shippo',
  padding: 4,
};

export const experiences: Experience[] = [
  
];

export type Period = {
  from: Date;
  to?: Date;
};

export type Company = {
  color: string;
  logo: string;
  padding?: number;
};

export type Experience = {
  company: Company;
  consultant?: boolean;
  description: ReactNode;
  id: string;
  jobTitle: string;
  period: Period;
  title: string;
};
