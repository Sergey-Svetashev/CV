import { StylableProp } from '~/models';

export const MailIcon = ({
  fill = 'none',
  stroke = '#000',
  className,
}: StylableProp<{ fill?: string; stroke?: string }>) => (
  <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' fill={fill}>
    <rect width='256' height='256' />
    <polyline
      points='224 56 128 144 32 56'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      stroke={stroke}
    />
    <path
      d='M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      stroke={stroke}
    />
    <line
      x1='110.55'
      y1='128'
      x2='34.47'
      y2='197.74'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      stroke={stroke}
    />
    <line
      x1='221.53'
      y1='197.74'
      x2='145.45'
      y2='128'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      stroke={stroke}
    />
  </svg>
);
