/* eslint-disable object-curly-newline */

'use client';

import React, {
  createContext,
  useCallback,
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
  const [mode, setMode] = useState('');

  const modeState = useMemo(() => ({ mode, setMode }), [mode]);

  const handleChangeMode = useCallback(() => {
    if (mode === 'dark') {
      setMode('light');
      document.documentElement.classList.add('light');
    } else {
      setMode('dark');
      document.documentElement.classList.add('dark');
    }
  }, [mode]);

  useEffect(() => {
    handleChangeMode();
  }, []);

  return (
    <ThemeContext.Provider value={modeState}>{children}</ThemeContext.Provider>
  );
}
