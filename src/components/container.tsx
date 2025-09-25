import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => (
  <div className='m-auto px-4 md:px-8 max-w-5xl'>{children}</div>
);
