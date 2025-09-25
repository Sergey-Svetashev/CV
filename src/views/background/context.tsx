'use client';

import type { Dispatch, SetStateAction, ReactNode } from 'react';
import { createContext, useState } from 'react';

type DrawerData = { isDrawerOpen: boolean; contentLimit: number };
type DrawerState = DrawerData & { setDrawerState: Dispatch<SetStateAction<DrawerData>> };

const initDrawerData: DrawerData = {
  isDrawerOpen: false,
  contentLimit: 300,
};

export const DrawerContext = createContext<DrawerState>({
  ...initDrawerData,
  setDrawerState: () => null,
});

export function DrawerCtxProvider({ children }: { children: ReactNode }) {
  const [data, setDrawerState] = useState<DrawerData>(initDrawerData);

  return (
    <DrawerContext.Provider value={{ ...data, setDrawerState }}>{children}</DrawerContext.Provider>
  );
}

export const TabContext = createContext<{
  tabs: Array<number>;
  setActiveIndex: (index: number) => void;
}>({
  tabs: [0],
  setActiveIndex: (_: number) => null,
});

export function TabCtxProvider({
  initTabs,
  children,
}: {
  initTabs: Array<number>;
  children: ReactNode;
}) {
  const [tabs, setTabs] = useState(initTabs);

  const setActiveIndex = (index: number) => {
    const left = tabs.slice(0, index).map(() => 0);
    const right = tabs
      .slice(index)
      .reduce<Array<number>>((a, _, __, arr) => [...a, (a[a.length - 1] || arr.length) - 1], []);

    setTabs([...left, ...right]);
  };

  return <TabContext.Provider value={{ tabs, setActiveIndex }}>{children}</TabContext.Provider>;
}
