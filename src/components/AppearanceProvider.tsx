import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type FontChoice = "original" | "system" | "serif" | "mono";
type Appearance = {
  dark: boolean;
  font: FontChoice;
  setDark: (value: boolean) => void;
  setFont: (value: FontChoice) => void;
};
const AppearanceContext = createContext<Appearance | null>(null);

export function isFontChoice(value: unknown): value is FontChoice {
  return value === "original" || value === "system" || value === "serif" || value === "mono";
}

export function AppearanceProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const [font, setFont] = useState<FontChoice>("original");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("sprintquiz-appearance") ?? "null");
      if (saved && typeof saved === "object") {
        setDark(saved.dark === true);
        if (isFontChoice(saved.font)) setFont(saved.font);
      }
    } catch { /* Keep defaults when browser storage is unavailable. */ }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.dataset['font'] = font;
    try {
      localStorage.setItem("sprintquiz-appearance", JSON.stringify({ dark, font }));
    } catch { /* Appearance still works without browser storage. */ }
  }, [dark, font, ready]);

  return <AppearanceContext.Provider value={{ dark, font, setDark, setFont }}>{children}</AppearanceContext.Provider>;
}

export function useAppearance() {
  const context = useContext(AppearanceContext);
  if (!context) throw new Error("AppearanceProvider is required");
  return context;
}