"use client";

import { useMemo, useState } from "react";
import {
  Zap,
  MapPin,
  Home,
  Receipt,
  Sun,
  Battery,
  AreaChart,
  ArrowRight,
  Info,
  ShieldAlert,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { waLink } from "@/lib/site-config";
import { EmotionalReframing } from "./emotional-reframing";

// PLN tariff assumptions (IDR per kWh) — used only for cost estimation
const PLN_TARIFF_PER_KWH = 1467; // R1 tarif non-subsidi (placeholder)
const SOLAR_PROD_PER_KWP_PER_DAY = 4.2; // kWh per kWp per hari (placeholder, Indonesia average)
const PANEL_WP = 550; // Watt per panel
const AREA_PER_PANEL_M2 = 2.4; // m2 per panel (incl. spacing)
const SYSTEM_EFFICIENCY = 0.8; // system losses (inverter, temperature, soiling)

type Daya = "450" | "900" | "1300" | "2200" | "3500" | "5500" | "6600" | "7700" | "10600";

const dayaOptions: { value: Daya; label: string }[] = [
  { value: "450", label: "450 VA" },
  { value: "900", label: "900 VA" },
  { value: "1300", label: "1.300 VA" },
  { value: "2200", label: "2.200 VA" },
  { value: "3500", label: "3.500 VA" },
  { value: "5500", label: "5.500 VA" },
  { value: "6600", label: "6.600 VA" },
  { value: "7700", label: "7.700 VA" },
  { value: "10600", label: "10.600 VA" },
];

const roofOptions = [
  { value: "tile", label: "Genteng Keramik / Beton" },
  { value: "metal", label: "Genteng Metal / Spandek" },
  { value: "flat", label: "Atap Datar / Beton" },
  { value: "asphalt", label: "Asphalt Shingle" },
  { value: "other", label: "Lainnya / Belum Tahu" },
];

const locationOptions = [
  { value: "Tegal", label: "Tegal" },
  { value: "Slawi", label: "Slawi" },
  { value: "Brebes", label: "Brebes" },
  { value: "Pemalang", label: "Pemalang" },
  { value: "Lainnya", label: "Lainnya" },
];

const buildingOptions = [
  { value: "Rumah", label: "Rumah" },
  { value: "Komersial", label: "Komersial" },
  { value: "Industri", label: "Industri" },
];

function fmtIDR(n: number, decimals = 0) {
  return n.toLocaleString("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function SolarCalculator() {
  const [daya, setDaya] = useState<Daya>("1300");
  const [tagihan, setTagihan] = useState<number>(1500000);
  const [konsumsi, setKonsumsi] = useState<number>(0);
  const [lokasi, setLokasi] = useState<string>("Tegal");
  const [atap, setAtap] = useState<string>("tile");
  const [jenisBangunan, setJenisBangunan] = useState<string>("Rumah");

  // Derived
  const monthlyKWh = useMemo(() => {
    if (konsumsi && konsumsi > 0) return konsumsi;
    if (tagihan > 0) return tagihan / PLN_TARIFF_PER_KWH;
    const dayaNum = parseInt(daya, 10);
    return dayaNum * 6;
  }, [konsumsi, tagihan, daya]);

  const dailyKWh = monthlyKWh / 30;
  const recommendedKwp = useMemo(() => {
    const kwp = (dailyKWh * 0.8) / (SOLAR_PROD_PER_KWP_PER_DAY * SYSTEM_EFFICIENCY);
    return Math.max(1, Math.round(kwp * 10) / 10);
  }, [dailyKWh]);

  const panelCount = useMemo(
    () => Math.ceil((recommendedKwp * 1000) / PANEL_WP),
    [recommendedKwp]
  );

  const areaM2 = useMemo(
    () => Math.ceil(panelCount * AREA_PER_PANEL_M2),
    [panelCount]
  );

  const dailyProduction = recommendedKwp * SOLAR_PROD_PER_KWP_PER_DAY * SYSTEM_EFFICIENCY;
  const monthlyProduction = dailyProduction * 30;
  const monthlyOffset = Math.min(monthlyProduction / monthlyKWh, 1);
  
  // NEW: Simple savings calculation based on user request (50% of bill)
  const potentialMonthlySaving = tagihan * 0.5;
  const potentialAnnualSaving = potentialMonthlySaving * 12;
  const afterSolarBill = tagihan - potentialMonthlySaving;

  const results = [
    {
      icon: Zap,
      label: "Estimasi Kapasitas PLTS",
      value: `${recommendedKwp.toFixed(1)}`,
      unit: "kWp",
      tone: "primary" as const,
    },
    {
      icon: Sun,
      label: "Estimasi Produksi Energi",
      value: fmtIDR(monthlyProduction, 0),
      unit: "kWh / bulan",
      tone: "accent" as const,
    },
    {
      icon: Battery,
      label: "Estimasi Jumlah Panel",
      value: `${panelCount}`,
      unit: `panel ${PANEL_WP}W`,
      tone: "primary" as const,
    },
    {
      icon: AreaChart,
      label: "Estimasi Kebutuhan Atap",
      value: `${areaM2}`,
      unit: "m² area atap",
      tone: "accent" as const,
    },
    {
      icon: Receipt,
      label: "Estimasi Potensi Penghematan",
      value: `Rp ${fmtIDR(potentialMonthlySaving, 0)}`,
      unit: `/ bulan (indikatif)`,
      tone: "primary" as const,
      wide: true,
    },
  ];

  return (
    <section
      id="simulasi"
      className="relative overflow-hidden bg-gradient-to-b from-background via-brand-green-50/30 to-background py-20 lg:py-28"
    >
      <div className="container-brand">
        <SectionHeading
          eyebrow="Simulasi Kebutuhan PLTS"
          title="Lihat Gambaran Kebutuhan PLTS Rumah Anda"
          description="Isi data dasar berikut untuk mendapat estimasi awal. Angka yang muncul bersifat indikatif — rekomendasi final membutuhkan survey langsung."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Inputs */}
          <Reveal direction="right" className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Data Rumah Anda
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Data digunakan hanya untuk simulasi ini, tidak dikirim ke mana pun.
              </p>

              <div className="mt-6 flex flex-col gap-5">
                {/* Slider Tagihan Bulanan */}
                <Field label="Berapa tagihan listrik bulanan Anda?" icon={Receipt}>
                  <div className="py-2">
                    <input
                      type="range"
                      min={300000}
                      max={5000000}
                      step={100000}
                      value={tagihan}
                      onChange={(e) => setTagihan(Number(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>Rp 300.000</span>
                      <span>Rp 5.000.000</span>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-3xl font-bold text-primary">
                        Rp {fmtIDR(tagihan)}
                      </span>
                    </div>
                  </div>
                </Field>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Lokasi" icon={MapPin}>
                    <select
                      value={lokasi}
                      onChange={(e) => setLokasi(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      {locationOptions.map((l) => (
                        <option key={l.value} value={l.value}>
                          {l.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Jenis Bangunan" icon={Home}>
                    <select
                      value={jenisBangunan}
                      onChange={(e) => setJenisBangunan(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      {buildingOptions.map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Visual Before/After */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-center">
                    <p className="text-xs font-medium text-red-700 uppercase tracking-wide">
                      SEBELUM
                    </p>
                    <p className="text-[10px] text-red-600 mt-1">
                      Tagihan PLN Anda Sekarang
                    </p>
                    <p className="text-xl font-bold text-red-800 mt-2">
                      Rp {fmtIDR(tagihan)}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-center">
                    <p className="text-xs font-medium text-primary uppercase tracking-wide">
                      SESUDAH
                    </p>
                    <p className="text-[10px] text-primary/70 mt-1">
                      Setelah Pakai PLTS
                    </p>
                    <p className="text-xl font-bold text-primary mt-2">
                      Rp {fmtIDR(afterSolarBill)}
                    </p>
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground text-center -mt-2">
                  Ilustrasi penghematan dengan PLTS On-Grid. Hasil aktual bervariasi tergantung konsumsi & cuaca.
                </p>

                {/* Penghematan Real-time */}
                <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-4 border border-primary/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Estimasi Penghematan Bulanan
                      </p>
                      <p className="text-lg font-bold text-primary">
                        Rp {fmtIDR(potentialMonthlySaving)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Estimasi Penghematan Tahunan
                      </p>
                      <p className="text-lg font-bold text-primary">
                        Rp {fmtIDR(potentialAnnualSaving)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 flex items-start gap-2 rounded-xl bg-muted p-3 text-xs leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>
                  Hasil simulasi merupakan estimasi awal berdasarkan asumsi
                  umum. Rekomendasi final membutuhkan analisa profil konsumsi
                  dan kondisi lokasi.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Output */}
          <Reveal direction="left" delay={150} className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary via-brand-green-700 to-primary p-6 text-white shadow-card sm:p-8">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                      Hasil Simulasi
                    </span>
                    <h3 className="font-display text-2xl font-semibold">
                      Estimasi Awal
                    </h3>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                    Indikatif
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {results.map((r, i) => (
                    <div
                      key={r.label}
                      className={`flex flex-col gap-2 rounded-2xl bg-white/8 p-4 backdrop-blur-sm ${
                        r.wide ? "col-span-2" : ""
                      }`}
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <div className="flex items-center gap-2">
                        <r.icon
                          className={`h-4 w-4 ${
                            r.tone === "accent" ? "text-accent" : "text-white/80"
                          }`}
                        />
                        <span className="text-[11px] font-medium uppercase tracking-wider text-white/70">
                          {r.label}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-2xl font-semibold sm:text-3xl">
                          {r.value}
                        </span>
                        <span className="text-xs text-white/70">{r.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Estimated monthly offset bar */}
                <div className="rounded-2xl bg-white/8 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-white/85">
                      Estimasi proporsi kebutuhan listrik dari surya
                    </span>
                    <span className="font-semibold text-accent">
                      {Math.round(monthlyOffset * 100)}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-700"
                      style={{ width: `${Math.min(monthlyOffset * 100, 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-[11px] leading-relaxed text-white/60">
                    Persentase ini bersifat indikatif. Proporsi aktual bergantung
                    pada pola pemakaian siang-malam dan jenis sistem (on-grid /
                    hybrid).
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Emotional Reframing Section */}
        <EmotionalReframing
          tagihan={tagihan}
          monthlySaving={potentialMonthlySaving}
          yearlySaving={potentialAnnualSaving}
          lokasi={lokasi}
          jenisBangunan={jenisBangunan}
        />
      </div>
    </section>
  );
}

function Field({
  label,
  icon: Icon,
  hint,
  children,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary/70" />
        <span className="text-sm font-medium text-foreground">{label}</span>
        {hint ? (
          <span className="ml-auto text-[11px] text-muted-foreground">{hint}</span>
        ) : null}
      </div>
      {children}
    </label>
  );
}
