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

  // Convert Western digits (0-9) to Arabic-Indic digits (٠-٩) in all visible
  // text nodes when Arabic is active. Re-runs on DOM mutations so newly
  // rendered content is also localized. Reverts to Western digits otherwise.
  useEffect(() => {
    const AR = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    const toArabic = (s: string) => s.replace(/[0-9]/g, (d) => AR[+d]);
    const toLatin = (s: string) => s.replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));

    const SKIP_TAGS = new Set([
      "SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT",
      "CODE", "PRE", "SVG", "PATH",
    ]);

    function shouldSkip(node: Node | null): boolean {
      let n: Node | null = node;
      while (n) {
        if (n.nodeType === 1) {
          const el = n as Element;
          if (SKIP_TAGS.has(el.tagName)) return true;
          if (el.getAttribute && el.getAttribute("data-no-digit-convert") !== null) return true;
        }
        n = n.parentNode;
      }
      return false;
    }

    function walk(root: Node, transform: (s: string) => string) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.nodeValue) return NodeFilter.FILTER_REJECT;
          if (shouldSkip(node.parentNode)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      });
      let n: Node | null;
      while ((n = walker.nextNode())) {
        const txt = n.nodeValue || "";
        const next = transform(txt);
        if (next !== txt) n.nodeValue = next;
      }
    }

    if (isRtl) {
      walk(document.body, toArabic);
      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === "characterData" && m.target.nodeValue) {
            if (!shouldSkip(m.target.parentNode)) {
              const next = toArabic(m.target.nodeValue);
              if (next !== m.target.nodeValue) m.target.nodeValue = next;
            }
          } else if (m.type === "childList") {
            m.addedNodes.forEach((node) => {
              if (node.nodeType === 3 && node.nodeValue && !shouldSkip(node.parentNode)) {
                const next = toArabic(node.nodeValue);
                if (next !== node.nodeValue) node.nodeValue = next;
              } else if (node.nodeType === 1) {
                walk(node, toArabic);
              }
            });
          }
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });
      return () => observer.disconnect();
    } else {
      walk(document.body, toLatin);
    }
  }, [isRtl]);

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
