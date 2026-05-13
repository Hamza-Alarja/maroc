// import { motion } from "framer-motion";
// import { MessageCircle, ArrowRight } from "lucide-react";
// import heroImg from "@/assets/hero.jpg";
// import { useI18n, WHATSAPP_BASE } from "@/lib/i18n";

// export default function FinalCTA() {
//   const { t } = useI18n();
//   return (
//     <section className="relative overflow-hidden">
//       <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/90" />
//       <div className="container-luxe relative py-28 text-center sm:py-40">
//         <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
//           className="mx-auto max-w-3xl text-balance font-display text-4xl text-white sm:text-6xl">
//           {t("finalCta.title")}
//         </motion.h2>
//         <p className="mx-auto mt-5 max-w-xl text-white/70">{t("finalCta.subtitle")}</p>
//         <div className="mt-10 flex flex-wrap justify-center gap-3">
//           <a href={WHATSAPP_BASE} target="_blank" rel="noreferrer"
//             className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-7 py-4 text-sm font-bold text-charcoal shadow-luxe">
//             <MessageCircle className="h-4 w-4" /> {t("finalCta.whatsapp")}
//           </a>
//           <a href="#services"
//             className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur hover:bg-white/10">
//             {t("finalCta.services")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }