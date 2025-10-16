'use client';

import type { PointerEventHandler } from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import type { StylableWithChildrenProps } from '~/models';
import type { Views } from './context';
import { DrawerContext } from './context';

export default function Drawer({
  id,
  className = '',
  children,
}: StylableWithChildrenProps<{ id: Views }>) {
  const { isOpen, setIsOpen } = useContext(DrawerContext)[id];
  const [isEventBegan, setIsEventBegan] = useState(false);
  const [drawerHeight, setDrawerHeight] = useState(0);
  const [startY, setStartY] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);

  const handleEventStart: PointerEventHandler<HTMLDivElement> = e => {
    setIsEventBegan(true);
    setStartY(e.clientY);
  };

  const handleEventEnd: PointerEventHandler<HTMLDivElement> = async e => {
    const lastDrawerPosition = drawerHeight - (startY - e.clientY);

    if (wrap.current) {
      await Promise.resolve((wrap.current.style = ''));
      if (lastDrawerPosition <= drawerHeight / 1.1) {
        wrap.current.style.transform = `translateY(${0}px)`;

        setIsOpen(prev => !prev);
      } else {
        wrap.current.style.transform = `translateY(${drawerHeight}px)`;
      }
    }

    setIsEventBegan(false);
  };

  const handleMove: PointerEventHandler<HTMLDivElement> = e => {
    if (isEventBegan && wrap.current) {
      const updatedPosition = drawerHeight - (startY - e.clientY);

      wrap.current.style.transitionDuration = '0s';
      wrap.current.style.transform = `translateY(${
        updatedPosition >= drawerHeight ? drawerHeight : updatedPosition
      }px)`;
    }
  };

  useEffect(() => {
    const contentHeight = (wrap.current?.getBoundingClientRect().height || 0) + 50;

    setDrawerHeight(contentHeight);

    if (wrap.current) {
      isOpen
        ? (wrap.current.style.transform = `translateY(${drawerHeight}px)`)
        : (wrap.current.style.transform = `translateY(${0}px)`);
    }
  }, [isOpen]);

  return (
    <div
      ref={wrap}
      onPointerDown={handleEventStart}
      onPointerUp={handleEventEnd}
      onPointerMove={handleMove}
      className={`${className} touch-none select-none cursor-grab active:cursor-grabbing transition-transform duration-700`}
    >
      {children}
    </div>
  );
}
