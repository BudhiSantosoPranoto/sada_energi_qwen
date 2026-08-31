"use client";

import { useState } from "react";
import { MapPin, Zap, Home, Camera, ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

type Category = "Semua" | "Rumah" | "Bisnis";

type Project = {
  id: string;
  title: string;
  location: string;
  capacityKwp: string;
  roofType: string;
  category: Exclude<Category, "Semua">;
  image: string;
  photoCount: number;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Rumah Modern Tropis",
    location: "Jakarta Selatan",
    capacityKwp: "5.0 kWp",
    roofType: "Genteng Beton",
    category: "Rumah",
    image: "/images/portfolio-1.png",
    photoCount: 12,
  },
  {
    id: "p2",
    title: "Villa dengan Kolam Renang",
    location: "Canggu, Bali",
    capacityKwp: "8.5 kWp",
    roofType: "Atap Datar",
    category: "Rumah",
    image: "/images/portfolio-2.png",
    photoCount: 18,
  },
  {
    id: "p3",
    title: "Rumah 2 Lantai",
    location: "Bandung",
    capacityKwp: "6.6 kWp",
    roofType: "Genteng Keramik",
    category: "Rumah",
    image: "/images/portfolio-3.png",
    photoCount: 15,
  },
  {
    id: "p4",
    title: "Kafe & Workspace",
    location: "Ubud, Bali",
    capacityKwp: "10.2 kWp",
    roofType: "Atap Datar",
    category: "Bisnis",
    image: "/images/portfolio-4.png",
    photoCount: 21,
  },
  {
    id: "p5",
    title: "Rumah Keluarga",
    location: "Tangerang",
    capacityKwp: "4.4 kWp",
    roofType: "Genteng Metal",
    category: "Rumah",
    image: "/images/portfolio-5.png",
    photoCount: 14,
  },
  {
    id: "p6",
    title: "Detail Instalasi Panel",
    location: "Bekasi",
    capacityKwp: "3.3 kWp",
    roofType: "Genteng Beton",
    category: "Rumah",
    image: "/images/portfolio-6.png",
    photoCount: 9,
  },
];

const filters: Category[] = ["Semua", "Rumah", "Bisnis"];

export function Portfolio() {
  const [active, setActive] = useState<Category>("Semua");

  const filtered =
    active === "Semua"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="proyek" className="relative py-20 lg:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Portfolio"
          title="Rumah Nyata. Sistem Nyata."
          description="Bukti bahwa energi surya bukan sekadar konsep. Setiap proyek di bawah adalah rumah atau bangunan nyata yang sudah memproduksi listrik sendiri."
        />

        {/* Filter */}
        <Reveal delay={100} className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-soft no-scrollbar overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                  active === f
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80} direction="up">
              <article className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                    { }
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.location}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* Photo count badge */}
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-foreground/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    <Camera className="h-3 w-3" />
                    {p.photoCount}
                  </div>
                  {/* Category badge */}
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-primary backdrop-blur-sm">
                    {p.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {p.location}
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-primary/5 p-2.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-primary/70">
                        <Zap className="h-3 w-3" /> Kapasitas
                      </div>
                      <div className="mt-0.5 font-display text-sm font-semibold text-foreground">
                        {p.capacityKwp}
                      </div>
                    </div>
                    <div className="rounded-xl bg-primary/5 p-2.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-primary/70">
                        <Home className="h-3 w-3" /> Jenis Atap
                      </div>
                      <div className="mt-0.5 font-display text-sm font-semibold text-foreground">
                        {p.roofType}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    className="group/btn mt-1 inline-flex items-center justify-between gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/5"
                  >
                    Lihat Detail
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-12">
          <p className="text-center text-sm text-muted-foreground">
            Daftar proyek di atas merupakan contoh representatif.{" "}
            <a href="#kontak" className="font-semibold text-primary hover:underline">
              Minta referensi proyek di area Anda →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
