import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Globe } from "lucide-react";
import { useI18n, WHATSAPP_BASE } from "@/lib/i18n";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`container-luxe transition-all duration-500 ${
          scrolled ? "rounded-full glass shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-3 py-3 sm:gap-6 sm:px-4">
          <a href="#" className="group flex min-w-0 items-center gap-2">
            <span
              className={`block min-w-0 transition-colors duration-300 ${
                scrolled ? "text-black" : "text-amber-50"
              }`}
            >
              <span className="block text-[9px] font-bold uppercase tracking-[0.22em] sm:text-[10px] sm:tracking-[0.3em]">
                Maison
              </span>

              <span className="block truncate font-bold font-display text-sm leading-none sm:text-lg">
                Atelier Maroc
              </span>
            </span>
          </a>

          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => setLang(lang === "ar" ? "fr" : "ar")}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all hover:border-[var(--bronze)] hover:text-[var(--bronze)]"
              aria-label="Switch language"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === "ar" ? "FR" : "AR"}
            </button>

            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-2 text-xs font-semibold text-background shadow-soft transition-transform hover:-translate-y-0.5 sm:gap-2 sm:px-4 sm:text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden xs:inline sm:inline">{t("nav.whatsapp")}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
