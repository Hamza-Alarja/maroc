import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";

import { useI18n, WHATSAPP_BASE } from "@/lib/i18n";

function useCounter(target: number, duration = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setN(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return n;
}

export default function Hero() {
  const { t, dir } = useI18n();
  const projects = useCounter(1200);
  const clients = useCounter(500);
  const years = useCounter(10);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/85" />
      <div className="absolute inset-0 moroccan-pattern opacity-25" />

      {/* floating glints */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[var(--gold)]/70"
          style={{ top: `${(i * 53) % 100}%`, left: `${(i * 37) % 100}%` }}
          animate={{ y: [0, -16, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <div className="container-luxe relative z-10 flex min-h-[100svh] flex-col justify-center pb-24 pt-32">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]">
            <Sparkles className="h-3 w-3" /> {t("hero.eyebrow")}
          </span>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] text-white sm:text-3xl md:text-4xl">
            {t("hero.title")}
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base text-white/75 sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 ">
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--gradient-gold)] px-6 py-4 text-sm font-bold text-white shadow-luxe transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" color="#FFF" />
              {t("hero.ctaWhatsapp")}
              <ArrowRight
                className={`h-4 w-4 text-white transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" : ""}`}
              />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/70">
            {[
              { i: <ShieldCheck className="h-3.5 w-3.5" />, l: t("hero.trust1") },
              { i: <Clock className="h-3.5 w-3.5" />, l: t("hero.trust3") },
              { i: <MapPin className="h-3.5 w-3.5" />, l: t("hero.trust4") },
            ].map((x) => (
              <span key={x.l} className="inline-flex items-center gap-2 uppercase tracking-[0.2em]">
                <span className="text-[var(--gold)]">{x.i}</span>
                {x.l}
              </span>
            ))}
          </div>
        </motion.div>

        {/* counters strip */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4 sm:gap-10 justify-center text-center"
        >
          {[
            { v: `+${projects}`, l: t("hero.stat1") },
            { v: `+${clients}`, l: t("hero.stat2") },
            { v: `${years}+`, l: t("hero.stat3") },
            { v: `24/7`, l: t("hero.stat4") },
          ].map((s) => (
            <div key={s.l} className="flex flex-col items-center">
              <div className="font-display text-4xl text-white sm:text-5xl">
                <span className="gradient-text">{s.v}</span>
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-white/60">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
