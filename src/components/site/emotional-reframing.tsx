"use client";

import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { waLink } from "@/lib/site-config";

function fmtIDR(n: number, decimals = 0) {
  return n.toLocaleString("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

interface EmotionalReframingProps {
  tagihan: number;
  monthlySaving: number;
  yearlySaving: number;
  lokasi: string;
  jenisBangunan: string;
}

export function EmotionalReframing({
  tagihan,
  monthlySaving,
  yearlySaving,
  lokasi,
  jenisBangunan,
}: EmotionalReframingProps) {
  const whatsappMessage = useMemo(() => {
    return `Halo Sada Energi, saya tertarik konsultasi PLTS.
- Tagihan listrik: Rp ${fmtIDR(tagihan)}/bulan
- Estimasi penghematan: Rp ${fmtIDR(monthlySaving)}/bulan (Rp ${fmtIDR(yearlySaving)}/tahun)
- Lokasi: ${lokasi}
- Jenis bangunan: ${jenisBangunan}
Mohon info lebih lanjut. Terima kasih.`;
  }, [tagihan, monthlySaving, yearlySaving, lokasi, jenisBangunan]);

  const whatsappUrl = waLink(whatsappMessage);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-brand-green-50/30">
      <div className="container-brand">
        <Reveal direction="up">
          {/* Headline */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Jika Anda bisa menghemat{" "}
              <span className="text-primary">Rp {fmtIDR(monthlySaving)}</span>{" "}
              per bulan, atau{" "}
              <span className="text-primary">Rp {fmtIDR(yearlySaving)}</span>{" "}
              per tahun, apa yang bisa Anda lakukan?
            </h2>
          </div>

          {/* Grid 4 Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Reveal direction="up" delay={50}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">📚</div>
                <p className="text-sm font-medium text-foreground">
                  Menabung untuk sekolah anak?
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">🚗</div>
                <p className="text-sm font-medium text-foreground">
                  Membeli mobil baru?
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={150}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">📈</div>
                <p className="text-sm font-medium text-foreground">
                  Memulai investasi?
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">✈️</div>
                <p className="text-sm font-medium text-foreground">
                  Merencanakan ibadah / liburan keluarga?
                </p>
              </div>
            </Reveal>
          </div>

          {/* Microcopy */}
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Energi surya bukan sekadar penghematan — ini langkah menuju kebebasan finansial.
          </p>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:-translate-y-0.5"
            >
              💬 Klaim Penghematan Ini via WhatsApp
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
