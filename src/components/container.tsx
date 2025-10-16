import type { StylableWithChildrenProps } from '~/models';

export const Container = ({ children, className = '' }: StylableWithChildrenProps) => (
  <div className={`mx-auto px-4 md:px-8 max-w-5xl ${className}`}>{children}</div>
);
