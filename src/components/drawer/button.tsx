'use client';

import { useContext } from 'react';
import { Button } from '~/components/button';
import type { Views } from '~/components/drawer/context';
import { DrawerContext } from '~/components/drawer/context';
import { iconMap } from '~/icons';
import { StylableProp, StylableWithChildrenProps } from '~/models';

export default function OpenButton({ id, className = '' }: StylableProp<{ id: Views }>) {
  const { isOpen, setIsOpen } = useContext(DrawerContext)[id];
  const Icon = iconMap[id];

  return (
    <Button
      onClick={() => setIsOpen(prev => !prev)}
      className={`w-14 h-14 rounded-[50%] shadow-2xl shadow-gray-800 ${
        isOpen ? 'bg-[#a5a5a5]' : 'hover:shadow-xl hover:translate-y-[2px]'
      } ${className}`}
    >
      {Icon ? <Icon /> : null}
    </Button>
  );
}

export const CloseButton = ({
  id,
  children,
  className = '',
}: StylableWithChildrenProps<{ id: Views }>) => {
  const ctx = useContext(DrawerContext)[id];

  return (
    <Button
      className={`flex justify-self-end justify-center ${className}`}
      onClick={() => ctx.setIsOpen(prev => !prev)}
    >
      {children}
    </Button>
  );
};
