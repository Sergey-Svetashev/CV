'use client';

import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

export type Views = 'contacts' | 'skills';

type Drawer = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const DrawerContext = createContext<Record<Views, Drawer>>({
  contacts: { isOpen: false, setIsOpen: () => null },
  skills: { isOpen: false, setIsOpen: () => null },
});

export const DrawerContextProvider = ({ children }: PropsWithChildren) => {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  return (
    <DrawerContext.Provider
      value={{
        contacts: { isOpen: isSkillsOpen, setIsOpen: setIsSkillsOpen },
        skills: { isOpen: isContactsOpen, setIsOpen: setIsContactsOpen },
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
