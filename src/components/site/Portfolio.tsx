// import { useMemo, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { X, MapPin } from "lucide-react";
// import bath from "@/assets/bathroom.jpg";
// import paint from "@/assets/painting.jpg";
// import gypsum from "@/assets/gypsum.jpg";
// import light from "@/assets/lighting.jpg";
// import tile from "@/assets/tiling.jpg";
// import garden from "@/assets/garden.jpg";
// import after from "@/assets/after-bathroom.jpg";
// import afterCeil from "@/assets/after-ceiling.jpg";
// import { useI18n } from "@/lib/i18n";
// import SectionHeader from "./SectionHeader";

// type Project = {
//   id: string;
//   img: string;
//   cat: string;
//   title: string;
//   city: string;
//   desc: string;
//   tall?: boolean;
// };

// export default function Portfolio() {
//   const { t } = useI18n();
//   const [active, setActive] = useState<Project | null>(null);

//   const items: Project[] = useMemo(
//     () => [
//       {
//         id: "1",
//         img: bath,
//         cat: "bathrooms",
//         title: "Riad Anfa Suite",
//         city: "Casablanca",
//         desc: "Marbre crème, robinetterie laiton.",
//         tall: true,
//       },
//       {
//         id: "2",
//         img: gypsum,
//         cat: "gypsum",
//         title: "Plafond Salon",
//         city: "Rabat",
//         desc: "Caissons géométriques rétroéclairés.",
//       },
//       {
//         id: "3",
//         img: paint,
//         cat: "painting",
//         title: "Stuc Vénitien",
//         city: "Marrakech",
//         desc: "Murs satinés ton sable.",
//       },
//       {
//         id: "4",
//         img: garden,
//         cat: "gardens",
//         title: "Jardin Atlantique",
//         city: "Tanger",
//         desc: "Allée pierre & palmiers.",
//         tall: true,
//       },
//       {
//         id: "5",
//         img: light,
//         cat: "lighting",
//         title: "Plan Lumière",
//         city: "Agadir",
//         desc: "Spots dimmables & lustres.",
//       },
//       {
//         id: "6",
//         img: tile,
//         cat: "tiling",
//         title: "Zellige Patio",
//         city: "Fès",
//         desc: "Mosaïque artisanale.",
//       },
//       {
//         id: "7",
//         img: after,
//         cat: "bathrooms",
//         title: "Master Bath",
//         city: "Meknès",
//         desc: "Baignoire îlot & marbre.",
//       },
//       {
//         id: "8",
//         img: afterCeil,
//         cat: "gypsum",
//         title: "Ceiling Etoile",
//         city: "Oujda",
//         desc: "Étoile centrale en gypse.",
//       },
//     ],
//     [],
//   );

//   const visible = items;
//   return (
//     <section id="portfolio" className="relative py-28 sm:py-36">
//       <div className="container-luxe">
//         <SectionHeader eyebrow={t("portfolio.eyebrow")} title={t("portfolio.title")} />

//         <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
//           {visible.map((p, i) => (
//             <motion.button
//               key={p.id}
//               onClick={() => setActive(p)}
//               initial={{ y: 30, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
//               className="group mb-5 block w-full overflow-hidden rounded-2xl shadow-soft text-left break-inside-avoid"
//             >
//               <div className="relative">
//                 <img
//                   src={p.img}
//                   alt={p.title}
//                   loading="lazy"
//                   className={`w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                 <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//                   <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">
//                     {t("portfolio.view")}
//                   </div>
//                   <div className="mt-1 font-display text-xl">{p.title}</div>
//                   <div className="text-xs text-white/70 inline-flex items-center gap-1.5 mt-1">
//                     <MapPin className="h-3 w-3" /> {p.city}
//                   </div>
//                 </div>
//               </div>
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {active && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActive(null)}
//             className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-background"
//             >
//               <button
//                 onClick={() => setActive(null)}
//                 className="absolute end-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-foreground shadow-soft"
//               >
//                 <X className="h-4 w-4" />
//               </button>
//               <img
//                 src={active.img}
//                 alt={active.title}
//                 className="max-h-[60vh] w-full object-cover"
//               />
//               <div className="p-6 sm:p-8">
//                 <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--bronze)]">
//                   {active.city}
//                 </div>
//                 <h3 className="mt-2 font-display text-3xl">{active.title}</h3>
//                 <p className="mt-2 text-muted-foreground">{active.desc}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }
