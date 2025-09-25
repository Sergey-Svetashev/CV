'use client';

import { ReactNode, useContext, useEffect, useRef } from 'react';
import { DrawerContext, TabContext } from './context';

export default function Tab({
  index,
  label,
  children,
  className,
}: {
  index: number;
  label: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const labelBox = useRef<HTMLDivElement>(null);
  const element = useRef<HTMLDivElement>(null);
  const { tabs, setActiveIndex } = useContext(TabContext);

  const { contentLimit } = useContext(DrawerContext); // TODO: purify the tabs from drawer dependency

  useEffect(() => {
    if (wrap.current) wrap.current.style.zIndex = String(tabs[index]);
  }, [tabs]);

  useEffect(() => {
    if (labelBox.current && element.current) {
      const labelHeight = labelBox.current.getBoundingClientRect().height;

      element.current.style.maxHeight = `${contentLimit - labelHeight}px`;
    }
  }, [contentLimit]);

  return (
    <div
      ref={wrap}
      className={className}
      onClick={() => {
        setActiveIndex(index);
      }}
    >
      <div className='relative z-10' ref={labelBox}>
        {label}
      </div>
      <div
        className='absolute h-screen overflow-y-scroll left-0 w-screen bg-white px-8 py-3 shadow-plain'
        ref={element}
      >
        {children}
      </div>
    </div>
  );
}
