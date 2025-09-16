'use client';

import { ReactNode, useContext, useEffect, useRef } from 'react';
import { TabContext } from './tab-context';

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
  const self = useRef<HTMLDivElement>(null);
  const child = useRef<HTMLDivElement>(null);

  const { tabs, setActiveIndex } = useContext(TabContext);

  useEffect(() => {
      if (self.current && child.current) {
        const { top, bottom } = child.current.getBoundingClientRect();

      console.log('bottom', bottom, );
      console.log('window.innerHeight', window.innerHeight);
      console.log('top', top);
      console.log('window.innerHeight - top', window.innerHeight - top);
      if (bottom > window.innerHeight) {
        child.current.style.height = `${window.innerHeight - top}px`;
        child.current.style.overflowY = 'scroll';
      } else {
        child.current.style.height = '100vh';
      }

      // if (index === active) {
      self.current.style.zIndex = String(tabs[index]);
      // } else {
      //     if (self.current) self.current.style.zIndex = "0";
      //     // if (self.current && index === 1) self.current.style.zIndex = "1";
      // }

      // console.log(index, tabs);
    }
  }, [tabs, child.current?.getBoundingClientRect().top]);

  return (
    <div
      ref={self}
      className={className}
      onClick={e => {
        setActiveIndex(index);
      }}
    >
      {label}
      <div className='absolute left-0 w-screen bg-white px-8 py-3 border-t border-gray-200' ref={child}>
        {children}
      </div>
    </div>
  );
}
