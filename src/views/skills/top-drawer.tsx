'use client';

import type { PointerEventHandler } from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import type { StylableWithChildrenProps } from '~/models';
import { TopDrawerContext } from './context';

export default function TopDrawer({ className = '', children }: StylableWithChildrenProps) {
  const closeTriggerHeight = 280;
  const { isOpen, setIsOpen } = useContext(TopDrawerContext);
  const [isEventBegan, setIsEventBegan] = useState(false);
  const [drawerHeight, setDrawerHeight] = useState(0);
  const [drawerPosition, setDrawerPosition] = useState(0);
  const [startY, setStartY] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);

  const handleEventStart: PointerEventHandler<HTMLDivElement> = e => {
    setIsEventBegan(true);
    setStartY(e.clientY);
  };

  const handleEventEnd: PointerEventHandler<HTMLDivElement> = async e => {
    const lastDrawerPosition = (drawerPosition || drawerHeight) - (startY - e.clientY);

    if (wrap.current && lastDrawerPosition <= closeTriggerHeight) {
      await Promise.resolve((wrap.current.style = ''));
      // TODO!: investigate bug when the event is not fired after quick click and move
      wrap.current.style.transform = `translateY(${0}px)`;

      setIsOpen(prev => !prev);
    }

    setDrawerPosition(() =>
      lastDrawerPosition <= closeTriggerHeight
        ? 0
        : lastDrawerPosition >= drawerHeight
        ? drawerHeight
        : lastDrawerPosition
    );
    setIsEventBegan(false);
  };

  const handleMove: PointerEventHandler<HTMLDivElement> = e => {
    if (isEventBegan && wrap.current) {
      const updatedPosition = (drawerPosition || drawerHeight) - (startY - e.clientY);

      wrap.current.style.transitionDuration = '0s';
      wrap.current.style.transform = `translateY(${
        updatedPosition >= drawerHeight ? drawerHeight : updatedPosition
      }px)`;
    }
  };

  useEffect(() => {
    const contentHeight = (wrap.current?.getBoundingClientRect().height || 0) + 50;

    setDrawerHeight(contentHeight);
    // setDrawerPosition(contentHeight);
  }, [isOpen]);

  useEffect(() => {
    if (wrap.current && isOpen)
      wrap.current.style.transform = `translateY(${drawerPosition || drawerHeight}px)`;
  }, [isOpen]);

  useEffect(() => {}, []);

  return (
    <div
      ref={wrap}
      onPointerDown={handleEventStart}
      onPointerUp={handleEventEnd}
      onPointerMove={handleMove}
      className={`${className} touch-none select-none cursor-grab active:cursor-grabbing transition-transform duration-700 absolute w-full bottom-12`}
    >
      {children}
    </div>
  );
}
