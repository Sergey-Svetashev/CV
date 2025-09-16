export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: Array<{ text: string; details?: Array<string> }>;
};

export type Link = {
  text: string;
  url: string;
};
