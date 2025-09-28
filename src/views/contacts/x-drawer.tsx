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
  const [startX, setStartX] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const labelBox = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  const handleEventStart: PointerEventHandler<HTMLDivElement> = e => {
    setIsEventBegan(true);
    setStartX(e.clientX);
  };

  const handleEventEnd: PointerEventHandler<HTMLDivElement> = async e => {
    if (wrap.current) {
      await Promise.resolve((wrap.current.style = ''));
      // TODO!: investigate bug when the event is not fired after quick click and move
      !isDrawerOpen
        ? (wrap.current.style.transform = `translateX(-${drawerWidth}px)`)
        : (wrap.current.style.transform = 'translateX(0)');
    }
    setIsEventBegan(false);
    setIsDrawerOpen(p => !p);
  };

  const handleMove: PointerEventHandler<HTMLDivElement> = e => {
    if (isEventBegan && wrap.current) {
      wrap.current.style.transitionDuration = '0s';
      isDrawerOpen
        ? (wrap.current.style.transform = `translateX(-${drawerWidth + (startX - e.clientX)}px)`) // TODO! make style configurable
        : (wrap.current.style.transform = `translateX(-${startX - e.clientX}px)`);
    }
  };

  useEffect(() => {
    const contentWidth = content.current?.getBoundingClientRect().width || 0;

    setDrawerWidth(contentWidth);

    if (window.innerWidth >= 980 && wrap.current) {
      setIsDrawerOpen(true);
      wrap.current.style.transform = `translateX(-${contentWidth}px)`;
    }
  }, []);

  return (
    <>
      <div ref={wrap} className={`transition-transform duration-500 ${className}`}>
        <div
          ref={labelBox}
          className={`${label.class} touch-none select-none`}
          onPointerDown={handleEventStart}
          onPointerUp={handleEventEnd}
          onPointerMove={handleMove}
        >
          {label.children}
        </div>
        <div ref={content}>{children}</div>
      </div>
    </>
  );
}
