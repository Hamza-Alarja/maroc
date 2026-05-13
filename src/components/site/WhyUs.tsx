import { motion } from "framer-motion";
import { Zap, Award, Gem, ShieldCheck, BadgeDollarSign, Sparkles, Users, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";

const ICONS = [Zap, Award, Gem, ShieldCheck, BadgeDollarSign, Sparkles, Users, MapPin];

export default function WhyUs() {
  const { t } = useI18n();
  const items = ["i1","i2","i3","i4","i5","i6","i7","i8"];
  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-luxe">
        <SectionHeader eyebrow={t("why.eyebrow")} title={t("why.title")} />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((k, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div key={k}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-background p-8 transition-colors hover:bg-[var(--cream)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-gold)] text-charcoal shadow-soft transition-transform group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl">{t(`why.items.${k}.t`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`why.items.${k}.d`)}</p>
                <span className="absolute end-6 top-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">0{i + 1}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}