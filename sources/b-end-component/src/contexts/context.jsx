/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const ThemeProvider = ({ children }) => {
  const [preferTheme, setPreferTheme] = useState("light");

  const lightSelect = "py-2 px-4 bg-slate-100 text-slate-700 rounded";
  const darkSelect = "py-2 px-4 bg-slate-500 text-slate-50 rounded";

  const lightMain =
    "bg-white min-h-screen text-slate-700 flex flex-col items-center justify-center transitions-color duration-500";
  const darkMain =
    "bg-slate-800 min-h-screen text-slate-50 flex flex-col items-center justify-center transitions-color duration-500";

  const value = {
    preferTheme,
    setPreferTheme,
    lightSelect,
    darkSelect,
    lightMain,
    darkMain,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
