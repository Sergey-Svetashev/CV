import { PropsWithChildren, ReactNode } from 'react';

export type Experience = {
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  achievements: Array<{ text: string; details?: Array<string> }>;
};

export type Link = {
  text: string;
  url: string;
};

export type StylableProp<P = unknown> = P & { className?: string };
export type StylableWithChildrenProps<P = unknown> = P & PropsWithChildren<StylableProp>;
