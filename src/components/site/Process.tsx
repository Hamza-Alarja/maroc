import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MessageCircle, Search, PenTool, Hammer, ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useRef, useState } from "react";

const STEPS = [
  { k: "s1", I: MessageCircle, color: "from-blue-500 to-cyan-400" },
  { k: "s2", I: Search, color: "from-purple-500 to-pink-400" },
  { k: "s3", I: PenTool, color: "from-amber-500 to-orange-400" },
  { k: "s4", I: Hammer, color: "from-emerald-500 to-teal-400" },
];

export default function Process() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-gradient-to-br from-[#2b1810] via-[#3a2418] to-[#1f120c] py-32 sm:py-44"
    >
      {/* Animated Background Elements */}
      <motion.div className="absolute inset-0 opacity-30" style={{ y: backgroundY }}>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-pink-500/10 to-indigo-500/10 blur-3xl" />
      </motion.div>

      {/* Grid Pattern Overlay - Fixed Version */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container-luxe relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              {t("process.eyebrow")}
            </span>
          </div>

          <h2 className="mt-8 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl">
            {t("process.title")}
          </h2>

          <motion.div
            className="mt-6 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative">
          {/* Advanced Connection Lines */}
          <svg
            className="absolute inset-0 hidden h-full w-full lg:block"
            style={{ pointerEvents: "none" }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="50%" stopColor="rgba(255,215,0,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0 50 L 100 50 L 200 50"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.I;
              const isHovered = hoveredStep === i;

              return (
                <motion.div
                  key={step.k}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 }}
                  onHoverStart={() => setHoveredStep(i)}
                  onHoverEnd={() => setHoveredStep(null)}
                >
                  {/* Glow Effect on Hover */}
                  <motion.div
                    className="absolute -inset-4 rounded-2xl bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${step.color.split(" ")[1]?.replace("from-", "") || "blue-500"}20, ${step.color.split(" ")[3]?.replace("to-", "") || "cyan-400"}20)`,
                    }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                  />

                  <div className="relative">
                    {/* Step Number with Animation */}
                    <motion.div
                      className="mb-6 inline-flex items-center justify-center rounded-2xl  p-0.5 backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="relative overflow-hidden rounded-xl  p-4">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20`}
                          animate={{ opacity: isHovered ? 0.2 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <Icon className="relative z-10 h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </motion.div>

                    {/* Step Number Badge */}
                    <motion.div
                      className="mb-4 text-xs font-bold tracking-wider text-slate-400"
                      animate={{ color: isHovered ? "rgb(251, 191, 36)" : "rgb(156, 163, 175)" }}
                    >
                      STEP 0{i + 1}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="mb-3 text-2xl font-bold tracking-tight text-white"
                      animate={{ x: isHovered ? 5 : 0 }}
                    >
                      {t(`process.${step.k}.t`)}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-slate-400 leading-relaxed"
                      animate={{ opacity: isHovered ? 1 : 0.7 }}
                    >
                      {t(`process.${step.k}.d`)}
                    </motion.p>

                    {/* Animated Arrow on Hover */}
                    <motion.div
                      className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-3 w-3" />
                    </motion.div>

                    {/* Progress Indicator */}
                    <motion.div
                      className="absolute -bottom-8 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          ></motion.div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500"
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
      />
    </section>
  );
}
