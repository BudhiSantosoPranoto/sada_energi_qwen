import { Sun, Square as Panel, Zap as Inverter, Home, Plug, ChevronDown } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const steps = [
  {
    icon: Sun,
    title: "Matahari",
    desc: "Sumber energi terbarukan yang tersedia setiap hari di Indonesia.",
  },
  {
    icon: Panel,
    title: "Panel Surya",
    desc: "Mengubah cahaya matahari menjadi arus listrik searah (DC).",
  },
  {
    icon: Inverter,
    title: "Inverter",
    desc: "Mengubah arus DC menjadi arus AC yang bisa dipakai perangkat rumah.",
  },
  {
    icon: Home,
    title: "Rumah",
    desc: "Listrik disalurkan ke panel utama rumah Anda.",
  },
  {
    icon: Plug,
    title: "Peralatan Listrik",
    desc: "AC, kulkas, lampu, dan perangkat lain bekerja seperti biasa.",
  },
];

export function SolarIntro() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-brand-green-50/40 to-background py-20 lg:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Cara Kerja PLTS"
          title="Energi Surya, Dijelaskan Secara Sederhana"
          description="PLTS bukan ilmu sihir — ini adalah cara alami memanfaatkan cahaya matahari yang sudah jatuh di atap rumah Anda setiap hari. Inilah alurnya, langkah demi langkah."
        />

        {/* Diagram */}
        <Reveal delay={150} className="mt-14">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-10 lg:p-12">
            <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="group relative flex flex-col items-center gap-3 text-center lg:px-2"
                >
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-card sm:h-20 sm:w-20">
                    <step.icon className="h-7 w-7 sm:h-9 sm:w-9" strokeWidth={1.7} />
                    {/* Number badge */}
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-foreground ring-2 ring-white">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-sm font-semibold text-foreground sm:text-base">
                      {step.title}
                    </span>
                    <span className="hidden text-xs leading-relaxed text-muted-foreground sm:block max-w-[180px]">
                      {step.desc}
                    </span>
                  </div>

                  {/* Arrow connector */}
                  {i < steps.length - 1 && (
                    <>
                      {/* Mobile: vertical chevron */}
                      <ChevronDown className="absolute -bottom-3 left-1/2 h-4 w-4 -translate-x-1/2 text-primary/30 lg:hidden" />
                      {/* Desktop: horizontal chevron */}
                      <ChevronDown className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-[-90deg] text-primary/30 lg:block" />
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Secondary technical detail */}
        <Reveal delay={250} className="mt-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary/70">
                Dirancang untuk Rumah Anda
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sistem tidak ditentukan hanya dari luas atap. Kami menghitung
                berdasarkan profil konsumsi listrik, arah hadap atap, dan
                kondisi properti Anda.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary/70">
                Bukan Sistem One-Size-Fits-All
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tiga jenis sistem umum — on-grid, hybrid, dan off-grid —
                punya kebutuhan, manfaat, dan pertimbangan biaya yang berbeda.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary/70">
                Diskusikan Dulu
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sebelum memilih sistem, sebaiknya diskusikan dulu kebutuhan
                rumah Anda. Kami bantu memetakan opsi yang paling masuk akal.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
