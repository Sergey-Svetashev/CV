import type { StylableWithChildrenProps } from '~/models';

export const Button = ({
  className = '',
  children,
  onClick,
}: StylableWithChildrenProps<{ onClick: () => void }>) => (
  <button
    type='button'
    className={`cursor-pointer p-2 rounded-xl bg-[#606060] transition-all transform-none ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
