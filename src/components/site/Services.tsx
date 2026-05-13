import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import bath from "@/assets/bathroom.jpg";
import paint from "@/assets/painting.jpg";
import gypsum from "@/assets/gypsum.jpg";
import light from "@/assets/lighting.jpg";
import tile from "@/assets/tiling.jpg";
import plumb from "@/assets/plumbing.jpg";
import garden from "@/assets/garden.jpg";
import { useI18n, WHATSAPP_BASE } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";

const items = [
  { key: "bathroom", img: bath },
  { key: "painting", img: paint },
  { key: "gypsum",   img: gypsum },
  { key: "lighting", img: light },
  { key: "tiling",   img: tile },
  { key: "plumbing", img: plumb },
  { key: "garden",   img: garden },
];

export default function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="container-luxe">
        <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} />

        <div className="space-y-24 sm:space-y-32">
          {items.map((it, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={it.key}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`grid gap-10 lg:grid-cols-12 lg:items-center ${reverse ? "lg:[direction:rtl]" : ""}`}
                style={{ direction: "inherit" }}
              >
                <div className={`lg:col-span-7 ${reverse ? "lg:[direction:ltr]" : ""}`} style={{ direction: "inherit" }}>
                  <div className="group relative overflow-hidden rounded-[28px] shadow-luxe">
                    <img src={it.img} alt={t(`services.list.${it.key}.title`)}
                      loading="lazy" width={1280} height={896}
                      className="aspect-[5/4] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent" />
                    <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-foreground">
                      0{i + 1} / 0{items.length}
                    </span>
                  </div>
                </div>
                <div className={`lg:col-span-5 ${reverse ? "lg:[direction:ltr]" : ""}`} style={{ direction: "inherit" }}>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--bronze)]">— Service</span>
                  <h3 className="mt-3 font-display text-3xl sm:text-4xl">{t(`services.list.${it.key}.title`)}</h3>
                  <p className="mt-4 text-muted-foreground">{t(`services.list.${it.key}.desc`)}</p>
                  <ul className="mt-6 space-y-2 text-sm">
                    {["f1","f2","f3"].map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-[var(--bronze)]" />
                        {t(`services.list.${it.key}.${f}`)}
                      </li>
                    ))}
                  </ul>
                  <a href={`${WHATSAPP_BASE}?text=${encodeURIComponent(t(`services.list.${it.key}.title`))}`}
                    target="_blank" rel="noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-semibold uppercase tracking-[0.2em] hover:border-[var(--bronze)] hover:text-[var(--bronze)]">
                    {t("services.discover")}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}