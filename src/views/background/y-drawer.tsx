'use client';

import type { PointerEventHandler, ReactNode } from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { H2 } from '~/components';
import type { StylableWithChildrenProps } from '~/models';
import { DrawerContext } from './context';

export default function YDrawer({
  title,
  className = '',
  children,
}: StylableWithChildrenProps<{
  title: { text: string; class: string };
}>): ReactNode {
  const { isDrawerOpen, contentLimit, setDrawerState } = useContext(DrawerContext);
  const [isEventBegan, setIsEventBegan] = useState(false);
  const [startY, setStartY] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);

  const handleEventStart: PointerEventHandler<HTMLHeadingElement> = e => {
    setStartY(e.clientY);
    setIsEventBegan(true);
  };

  const handleEventEnd: PointerEventHandler<HTMLHeadingElement> = async e => {
    if (e.target === e.currentTarget) {
      if (wrap.current) {
        await Promise.resolve((wrap.current.style = ''));
        // TODO!: investigate bug when the event is not fired after quick click and move
        !isDrawerOpen
          ? (wrap.current.style.transform = `translateY(-${contentLimit}px)`)
          : (wrap.current.style.transform = 'translateY(0)');
      }
      setDrawerState(prev => ({ ...prev, isDrawerOpen: !prev.isDrawerOpen }));
      setIsEventBegan(false);
    }
  };

  const handleMove: PointerEventHandler<HTMLHeadingElement> = e => {
    if (isEventBegan && wrap.current) {
      wrap.current.style.transitionDuration = '0s';
      isDrawerOpen
        ? (wrap.current.style.transform = `translateY(-${contentLimit + (startY - e.clientY)}px)`) // TODO! make style configurable
        : (wrap.current.style.transform = `translateY(-${startY - e.clientY}px)`);
    }
  };

  useEffect(() => {
    const drawerEdge =
      document.getElementById('drawer-edge')?.getBoundingClientRect().bottom || contentLimit;
    const windowContentLimit =
      window.innerHeight - drawerEdge - (heading.current?.getBoundingClientRect().height || 0);

    setDrawerState(prev => ({ ...prev, contentLimit: windowContentLimit }));
  }, []);

  return (
    <>
      <div ref={wrap} className={`transition-transform duration-500 ${className}`}>
        <H2
          text={title.text}
          className={`${title.class} touch-none select-none`}
          {...{
            ref: heading,
            onPointerDown: handleEventStart,
            onPointerUp: handleEventEnd,
            onPointerMove: handleMove,
          }}
        />
        {children}
      </div>
    </>
  );
}
