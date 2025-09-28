import type { StylableProp } from '~/models';

export const H2 = ({ text, className = '', ...props }: StylableProp<{ text: string }>) => (
  <h2 className={`text-3xl font-semibold pt-4 pb-5 ${className}`} {...props}>
    {text}
  </h2>
);
