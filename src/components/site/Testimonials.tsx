// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import { Star, Quote } from "lucide-react";
// import { useI18n } from "@/lib/i18n";
// import SectionHeader from "./SectionHeader";

// export default function Testimonials() {
//   const { t, lang } = useI18n();
//   const items = (lang === "ar"
//     ? [
//         { name: "سلمى ب.", city: "الدار البيضاء", service: "حمام", text: "فريق شديد الدقة. النتيجة فاقت ما تخيلته." },
//         { name: "كريم ح.", city: "مراكش", service: "سقف جبس", text: "عمل نظيف، تسليم في الوقت. تفاصيل الإضاءة رائعة." },
//         { name: "نادية و.", city: "الرباط", service: "صباغة", text: "تشطيبات مذهلة ونصائح قيّمة في اختيار الألوان." },
//         { name: "ياسين أ.", city: "طنجة", service: "حديقة", text: "حوّلوا الفناء إلى فضاء حياة حقيقي. شكراً لكم." },
//       ]
//     : [
//         { name: "Salma B.", city: "Casablanca", service: "Salle de bain", text: "Une équipe d'une grande exigence. Le résultat dépasse ce que j'avais imaginé." },
//         { name: "Karim H.", city: "Marrakech", service: "Plafond gypse", text: "Travail propre, livré dans les délais. Les détails de lumière sont superbes." },
//         { name: "Nadia O.", city: "Rabat", service: "Peinture", text: "Finitions impeccables, conseils précieux sur les couleurs." },
//         { name: "Yassine A.", city: "Tanger", service: "Jardin", text: "Un patio transformé en véritable lieu de vie. Bravo." },
//       ]);

//   return (
//     <section className="relative py-28 sm:py-36">
//       <div className="container-luxe">
//         <SectionHeader eyebrow={t("testi.eyebrow")} title={t("testi.title")} align="center" />
//         <Swiper
//           modules={[Pagination, Autoplay, EffectFade]}
//           effect="fade"
//           fadeEffect={{ crossFade: true }}
//           autoplay={{ delay: 5500 }}
//           pagination={{ clickable: true }}
//           loop
//           className="mx-auto max-w-3xl"
//         >
//           {items.map((it, i) => (
//             <SwiperSlide key={i}>
//               <div className="relative mx-auto rounded-[28px] border border-border bg-card p-10 text-center shadow-luxe sm:p-14">
//                 <Quote className="mx-auto h-10 w-10 text-[var(--bronze)]/40" />
//                 <p className="mx-auto mt-6 max-w-2xl text-balance font-display text-2xl leading-snug sm:text-3xl">
//                   “{it.text}”
//                 </p>
//                 <div className="mt-8 flex items-center justify-center gap-1 text-[var(--gold)]">
//                   {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
//                 </div>
//                 <div className="mt-5 flex items-center justify-center gap-3">
//                   <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--gradient-gold)] font-display text-lg text-charcoal">
//                     {it.name.charAt(0)}
//                   </div>
//                   <div className="text-left rtl:text-right">
//                     <div className="font-semibold">{it.name}</div>
//                     <div className="text-xs text-muted-foreground">{it.service} · {it.city}</div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="h-12" />
//       </div>
//     </section>
//   );
// }