"use client";

import { useEffect, useState } from "react";
import { Check, MessageCircle, ChevronRight, Star } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { Reveal } from "./reveal";
import { SecondaryButton } from "./buttons";

const trustItems = [
  "Konsultasi Gratis",
  "Survey & Perencanaan",
  "Instalasi Profesional",
  "Monitoring Sistem",
];

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-background to-background pt-24 lg:pt-32"
    >
      {/* Soft ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 h-[460px] w-[460px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute top-40 -left-32 h-[460px] w-[460px] rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="container-brand relative z-10 grid grid-cols-1 items-center gap-10 pb-20 lg:grid-cols-12 lg:gap-12 lg:pb-28">
        {/* Left — Copy */}
        <div className="lg:col-span-6 xl:col-span-5">
          <Reveal direction="up" className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Mitra Energi Surya Residensial
            </span>

            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Ubah Atap Rumah Menjadi{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Sumber Energi.</span>
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 6 Q 50 1, 100 5 T 198 4"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Manfaatkan energi matahari untuk membantu memenuhi kebutuhan
              listrik rumah dan membangun sistem energi yang lebih efisien untuk
              jangka panjang.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-brand-green-700 hover:shadow-card hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                💬 Konsultasi Gratis
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <SecondaryButton href="#proyek">Lihat Proyek</SecondaryButton>
            </div>

            {/* Trust microcopy */}
            <ul className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-foreground/85"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right — Hero image */}
        <div className="lg:col-span-6 xl:col-span-7">
          <div className="relative">
            <Reveal direction="left" delay={150}>
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-elevated ring-1 ring-primary/10">
                <div
                  className={`aspect-[4/3] w-full transition-all duration-700 ${
                    loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  { }
                  <img
                    src="/images/hero-house.png"
                    alt="Rumah modern Indonesia dengan panel surya terpasang di atap"
                    className="h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>

                {/* Soft top vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>
            </Reveal>

            {/* Floating stat card — top right */}
            <Reveal direction="right" delay={400} className="absolute -right-2 top-6 sm:-right-4 sm:top-8">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-white/90 p-3 shadow-card backdrop-blur-md sm:p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-brand-gold-700">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-base font-semibold leading-none text-foreground">
                    [50+]
                  </span>
                  <span className="mt-1 text-[11px] text-muted-foreground">
                    Sistem Terpasang
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Floating card — bottom left */}
            <Reveal
              direction="up"
              delay={550}
              className="absolute -left-3 bottom-6 sm:-left-6 sm:bottom-10"
            >
              <div className="max-w-[220px] rounded-2xl border border-border bg-white/95 p-3.5 shadow-card backdrop-blur-md sm:p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold text-foreground">
                    Monitoring Aktif
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  Performa sistem dapat dipantau secara real-time dari aplikasi.
                </p>
              </div>
            </Reveal>

            {/* Decorative dots */}
            <div className="pointer-events-none absolute -right-6 bottom-0 hidden h-16 w-16 grid-cols-3 gap-2 lg:grid">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="block h-1.5 w-1.5 rounded-full bg-primary/30" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
