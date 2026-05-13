import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useI18n, WHATSAPP_BASE } from "@/lib/i18n";

export default function FloatingWhatsApp() {
  const { t } = useI18n();
  return (
    <>
      <motion.a
        href={WHATSAPP_BASE} target="_blank" rel="noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }}
        className="fixed bottom-6 end-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[var(--gradient-gold)] text-charcoal shadow-luxe md:grid"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[var(--gold)]/40" />
        <MessageCircle className="relative h-6 w-6" />
      </motion.a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-border bg-background/90 backdrop-blur md:hidden">
        <a href="tel:+212666202440" className="flex items-center justify-center gap-2 py-4 text-sm font-semibold">
          <Phone className="h-4 w-4" /> Call
        </a>
        <a href={WHATSAPP_BASE} target="_blank" rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-[var(--gradient-gold)] py-4 text-sm font-bold text-charcoal">
          <MessageCircle className="h-4 w-4" /> {t("nav.whatsapp")}
        </a>
      </div>
    </>
  );
}