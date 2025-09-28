'use client';

import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

export const TopDrawerContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({ isOpen: false, setIsOpen: () => null });

export const TopDrawerContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TopDrawerContext.Provider value={{ isOpen, setIsOpen }}>{children}</TopDrawerContext.Provider>
  );
};
