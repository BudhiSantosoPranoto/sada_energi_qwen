import {
  Home,
  Wrench,
  HardHat,
  Activity,
  ShieldCheck,
  Headphones,
  Check,
  Sun,
  Zap,
  Battery,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { siteConfig } from "@/lib/site-config";

const segments = [
  { title: "Rumah", desc: "PLTS untuk kebutuhan listrik rumah tangga" },
  { title: "Komersial", desc: "Pabrik, gudang, dan bangunan komersial" },
  { title: "Industri", desc: "Fasilitas industri dengan konsumsi tinggi" },
  { title: "Institusi", desc: "Sekolah, kantor pemerintah, rumah sakit" },
  { title: "Kapal", desc: "Pesiar dan yacht dengan kebutuhan energi mandiri" },
];

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
    desc: `Kami menggunakan ${siteConfig.components.panels.toLowerCase()}, ${siteConfig.components.inverter.toLowerCase()}, ${siteConfig.components.battery.toLowerCase()}, dan ${siteConfig.components.mounting.toLowerCase()}. Spesifikasi aktual kami transparan.`,
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

        {/* Segments grid - 5 cards */}
        <Reveal delay={100}>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {segments.map((seg) => (
              <div
                key={seg.title}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-4 text-center shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Home className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <h3 className="mt-2 font-display text-sm font-semibold text-foreground">
                  {seg.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{seg.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Reasons grid - 4 cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 80}>
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

        {/* Warranty grid - 4 cards */}
        <Reveal delay={200}>
          <div className="mt-12">
            <h3 className="mb-4 text-center font-display text-xl font-semibold text-foreground">
              Garansi yang Kami Berikan
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {/* Maintenance */}
              <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
                <Wrench className="mx-auto h-8 w-8 text-primary" strokeWidth={1.7} />
                <h4 className="mt-2 font-display text-sm font-semibold text-foreground">Maintenance</h4>
                <p className="mt-1 text-lg font-bold text-primary">{siteConfig.warranty.maintenance}</p>
              </div>
              {/* Panel PV */}
              <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
                <Sun className="mx-auto h-8 w-8 text-primary" strokeWidth={1.7} />
                <h4 className="mt-2 font-display text-sm font-semibold text-foreground">Panel PV</h4>
                <p className="mt-1 text-sm font-semibold text-primary">{siteConfig.warranty.panel.split(",")[0]}</p>
                <p className="text-xs text-muted-foreground">{siteConfig.warranty.panel.split(",")[1]}</p>
              </div>
              {/* Inverter */}
              <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
                <Zap className="mx-auto h-8 w-8 text-primary" strokeWidth={1.7} />
                <h4 className="mt-2 font-display text-sm font-semibold text-foreground">Inverter</h4>
                <p className="mt-1 text-lg font-bold text-primary">{siteConfig.warranty.inverter}</p>
              </div>
              {/* Battery */}
              <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
                <Battery className="mx-auto h-8 w-8 text-primary" strokeWidth={1.7} />
                <h4 className="mt-2 font-display text-sm font-semibold text-foreground">Baterai</h4>
                <p className="mt-1 text-lg font-bold text-primary">{siteConfig.warranty.battery}</p>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {siteConfig.warranty.contractNote}
            </p>
          </div>
        </Reveal>

        {/* Components trust card */}
        <Reveal delay={300}>
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-soft lg:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Komponen dengan Spek Riil
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-primary/5 p-4">
                <Sun className="h-6 w-6 text-primary" strokeWidth={1.7} />
                <h4 className="mt-2 font-semibold text-foreground">Panel Monocrystalline 620 Wp</h4>
                <p className="mt-1 text-xs text-muted-foreground">Garansi 12 tahun, performa hingga 25 tahun</p>
              </div>
              <div className="rounded-2xl bg-primary/5 p-4">
                <Zap className="h-6 w-6 text-primary" strokeWidth={1.7} />
                <h4 className="mt-2 font-semibold text-foreground">Inverter & Baterai LIVOLTEK</h4>
                <p className="mt-1 text-xs text-muted-foreground">LFP, BMS, efisiensi hingga 98,2%</p>
              </div>
              <div className="rounded-2xl bg-primary/5 p-4">
                <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.7} />
                <h4 className="mt-2 font-semibold text-foreground">ACDB Lengkap</h4>
                <p className="mt-1 text-xs text-muted-foreground">MCB AC, MCB DC, SDP, Arrester</p>
              </div>
              <div className="rounded-2xl bg-primary/5 p-4">
                <HardHat className="h-6 w-6 text-primary" strokeWidth={1.7} />
                <h4 className="mt-2 font-semibold text-foreground">Mounting & Kabel</h4>
                <p className="mt-1 text-xs text-muted-foreground">Rail aluminium, kabel DC/AC, grounding</p>
              </div>
              <div className="rounded-2xl bg-primary/5 p-4">
                <Check className="h-6 w-6 text-primary" strokeWidth={1.7} />
                <h4 className="mt-2 font-semibold text-foreground">Standar SNI & IEC/UL</h4>
                <p className="mt-1 text-xs text-muted-foreground">Semua komponen memenuhi standar internasional</p>
              </div>
              <div className="rounded-2xl bg-primary/5 p-4">
                <Home className="h-6 w-6 text-primary" strokeWidth={1.7} />
                <h4 className="mt-2 font-semibold text-foreground">Analisa Struktur</h4>
                <p className="mt-1 text-xs text-muted-foreground">Perhitungan beban angin & kekuatan atap sebelum instalasi</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
