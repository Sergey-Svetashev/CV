export const SkillsIcon = ({
  fill = 'none',
  stroke = 'white',
}: {
  fill?: string;
  stroke?: string;
}) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' stroke={stroke} fill={fill}>
    <line
      x1='48'
      y1='216'
      x2='48'
      y2='40'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
    />
    <polyline
      points='48 56 176 56 176 104'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
    />
    <polyline
      points='48 104 224 104 224 152 48 152'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
    />
    <polyline
      points='144 152 144 200 48 200'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
    />
  </svg>
);
