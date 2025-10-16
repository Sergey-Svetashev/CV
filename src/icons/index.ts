import { JSX } from 'react';
import { GitHubIcon } from './github';
import { LinkedInIcon } from './linkedin';
import { LocationIcon } from './location';
import { SkillsIcon } from './skills';
import { ContactsIcon } from './contacts';

export * from './mail';
export * from './phone';
export * from './skills';

export const iconMap: Record<string, ({ ...props }) => JSX.Element> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  location: LocationIcon,
  skills: SkillsIcon,
  contacts: ContactsIcon
};
