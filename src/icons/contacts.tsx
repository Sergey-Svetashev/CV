import { StylableProp } from '~/models';

export const ContactsIcon = ({
  fill = 'none',
  stroke = '#fff',
  className,
}: StylableProp<{
  fill?: string;
  stroke?: string;
}>) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 256 256'
    fill={fill}
    stroke={stroke}
  >
    <line
      x1='152'
      y1='112'
      x2='192'
      y2='112'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
    />
    <line
      x1='152'
      y1='144'
      x2='192'
      y2='144'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
    />
    <rect
      x='32'
      y='48'
      width='192'
      height='160'
      rx='8'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
    />
    <circle
      cx='96'
      cy='120'
      r='24'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
    />
    <path
      d='M64,168c3.55-13.8,17.09-24,32-24s28.46,10.19,32,24'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
    />
  </svg>
);
