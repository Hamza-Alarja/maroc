import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";

export type Lang = "fr" | "ar";
const dict = { fr, ar } as const;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<Ctx | null>(null);

function get(obj: any, path: string): string {
  return path.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), obj) ?? path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "fr" || stored === "ar") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang: setLangState,
    t: (key: string) => get(dict[lang], key),
    dir: lang === "ar" ? "rtl" : "ltr",
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be inside I18nProvider");
  return ctx;
}

export const WHATSAPP_NUMBER = "212666202440";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;