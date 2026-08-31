import {
  Home,
  Wrench,
  HardHat,
  Activity,
  ShieldCheck,
  Headphones,
  Check,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { siteConfig } from "@/lib/site-config";

const reasons = [
  {
    icon: Home,
    title: "Dirancang Sesuai Rumah Anda",
    desc: "Tidak menggunakan konfigurasi yang sama untuk semua rumah. Setiap sistem kami hitung berdasarkan profil konsumsi, kondisi atap, dan tujuan energi jangka panjang Anda.",
    points: ["Perhitungan berbasis data riil", "Bukan paket template"],
  },
  {
    icon: Wrench,
    title: "Komponen Berkualitas",
    desc: `Kami menggunakan ${siteConfig.components.panels.toLowerCase()}, ${siteConfig.components.inverter.toLowerCase()}, ${siteConfig.components.battery.toLowerCase()}, dan ${siteConfig.components.mounting.toLowerCase()}. Spesifikasi aktual kami transparan. (Ganti dengan brand aktual yang digunakan bisnis)`,
    points: ["Panel Tier-1", "Inverter terstandar", "Mounting anti-karat"],
  },
  {
    icon: HardHat,
    title: "Instalasi Profesional",
    desc: "Tim instalasi kami mengikuti standar keselamatan kerja dan tata cara pemasangan yang rapi — termasuk manajemen kabel, grounding, dan penandaan sesuai SNI.",
    points: ["Kabel rapi & tertata", "Grounding sesuai standar", "Pekerjaan bersih"],
  },
  {
    icon: Activity,
    title: "Monitoring Performa",
    desc: "Setiap sistem dilengkapi aplikasi monitoring sehingga Anda bisa melihat produksi harian, bulanan, dan tahunan. Performa tidak menjadi misteri.",
    points: ["Aplikasi mobile", "Notifikasi anomaly", "Laporan produksi"],
  },
  {
    icon: ShieldCheck,
    title: "Garansi Transparan",
    desc: "Kami jelaskan garansi panel, garansi inverter, dan garansi pengerjaan secara terpisah dan jelas — tanpa bahasa yang membingungkan. (Nilai garansi mengikuti spesifikasi brand).",
    points: ["Garansi panel terpisah", "Garansi inverter", "Garansi pengerjaan"],
  },
  {
    icon: Headphones,
    title: "After-Sales yang Aktif",
    desc: "Pelanggan tetap mendapatkan support setelah instalasi selesai — mulai dari pertanyaan operasional, maintenance berkala, hingga evaluasi performa tahunan.",
    points: ["Maintenance berkala", "Edukasi penggunaan", "Evaluasi performa"],
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-brand-cream to-background py-20 lg:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Mengapa Memilih Kami"
          title="Kami Menjawab Kekhawatiran yang Sering Muncul"
          description="Memasang PLTS adalah keputusan jangka panjang. Berikut hal-hal yang biasanya menjadi pertimbangan calon pelanggan — dan bagaimana kami menyikapinya."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary/25 hover:shadow-card hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <r.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {r.desc}
                  </p>
                </div>

                <ul className="mt-auto flex flex-col gap-1.5 pt-2">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-foreground/80">
                      <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
