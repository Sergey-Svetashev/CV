import type { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => (
  <div className='m-auto px-4 md:px-8 max-w-5xl'>{children}</div>
);
