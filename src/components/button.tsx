import type { StylableWithChildrenProps } from '~/models';

export const Button = ({
  className = '',
  children,
  onClick,
}: StylableWithChildrenProps<{ onClick: () => void }>) => (
  <button
    type='button'
    className={`cursor-pointer p-2 rounded-xl bg-[#606060] transition-all shadow-2xl shadow-gray-800 transform-none hover:shadow-xl hover:translate-y-[10px] ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
