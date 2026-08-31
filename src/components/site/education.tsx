import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    question: "Apakah rumah saya cocok menggunakan PLTS?",
    excerpt:
      "Tergantung empat hal utama: paparan matahari, kondisi atap, profil konsumsi, dan lokasi. Rumah dengan tagihan menengah ke atas biasanya layak dievaluasi.",
    readTime: "3 menit baca",
  },
  {
    question: "Berapa panel yang dibutuhkan rumah saya?",
    excerpt:
      "Jumlah panel bukan ditentukan dari luas atap, melainkan dari konsumsi listrik harian. Simulasi awal bisa memberi gambaran kasar dalam 30 detik.",
    readTime: "4 menit baca",
  },
  {
    question: "Apakah PLTS tetap bekerja saat mendung?",
    excerpt:
      "Produksi memang menurun saat berawan, tetapi tidak berhenti total. Panel masih menghasilkan listrik dari cahaya yang tersebar — hanya dengan intensitas lebih rendah.",
    readTime: "2 menit baca",
  },
  {
    question: "Apa bedanya on-grid, hybrid, dan off-grid?",
    excerpt:
      "On-grid terhubung ke PLN tanpa baterai. Hybrid punya baterai sebagai cadangan. Off-grid mandiri sepenuhnya. Pilihan tergantung tujuan dan kondisi lokasi.",
    readTime: "5 menit baca",
  },
  {
    question: "Apakah perlu baterai?",
    excerpt:
      "Tidak selalu. Baterai berguna jika Anda ingin cadangan saat padam, atau jika mayoritas pemakaian listrik terjadi di malam hari. Kalau pemakaian dominan siang, on-grid lebih hemat.",
    readTime: "4 menit baca",
  },
  {
    question: "Berapa lama pemasangannya?",
    excerpt:
      "Pemasangan fisik rata-rata 2–4 hari, tergantung kompleksitas atap. Total waktu dari konsultasi hingga sistem aktif biasanya 2–4 minggu.",
    readTime: "2 menit baca",
  },
  {
    question: "Bagaimana perawatan PLTS?",
    excerpt:
      "Perawatannya minimal — terutama membersihkan panel secara berkala. Hujan tropis Indonesia sudah membantu. Inspeksi tahunan disarankan untuk memastikan performa optimal.",
    readTime: "3 menit baca",
  },
  {
    question: "Apakah ada garansi?",
    excerpt:
      "Ya — biasanya terbagi tiga: garansi panel (10–25 tahun), garansi inverter (5–10 tahun), dan garansi pengerjaan kami. Detail mengikuti brand dan kesepakatan proyek.",
    readTime: "3 menit baca",
  },
];

export function Education() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-brand-green-50/40 to-background py-20 lg:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Edukasi"
          title="Masih Bingung Tentang PLTS?"
          description="Kami kumpulkan pertanyaan paling sering dari calon pelanggan. Setiap jawaban ditulis dengan bahasa sederhana — tanpa jargon teknis yang membingungkan."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((a, i) => (
            <Reveal key={a.question} delay={(i % 4) * 70}>
              <article className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-card hover:-translate-y-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <BookOpen className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {a.readTime}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {a.question}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <button className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary transition-colors hover:text-brand-green-700">
                  Baca selengkapnya
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
