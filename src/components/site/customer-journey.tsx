import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/site-config";

const steps = [
  {
    no: "01",
    title: "Konsultasi",
    desc: "Anda ceritakan kondisi rumah, kebutuhan, dan tujuan energi. Kami dengarkan tanpa kewajiban.",
    duration: "30 menit",
  },
  {
    no: "02",
    title: "Analisa Kebutuhan",
    desc: "Kami tinjau tagihan listrik dan profil pemakaian untuk memahami pola konsumsi Anda.",
    duration: "1–2 hari",
  },
  {
    no: "03",
    title: "Survey Lokasi",
    desc: "Tim kami datang untuk mengukur atap, arah hadap, dan kondisi instalasi yang sudah ada.",
    duration: "1 kunjungan",
  },
  {
    no: "04",
    title: "Desain Sistem",
    desc: "Kami rancang konfigurasi sistem yang sesuai — termasuk jumlah panel, inverter, dan tata letak.",
    duration: "3–5 hari",
  },
  {
    no: "05",
    title: "Penawaran",
    desc: "Anda menerima penawaran transparan: spesifikasi, garansi, jadwal, dan biaya — tanpa biaya tersembunyi.",
    duration: "1 dokumen",
  },
  {
    no: "06",
    title: "Instalasi",
    desc: "Tim instalasi memasang sistem sesuai standar keselamatan dan tata cara pengerjaan yang rapi.",
    duration: "2–4 hari",
  },
  {
    no: "07",
    title: "Commissioning",
    desc: "Sistem diuji, dikalibrasi, dan dihubungkan. Kami pastikan semua bekerja optimal sebelum diserahterimakan.",
    duration: "½ hari",
  },
  {
    no: "08",
    title: "Monitoring & After-Sales",
    desc: "Setelah aktif, Anda tetap didampingi untuk monitoring, edukasi penggunaan, dan maintenance berkala.",
    duration: "Berkelanjutan",
  },
];

export function CustomerJourney() {
  return (
    <section id="proses" className="relative py-20 lg:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Proses Pemasangan"
          title="Dari Konsultasi Hingga Sistem Aktif — Tidak Serumit yang Dibayangkan"
          description="Anda tidak perlu menjadi ahli panel surya. Kami bantu dari perhitungan sampai sistem siap digunakan."
        />

        {/* Timeline */}
        <div className="mt-14">
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute left-0 right-0 top-7 h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />

              <div className="grid grid-cols-4 gap-6">
                {steps.map((s, i) => (
                  <Reveal key={s.no} delay={i * 80}>
                    <div className="relative flex flex-col gap-3">
                      {/* Node */}
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-card">
                        <span className="font-display text-base font-bold">
                          {s.no}
                        </span>
                        {/* Pulse */}
                        <span className="absolute -right-1 -top-1 flex h-3 w-3">
                          <span className="absolute h-3 w-3 rounded-full bg-accent opacity-60 animate-ping" />
                          <span className="h-3 w-3 rounded-full bg-accent" />
                        </span>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-baseline gap-2">
                          <h3 className="font-display text-base font-semibold text-foreground">
                            {s.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {s.desc}
                        </p>
                        <span className="mt-1 inline-flex w-fit rounded-full bg-primary/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                          {s.duration}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden">
            <ol className="relative flex flex-col gap-6 border-l-2 border-primary/15 pl-6">
              {steps.map((s, i) => (
                <Reveal key={s.no} delay={i * 60}>
                  <li className="relative">
                    {/* Node */}
                    <span className="absolute -left-[34px] flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xs font-bold text-primary-foreground shadow-soft">
                      {s.no}
                    </span>
                    <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display text-base font-semibold text-foreground">
                          {s.title}
                        </h3>
                        <span className="rounded-full bg-primary/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                          {s.duration}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <Reveal delay={200} className="mt-12 flex justify-center">
          <a
            href={waLink("Halo, saya ingin konsultasi mengenai proses pemasangan PLTS di rumah saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-all hover:border-primary/40 hover:shadow-card hover:-translate-y-0.5"
          >
            Mulai dari langkah pertama
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
