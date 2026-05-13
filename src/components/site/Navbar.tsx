import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { useI18n, WHATSAPP_BASE } from "@/lib/i18n";

export default function Navbar() {
  const { t, lang, setLang, dir } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t("nav.services") },
    { href: "#styles",   label: t("nav.styles") },
    { href: "#portfolio",label: t("nav.portfolio") },
    { href: "#process",  label: t("nav.process") },
    { href: "#contact",  label: t("nav.contact") },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className={`container-luxe transition-all duration-500 ${
          scrolled
            ? "rounded-full glass shadow-soft"
            : "bg-transparent"
        }`}>
          <div className="flex items-center justify-between gap-6 px-4 py-3">
            <a href="#" className="group flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gradient-gold)] text-charcoal font-display text-lg font-bold shadow-soft">
                M
              </span>
              <span className="hidden sm:block">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Maison</span>
                <span className="block font-display text-lg leading-none text-foreground">Atelier Maroc</span>
              </span>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {links.map((l) => (
                <a key={l.href} href={l.href}
                  className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gradient-gold)] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang(lang === "ar" ? "fr" : "ar")}
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all hover:border-[var(--bronze)] hover:text-[var(--bronze)]"
                aria-label="Switch language"
              >
                <Globe className="h-3.5 w-3.5" />
                {lang === "ar" ? "FR" : "AR"}
              </button>
              <a
                href={WHATSAPP_BASE}
                target="_blank" rel="noreferrer"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                {t("nav.whatsapp")}
              </a>
              <button
                onClick={() => setOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grain"
            dir={dir}
          >
            <div className="absolute inset-0 bg-[oklch(0.12_0.012_60/0.98)]" />
            <div className="relative flex h-full flex-col px-8 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-background">Atelier Maroc</span>
                <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-background">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-16 flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.08 * i, duration: 0.5 }}
                    className="group flex items-baseline gap-4 border-b border-white/10 py-5 font-display text-4xl text-background hover:text-[var(--gold)]"
                  >
                    <span className="text-xs text-white/40">0{i + 1}</span>
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto pb-10 flex flex-col gap-3">
                <button
                  onClick={() => { setLang(lang === "ar" ? "fr" : "ar"); }}
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-background"
                >
                  <Globe className="me-2 inline h-4 w-4" />
                  {lang === "ar" ? "Français" : "العربية"}
                </button>
                <a href={WHATSAPP_BASE} target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-gold)] px-5 py-4 text-sm font-bold text-charcoal">
                  <MessageCircle className="h-4 w-4" /> {t("nav.whatsapp")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}