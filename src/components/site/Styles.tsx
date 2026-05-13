import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classic from "@/assets/style-classic.jpg";
import modern from "@/assets/style-modern.jpg";
import neo from "@/assets/style-neoclassic.jpg";
import bath from "@/assets/bathroom.jpg";
import gypsum from "@/assets/gypsum.jpg";
import light from "@/assets/lighting.jpg";
import { useI18n } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";

const items = [
  { key: "classic", img: classic, palette: ["#7a4a22","#caa46a","#f3e6cf","#1f1a14"], thumbs: [classic, bath, gypsum, light] },
  { key: "modern",  img: modern,  palette: ["#1f1a14","#9c918a","#e9e2d6","#c9a878"], thumbs: [modern, light, gypsum, bath] },
  { key: "neo",     img: neo,     palette: ["#5a3b22","#b8895c","#ece2cf","#2a2118"], thumbs: [neo, gypsum, bath, light] },
];

export default function Styles() {
  const { t } = useI18n();
  return (
    <section id="styles" className="relative bg-[var(--cream)] py-28 sm:py-36 grain">
      <div className="container-luxe">
        <SectionHeader eyebrow={t("styles.eyebrow")} title={t("styles.title")} />

        <div className="space-y-20">
          {items.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="grid items-center gap-10 lg:grid-cols-12"
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <StyleGallery thumbs={s.thumbs} alt={t(`styles.items.${s.key}.title`)} />
              </div>
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="inline-block rounded-full bg-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-background">
                  {t(`styles.items.${s.key}.label`)}
                </span>
                <h3 className="mt-4 font-display text-3xl sm:text-4xl">{t(`styles.items.${s.key}.title`)}</h3>
                <p className="mt-4 text-muted-foreground">{t(`styles.items.${s.key}.desc`)}</p>

                <div className="mt-6 space-y-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--bronze)]">{t("styles.palette")}</div>
                    <div className="mt-2 flex gap-2">
                      {s.palette.map((c) => (
                        <span key={c} className="h-8 w-8 rounded-full ring-1 ring-black/10 shadow-soft" style={{ background: c }} />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--bronze)]">{t("styles.materials")}</div>
                      <div className="mt-1">{t(`styles.items.${s.key}.materials`)}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--bronze)]">{t("styles.suitable")}</div>
                      <div className="mt-1">{t(`styles.items.${s.key}.suitable`)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StyleGallery({ thumbs, alt }: { thumbs: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const current = thumbs[active];
  const go = (dir: 1 | -1) =>
    setActive((a) => (a + dir + thumbs.length) % thumbs.length);
  return (
    <div className="relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] shadow-luxe bg-[var(--cream)] touch-pan-y select-none">
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={current}
            src={current}
            alt={alt}
            decoding="async"
            draggable={false}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
          />
        </AnimatePresence>
        <motion.div
          className="absolute inset-0 z-10"
          drag="x"
          dragSnapToOrigin
          dragElastic={0.2}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50 || info.velocity.x < -300) go(1);
            else if (info.offset.x > 50 || info.velocity.x > 300) go(-1);
          }}
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[28px]" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {thumbs.map((th, idx) => {
          const isActive = idx === active;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`View image ${idx + 1}`}
              aria-pressed={isActive}
              className={`group relative aspect-[4/3] w-full overflow-hidden rounded-xl transition-all duration-500 ease-out ${
                isActive
                  ? "scale-[1.03] ring-2 ring-[var(--gold)] shadow-[0_18px_40px_-18px_oklch(0.78_0.13_78/0.55)]"
                  : "ring-1 ring-black/10 hover:ring-[var(--bronze)]/60"
              }`}
            >
              <img
                src={th}
                alt=""
                loading="lazy"
                decoding="async"
                className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                  isActive ? "scale-105" : "group-hover:scale-105"
                }`}
              />
              <span
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive ? "opacity-0" : "opacity-100 bg-foreground/15 group-hover:opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}