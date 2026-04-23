import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, type Lang, type Translations } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
  isRtl: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  function setLang(l: Lang) {
    setLangState(l);
  }

  const isRtl = lang === "ar";

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("dir", isRtl ? "rtl" : "ltr");
    html.setAttribute("lang", lang);
    if (isRtl) {
      html.classList.add("font-arabic");
    } else {
      html.classList.remove("font-arabic");
    }
  }, [lang, isRtl]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] as Translations, isRtl }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
