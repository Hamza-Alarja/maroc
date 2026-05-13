import { useRef, useState } from "react";
import { motion } from "framer-motion";
import beforeBath from "@/assets/before-bathroom.jpg";
import afterBath from "@/assets/after-bathroom.jpg";
import beforeCeil from "@/assets/before-ceiling.jpg";
import afterCeil from "@/assets/after-ceiling.jpg";
import { useI18n, WHATSAPP_BASE } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";
import { MoveHorizontal, MessageCircle } from "lucide-react";

function Compare({ before, after, alt }: { before: string; after: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl shadow-luxe"
      onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      onClick={(e) => move(e.clientX)}
      style={{ direction: "ltr" }}
    >
      <img src={after} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="" className="h-full w-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }} />
      </div>
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -left-px w-0.5 bg-white shadow-[0_0_18px_rgba(0,0,0,0.6)]" />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white text-foreground shadow-luxe">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white">Before</span>
      <span className="absolute right-3 top-3 rounded-full bg-[var(--gradient-gold)] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-charcoal">After</span>
    </div>
  );
}

export default function BeforeAfter() {
  const { t } = useI18n();
  const items = [
    { key: "bath", before: beforeBath, after: afterBath },
    { key: "ceil", before: beforeCeil, after: afterCeil },
  ];
  return (
    <section className="relative bg-[var(--cream)] py-28 sm:py-36 grain">
      <div className="container-luxe">
        <SectionHeader eyebrow={t("ba.eyebrow")} title={t("ba.title")} />
        <div className="grid gap-10 lg:grid-cols-2">
          {items.map((it) => (
            <motion.div key={it.key}
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Compare before={it.before} after={it.after} alt={t(`ba.items.${it.key}.title`)} />
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--bronze)]">{t(`ba.items.${it.key}.city`)}</div>
                  <h3 className="mt-1 font-display text-2xl">{t(`ba.items.${it.key}.title`)}</h3>
                  <div className="mt-1 text-xs text-muted-foreground">{t("ba.drag")}</div>
                </div>
                <a href={WHATSAPP_BASE} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background">
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}