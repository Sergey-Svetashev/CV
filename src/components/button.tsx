import type { StylableWithChildrenProps } from '~/models';

export const Button = ({
  className = '',
  children,
  onClick,
}: StylableWithChildrenProps<{ onClick: () => void }>) => (
  <button
    type='button'
    className={`cursor-pointer p-2 min-w-10 rounded-xl bg-[#606060] text-white transition-all transform-none ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
