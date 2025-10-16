'use client';

import type { PointerEventHandler, PropsWithChildren, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { StylableWithChildrenProps } from '~/models';

export default function XDrawer({
  label,
  className = '',
  children,
}: StylableWithChildrenProps<{
  label: PropsWithChildren<{ class: string }>;
}>): ReactNode {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEventBegan, setIsEventBegan] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [startY, setStartY] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const labelBox = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  const handleEventStart: PointerEventHandler<HTMLDivElement> = e => {
    setIsEventBegan(true);
    setStartY(e.clientY);
  };

  const handleEventEnd: PointerEventHandler<HTMLDivElement> = async e => {
    if (wrap.current) {
      await Promise.resolve((wrap.current.style = ''));
      // TODO!: investigate bug when the event is not fired after quick click and move
      if (!isDrawerOpen) {

        (wrap.current.style.transform = `translateY(-${drawerWidth}px)`)
      } else {

         (wrap.current.style.transform = 'translateY(0)');
      }
    }
    setIsEventBegan(false);
    setIsDrawerOpen(p => !p);
  };

  const handleMove: PointerEventHandler<HTMLDivElement> = e => {
    if (isEventBegan && wrap.current) {
      wrap.current.style.transitionDuration = '0s';
      isDrawerOpen
        ? (wrap.current.style.transform = `translateY(-${drawerWidth + (startY - e.clientY)}px)`) // TODO! make style configurable
        : (wrap.current.style.transform = `translateY(-${startY - e.clientY}px)`);
    }
  };

  useEffect(() => {
    const contentHeight = content.current?.getBoundingClientRect().height || 0;

    setDrawerWidth(contentHeight);

    if (window.innerWidth >= 980 && wrap.current) {
      setIsDrawerOpen(true);
      wrap.current.style.transform = `translateY(-${contentHeight}px)`;
    }
  }, []);

  return (
    <>
      <div ref={wrap} onPointerDown={handleEventStart}
          onPointerUp={handleEventEnd}
          onPointerMove={handleMove} className={`transition-transform duration-500 ${className}`}>
        <div
          ref={labelBox}
          className={`${label.class} touch-none select-none`}
          
        >
          {label.children}
        </div>
        <div ref={content}>{children}</div>
      </div>
    </>
  );
}
