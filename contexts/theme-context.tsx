/* eslint-disable object-curly-newline */

'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ThemeContextProp {
  mode: string;
  setMode: (value: string) => void;
}
export const ThemeContext = createContext<ThemeContextProp | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('ThemeContext is undefined');
  }

  return context;
}

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState('light');

  const modeState = useMemo(() => ({ mode, setMode }), [mode]);

  const handleThemeChange = () => {
    if (mode === 'light') {
      setMode('dark');
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={modeState}>{children}</ThemeContext.Provider>
  );
}
