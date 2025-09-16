"use client";

import { createContext, useState } from "react";

export const TabContext = createContext<{ tabs: Array<number>; setActiveIndex: (index: number) => void }>({
  tabs: [0],
  setActiveIndex: (_: number) => null,
});

export default function TabProvider({ initTabs, children }: { initTabs: Array<number>; children: React.ReactNode }) {
  const [tabs, setTabs] = useState(initTabs);

  const setActiveIndex = (index: number) => {
    const left = tabs.slice(0, index).map(() => 0);
    const right = tabs.slice(index).reduce<Array<number>>((a, _, __, arr) => [...a, (a[a.length - 1] || arr.length) - 1], []);

    setTabs([...left, ...right]);
  };

  return <TabContext.Provider value={{ tabs, setActiveIndex }}>{children}</TabContext.Provider>;
}
