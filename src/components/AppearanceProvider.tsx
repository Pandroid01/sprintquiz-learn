import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Appearance = {
  dark: boolean;
  fontSize: number;
  setDark: (value: boolean) => void;
  setFontSize: (value: number) => void;
};
const AppearanceContext = createContext<Appearance | null>(null);

function isFontSize(value: unknown): value is number {
  return value === 14 || value === 16 || value === 18 || value === 20;
}

export function AppearanceProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("sprintquiz-appearance") ?? "null");
      if (saved && typeof saved === "object") {
        setDark(saved.dark === true);
        if (isFontSize(saved.fontSize)) setFontSize(saved.fontSize);
      }
    } catch { /* Keep defaults when browser storage is unavailable. */ }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", dark);
    delete document.documentElement.dataset['font'];
    document.documentElement.dataset['fontSize'] = String(fontSize);
    try {
      localStorage.setItem("sprintquiz-appearance", JSON.stringify({ dark, fontSize }));
    } catch { /* Appearance still works without browser storage. */ }
  }, [dark, fontSize, ready]);

  return <AppearanceContext.Provider value={{ dark, fontSize, setDark, setFontSize }}>{children}</AppearanceContext.Provider>;
}

export function useAppearance() {
  const context = useContext(AppearanceContext);
  if (!context) throw new Error("AppearanceProvider is required");
  return context;
}