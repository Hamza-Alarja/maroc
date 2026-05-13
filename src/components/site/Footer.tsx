import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { useI18n, WHATSAPP_BASE } from "@/lib/i18n";

export default function Footer() {
  const { t, lang } = useI18n();
  const cities =
    lang === "ar"
      ? ["الدار البيضاء", "الرباط", "مراكش", "طنجة", "أكادير", "فاس"]
      : ["Casablanca", "Rabat", "Marrakech", "Tanger", "Agadir", "Fès"];
  const services = ["bathroom", "painting", "gypsum", "lighting", "tiling", "plumbing", "garden"];

  return (
    <footer className="relative overflow-hidden bg-[oklch(0.16_0.012_60)] text-background grain">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-[var(--gold)]/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />

      {/* Editorial CTA band */}
      <div className="container-luxe relative pt-24 pb-16">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
              — Atelier Maroc
            </span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {t("footer.tagline")}
            </h2>
          </div>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noreferrer"
            className="group mx-auto inline-flex items-center gap-3 rounded-full bg-[var(--gradient-gold)] px-7 py-4 text-sm font-semibold text-charcoal shadow-[0_20px_50px_-20px_oklch(0.78_0.13_78/0.6)] transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4 text-amber-50" />
            <span className="tracking-wide text-amber-50">WhatsApp</span>
            <ArrowUpRight className="h-4 w-4 text-amber-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Columns */}
        <div className="grid gap-14 pt-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--gradient-gold)] font-display text-xl font-bold text-charcoal">
                M
              </span>
              <div className="leading-tight">
                <div className="font-display text-2xl">Atelier Maroc</div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-background/45">
                  Luxury Finishing Studio
                </div>
              </div>
            </div>
            <ul className="mt-8 space-y-4 text-sm text-background/75">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10">
                  <Phone className="h-4 w-4 text-[var(--gold)]" />
                </span>{" "}
                +212 666 20 24 40
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10">
                  <Mail className="h-4 w-4 text-[var(--gold)]" />
                </span>{" "}
                contact@atelier-maroc.ma
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10">
                  <MapPin className="h-4 w-4 text-[var(--gold)]" />
                </span>{" "}
                Casablanca · Maroc
              </li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold)]">
              — {t("footer.services")}
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-background/75">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 transition hover:text-background"
                  >
                    <span className="h-px w-4 bg-white/25 transition-all group-hover:w-8 group-hover:bg-[var(--gold)]" />
                    {t(`services.list.${s}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold)]">
              — {t("footer.cities")}
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-background/75">
              {cities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold)]">— Studio</h4>
            <p className="mt-6 text-sm leading-relaxed text-background/65">
              {lang === "ar"
                ? "تصميم وتنفيذ بأعلى معايير الحرفية المغربية، من الفكرة الأولى إلى التسليم النهائي."
                : "Conception et exécution au plus haut niveau de l’artisanat marocain — de la première idée à la livraison."}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl border border-white/10 px-3 py-4">
                <div className="font-display text-2xl text-[var(--gold)]">+250</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-background/50">
                  Projets
                </div>
              </div>
              <div className="rounded-xl border border-white/10 px-3 py-4">
                <div className="font-display text-2xl text-[var(--gold)]">10+</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-background/50">
                  Années
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="container-luxe relative">
        <div className="select-none border-t border-white/10 pt-10">
          <div className="text-center font-display text-3xl leading-none tracking-[0.15em] text-white/[0.06] sm:text-6xl lg:text-7xl">
            ATELIER MAROC
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-luxe relative py-2">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-background/50 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Atelier Maroc. {t("footer.rights")}
          </span>
          <span className="uppercase tracking-[0.35em]">Crafted in Morocco · صُنع بفخر</span>
        </div>
      </div>
    </footer>
  );
}
