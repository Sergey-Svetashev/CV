'use client';

import { useContext } from 'react';
import { Button } from '~/components/button';
import { SkillsIcon } from '~/icons';
import { TopDrawerContext } from './context';

export default function SkillsButton() {
  const { setIsOpen } = useContext(TopDrawerContext);

  return (
    <Button
      onClick={() => setIsOpen(prev => !prev)}
      className='absolute top-40 right-0 w-14 h-14 mr-1 rounded-[50%]'
    >
      <SkillsIcon />
    </Button>
  );
}
