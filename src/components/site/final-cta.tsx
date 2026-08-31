import { Reveal } from "./reveal";
import { MessageCircle, Calculator, Sparkles } from "lucide-react";
import { LeadForm } from "./lead-form";
import { waLink } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-gradient-to-br from-brand-green-900 via-primary to-brand-green-900 py-20 lg:py-28"
    >
      {/* Decorative ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        {/* Sun rays illustration */}
        <svg
          className="absolute right-0 top-0 h-48 w-48 text-accent/15"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 50 + 12 * Math.cos(angle);
            const y1 = 50 + 12 * Math.sin(angle);
            const x2 = 50 + 48 * Math.cos(angle);
            const y2 = 50 + 48 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            );
          })}
          <circle cx="50" cy="50" r="12" fill="currentColor" />
        </svg>
      </div>

      <div className="container-brand relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left — Emotional copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Konsultasi Gratis
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-6 text-balance font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Penasaran Seberapa Besar Potensi Energi Surya di Rumah Anda?
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                Tidak perlu langsung membeli. Konsultasikan kondisi rumah dan
                kebutuhan listrik Anda. Tim kami akan membantu memberikan
                gambaran solusi yang paling sesuai.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold text-foreground shadow-card transition-all hover:bg-accent/90 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  💬 Konsultasi Gratis via WhatsApp
                </a>
                <a
                  href="#simulasi"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5"
                >
                  <Calculator className="h-4 w-4" />
                  Hitung Potensi PLTS Saya
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <p className="mt-6 text-xs leading-relaxed text-white/60">
                Setiap percakapan awal gratis, tanpa kewajiban, dan tanpa
                tekanan untuk memutuskan. Kami percaya keputusan energi
                jangka panjang tidak boleh diambil terburu-buru.
              </p>
            </Reveal>
          </div>

          {/* Right — Lead form */}
          <Reveal direction="left" delay={250}>
            <div className="rounded-3xl border border-white/15 bg-white p-6 shadow-card backdrop-blur-sm sm:p-8">
              <div className="mb-6 flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                  Mulai Percakapan
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Ceritakan Kondisi Rumah Anda
                </h3>
                <p className="text-xs text-muted-foreground">
                  Isi form ini — kami lanjutkan diskusi via WhatsApp.
                </p>
              </div>

              <LeadForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
