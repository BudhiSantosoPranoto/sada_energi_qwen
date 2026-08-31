"use client";

import { useState } from "react";
import { Sun, Home, Zap, MapPin, ArrowRight, Check } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { waLink } from "@/lib/site-config";

const indicators = [
  {
    icon: Sun,
    title: "Paparan Matahari",
    desc: "Arah hadap atap dan intensitas cahaya sepanjang hari menentukan potensi produksi energi.",
    points: ["Arah hadap atap", "Intensitas cahaya", "Bayangan dari sekitar"],
  },
  {
    icon: Home,
    title: "Kondisi & Luas Atap",
    desc: "Bentuk atap, material, dan ruang yang tersedia menentukan jumlah panel yang dapat dipasang.",
    points: ["Bentuk & kemiringan", "Material atap", "Ruang yang tersedia"],
  },
  {
    icon: Zap,
    title: "Profil Konsumsi Listrik",
    desc: "Daya PLN dan pola pemakaian harian menjadi dasar menentukan kapasitas sistem yang sesuai.",
    points: ["Daya terpasang PLN", "Pola pemakaian harian", "Tagihan listrik rata-rata"],
  },
  {
    icon: MapPin,
    title: "Lokasi Properti",
    desc: "Lokasi rumah memengaruhi radiasi matahari, perizinan, dan ketersediaan layanan instalasi.",
    points: ["Iklim & radiasi matahari", "Akses instalasi", "Perizinan setempat"],
  },
];

export function SuitabilityCheck() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="cocok" className="relative py-20 lg:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Apakah Rumah Anda Cocok?"
          title="Setiap Rumah Punya Karakteristik Berbeda"
          description="Setiap rumah berbeda. Karena itu sistem PLTS sebaiknya tidak ditentukan hanya berdasarkan luas atap atau daya PLN — ada empat indikator utama yang perlu dipertimbangkan."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {indicators.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 80}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
                className={`group flex h-full w-full flex-col items-start gap-4 rounded-2xl border p-6 text-left transition-all duration-300 ${
                  active === i
                    ? "border-primary/30 bg-primary text-primary-foreground shadow-card"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-soft"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                    active === i
                      ? "bg-white/15 text-white"
                      : "bg-primary/8 text-primary"
                  }`}
                >
                  <ind.icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <div className="flex flex-col gap-2">
                  <span className="font-display text-lg font-semibold">
                    {ind.title}
                  </span>
                  <p
                    className={`text-sm leading-relaxed ${
                      active === i ? "text-white/85" : "text-muted-foreground"
                    }`}
                  >
                    {ind.desc}
                  </p>
                </div>
                <ul className="mt-auto flex flex-col gap-1.5 pt-3">
                  {ind.points.map((p) => (
                    <li
                      key={p}
                      className={`flex items-center gap-2 text-xs ${
                        active === i ? "text-white/85" : "text-muted-foreground"
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${
                          active === i ? "text-accent" : "text-primary/60"
                        }`}
                        strokeWidth={3}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary to-brand-green-700 p-8 text-center shadow-card lg:flex-row lg:text-left">
            <div className="flex flex-col gap-2">
              <h3 className="text-balance font-display text-2xl font-semibold text-white sm:text-3xl">
                Ingin tahu apakah rumah Anda cocok?
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                Bagikan foto atap dan tagihan listrik terakhir. Kami bantu
                cek potensi awal — tanpa biaya, tanpa kewajiban.
              </p>
            </div>
            <a
              href={waLink(
                "Halo, saya ingin memeriksa potensi PLTS untuk rumah saya. Berikut foto atap dan tagihan listrik saya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-primary shadow-soft transition-all hover:bg-accent hover:text-foreground hover:-translate-y-0.5"
            >
              Periksa Potensi Rumah Saya
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
