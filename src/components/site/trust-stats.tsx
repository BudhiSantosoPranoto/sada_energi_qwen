import { Reveal } from "./reveal";
import { AnimatedCounter } from "./animated-counter";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck, Building2, MapPin, Clock } from "lucide-react";

const partnerBrands = [
  "Tier-1 Panel",
  "Hybrid Inverter",
  "LiFePO4 Battery",
  "SNI Mounting",
];

export function TrustStats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-green-900 via-primary to-brand-green-700 py-20 lg:py-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-brand relative z-10">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent/70" />
            Jejak Kami
            <span className="h-px w-6 bg-accent/70" />
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Kepercayaan Dibangun dari Bukti Nyata
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
            Angka di bawah adalah ringkasan perjalanan kami — ganti dengan data
            bisnis aktual Anda sebelum publikasi.
          </p>
        </Reveal>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {siteConfig.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="flex flex-col items-center gap-2 rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <span className="font-display text-3xl font-bold text-accent sm:text-4xl lg:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-white/70 sm:text-sm">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trust pillars */}
        <Reveal delay={200} className="mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Garansi Pengerjaan",
                desc: "Backed by komitmen tertulis",
              },
              {
                icon: Building2,
                title: "Berbagai Jenis Atap",
                desc: "Genteng, metal, flat roof",
              },
              {
                icon: MapPin,
                title: "Area Layanan",
                desc: siteConfig.contact.areaLayanan,
              },
              {
                icon: Clock,
                title: "Jam Operasional",
                desc: siteConfig.contact.jamOperasional,
              },
            ].map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <p.icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">{p.title}</span>
                  <span className="mt-0.5 text-xs leading-relaxed text-white/70">
                    {p.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Partner / brand placeholder */}
        <Reveal delay={300} className="mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Komponen & Mitra Teknis
              </span>
              <p className="max-w-2xl text-xs leading-relaxed text-white/60">
                Logo brand mitra akan tampil di sini setelah Anda menambahkan
                brand aktual yang digunakan. Kami tidak menampilkan logo fiktif
                demi menjaga kepercayaan.
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                {partnerBrands.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/85"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
