import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

/** Toggles the `dark` class on <html>. Persists choice in localStorage. */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("homico.theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("homico.theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
