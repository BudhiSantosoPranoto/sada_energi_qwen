import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  city: string;
  systemKwp: string;
  year: string;
  initialConcern: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Awalnya saya ragu karena atap rumah saya tidak menghadap utara. Setelah survey, tim menjelaskan bahwa kemiringan dan orientasi bisa dikompensasi. Sekarang tagihan listrik bulanan turun signifikan dan saya bisa memantau produksinya lewat aplikasi.",
    name: "[NAMA PELANGGAN]",
    city: "[JAKARTA SELATAN]",
    systemKwp: "5.5 kWp",
    year: "2024",
    initialConcern: "Atap tidak menghadap utara",
  },
  {
    quote:
      "Yang saya suka, mereka tidak langsung menawarkan paket. Konsultasinya dimulai dari pola pemakaian listrik keluarga saya. Baru setelah itu direkomendasikan sistem yang sesuai. Proses instalasi juga rapi, kerjaannya bersih.",
    name: "[NAMA PELANGGAN]",
    city: "[BANDUNG]",
    systemKwp: "4.4 kWp",
    year: "2023",
    initialConcern: "Takut dijual paket yang tidak sesuai",
  },
  {
    quote:
      "Saya cuma tanya-tanya dulu lewat WhatsApp. Tidak dikira langsung mau pasang. Setelah dapat penjelasan, baru saya putuskan. Sekarang kulkas, AC kamar, dan pompa air sebagian besar dialiri energi surya. After-salesnya juga responsif.",
    name: "[NAMA PELANGGAN]",
    city: "[TANGERANG]",
    systemKwp: "3.3 kWp",
    year: "2024",
    initialConcern: "Tidak ingin didorong untuk beli",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Kata Mereka"
          title="Cerita dari Pemilik Rumah yang Sudah Memasang PLTS"
          description="Bukan testimoni generik. Pengalaman nyata — termasuk kekhawatiran awal, proses konsultasi, hingga hasil setelah pemasangan. Identitas akan diganti dengan data pelanggan aktual."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.year + i} delay={i * 80}>
              <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                {/* Quote icon */}
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/15 text-brand-gold-700">
                    <Quote className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Sistem
                    </span>
                    <span className="font-display text-sm font-semibold text-foreground">
                      {t.systemKwp}
                    </span>
                  </div>
                </div>

                <blockquote className="text-pretty text-sm leading-relaxed text-foreground/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-auto flex flex-col gap-3 border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/8 font-display text-sm font-bold text-primary">
                      {t.name.slice(1, 3)}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-display text-sm font-semibold text-foreground">
                        {t.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {t.city} · {t.year}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex w-fit rounded-full bg-primary/5 px-3 py-1 text-[11px] font-medium text-primary/80">
                    Kekhawatiran awal: {t.initialConcern}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-10">
          <p className="text-center text-xs text-muted-foreground">
            Nama pelanggan dan kota di atas adalah placeholder. Setelah
            mendapatkan izin tertulis dari pelanggan aktual, data dapat
            diganti tanpa mengubah struktur komponen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
