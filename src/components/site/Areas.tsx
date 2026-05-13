import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";

export default function Areas() {
  const { t, lang } = useI18n();
  const cities =
    lang === "ar"
      ? ["الدار البيضاء", "الرباط", "مراكش", "طنجة", "أكادير", "فاس", "مكناس"]
      : ["Casablanca", "Rabat", "Marrakech", "Tanger", "Agadir", "Fès", "Meknès"];
  return (
    <section className="relative bg-[var(--cream)] py-28 sm:py-32 grain">
      <div className="container-luxe">
        <SectionHeader eyebrow={t("areas.eyebrow")} title={t("areas.title")} align="center" />
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {cities.map((c, i) => (
            <motion.span
              key={c}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium shadow-soft transition-all hover:-translate-y-0.5 hover:border-[var(--bronze)]"
            >
              <MapPin className="h-4 w-4 text-[var(--bronze)]" />
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
