import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  const items = (lang === "ar"
    ? [
        { q: "ما هي أسعاركم؟", a: "تختلف الأسعار حسب نوع وحجم الأشغال. التسعير مجاني بعد المعاينة." },
        { q: "ما هو وقت الاستجابة؟", a: "نرد على واتساب في أقل من ساعة، من الإثنين إلى السبت." },
        { q: "ما هي المواد المستعملة؟", a: "نستعمل فقط مواد راقية من موردين موثوقين." },
        { q: "ما هي المدن المغطّاة؟", a: "الدار البيضاء، الرباط، مراكش، طنجة، أكادير، فاس، مكناس، وجدة وأكثر." },
        { q: "هل تقدمون ضماناً؟", a: "نعم، كل أشغالنا تستفيد من ضمان على اليد العاملة والمواد." },
        { q: "هل لديكم خدمة طارئة؟", a: "نعم، ندعمكم 24/7 للتدخلات الطارئة." },
      ]
    : [
        { q: "Quels sont vos tarifs ?", a: "Nos tarifs dépendent de la nature et du volume des travaux. Devis gratuit après visite technique." },
        { q: "Quel est votre délai de réponse ?", a: "Nous répondons sur WhatsApp en moins d'une heure." },
        { q: "Quels matériaux utilisez-vous ?", a: "Uniquement des matériaux haut de gamme, fournisseurs de confiance." },
        { q: "Quelles villes couvrez-vous ?", a: "Casablanca, Rabat, Marrakech, Tanger, Agadir, Fès, Meknès, Oujda et plus." },
        { q: "Offrez-vous une garantie ?", a: "Oui, tous nos travaux bénéficient d'une garantie." },
        { q: "Avez-vous un service d'urgence ?", a: "Oui, support 24/7 pour les interventions urgentes." },
      ]);
  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-luxe max-w-4xl">
        <SectionHeader eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
        <div className="divide-y divide-border rounded-3xl border border-border bg-card shadow-soft">
          {items.map((it, i) => (
            <div key={i}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left text-base font-medium hover:bg-[var(--cream)] sm:px-8 sm:text-lg">
                <span>{it.q}</span>
                <Plus className={`h-5 w-5 shrink-0 text-[var(--bronze)] transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden">
                    <div className="px-6 pb-6 text-sm text-muted-foreground sm:px-8">{it.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}