import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Mechanism' | 'Rewards' | 'Security';
}

export interface RoadmapPhase {
  phase: string;
  keyword: string;
  description: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: string;
}
