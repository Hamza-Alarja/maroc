import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useI18n, WHATSAPP_BASE } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";

export default function Booking() {
  const { t, lang } = useI18n();
  const services = lang === "ar"
    ? ["تشطيب الحمامات","صباغة","جبس وأسقف","إضاءة","زليج","سباكة","حدائق"]
    : ["Salles de bain","Peinture","Gypse & plafonds","Éclairage","Carrelage","Plomberie","Jardin"];
  const [f, setF] = useState({ name:"", phone:"", city:"", service:"", date:"", desc:"" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `${t("book.name")}: ${f.name}`,
      `${t("book.phone")}: ${f.phone}`,
      `${t("book.city")}: ${f.city}`,
      `${t("book.service")}: ${f.service}`,
      `${t("book.date")}: ${f.date}`,
      `${t("book.desc")}: ${f.desc}`,
    ].join("\n");
    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(lines)}`, "_blank");
  };

  const input = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[var(--bronze)] focus:ring-2 focus:ring-[var(--bronze)]/20";

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-luxe">
        <SectionHeader eyebrow={t("book.eyebrow")} title={t("book.title")} />
        <p className="-mt-8 mb-10 max-w-xl text-muted-foreground">{t("book.subtitle")}</p>

        <motion.form onSubmit={submit}
          initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
          className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-luxe sm:grid-cols-2 sm:p-10">
          <input required placeholder={t("book.name")} className={input}
            value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <input required placeholder={t("book.phone")} className={input}
            value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
          <input required placeholder={t("book.city")} className={input}
            value={f.city} onChange={(e) => setF({ ...f, city: e.target.value })} />
          <select required className={input} value={f.service} onChange={(e) => setF({ ...f, service: e.target.value })}>
            <option value="">{t("book.selectService")}</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <input type="date" required className={input}
            value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} />
          <textarea placeholder={t("book.desc")} rows={1} className={`${input} sm:col-span-1`}
            value={f.desc} onChange={(e) => setF({ ...f, desc: e.target.value })} />
          <button type="submit"
            className="sm:col-span-2 group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-background transition-transform hover:-translate-y-0.5">
            <Send className="h-4 w-4" /> {t("book.submit")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}