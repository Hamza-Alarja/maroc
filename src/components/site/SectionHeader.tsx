import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow, title, align = "start",
}: { eyebrow: string; title: string; align?: "start" | "center" }) {
  return (
    <div className={`mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <motion.div
        initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[var(--bronze)]">
          <span className="h-px w-8 bg-[var(--bronze)]" />
          {eyebrow}
        </span>
        <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl">
          {title}
        </h2>
      </motion.div>
    </div>
  );
}