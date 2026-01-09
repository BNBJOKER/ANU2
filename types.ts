import { ReactNode } from 'react';

export interface FAQItem {
  question: string;
  answer: ReactNode;
  category: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  subValue?: string;
  isCurrency?: boolean;
}
