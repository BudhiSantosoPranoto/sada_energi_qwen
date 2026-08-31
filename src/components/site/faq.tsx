"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { waLink } from "@/lib/site-config";

const faqs = [
  {
    q: "Apakah PLTS bisa memutus ketergantungan saya dari PLN sepenuhnya?",
    a: "Untuk sistem on-grid, PLTS memangkas konsumsi dari PLN tetapi tidak menghilangkan ketergantungan total — Anda tetap terhubung ke jaringan PLN sebagai cadangan. Sistem hybrid dengan baterai bisa memberi cadangan saat padam. Sistem off-grid bisa mandiri sepenuhnya, tetapi membutuhkan investasi baterai yang lebih besar. Kami akan bantu memilih yang paling masuk akal untuk rumah Anda.",
  },
  {
    q: "Berapa lama panel surya bertahan?",
    a: "Panel surya berkualitas Tier-1 umumnya memiliki umur pakai 25–30 tahun, dengan performa yang masih di atas 80% di akhir periode. Inverter umumnya 10–15 tahun, dan baterai (jika ada) 8–12 tahun tergantung kimia dan pola pemakaian. Garansi spesifik mengikuti masing-masing brand.",
  },
  {
    q: "Apakah atap genteng biasa cukup kuat menahan panel surya?",
    a: "Ya, atap genteng beton, keramik, maupun metal umumnya cukup kuat. Tim kami akan memeriksa struktur kuda-kuda atap saat survey. Beberapa kasus membutuhkan penguatan ringan — itu akan ditawarkan secara transparan sebelum pemasangan, tanpa biaya tersembunyi setelahnya.",
  },
  {
    q: "Apakah PLTS berisiko merusak perangkat elektronik di rumah?",
    a: "Tidak. Listrik dari inverter PLTS memiliki bentuk gelombang yang sama dengan listrik PLN (sinus murni). Perangkat seperti AC, kulkas, dan TV Anda bekerja seperti biasa. Justru dengan inverter modern yang stabil, kualitas listrik di rumah Anda bisa menjadi lebih konsisten.",
  },
  {
    q: "Berapa lama hasilnya terlihat di tagihan listrik?",
    a: "Tagihan listrik bulan pertama setelah pemasangan biasanya sudah menunjukkan perbedaan. Besarnya penghematan tergantung pada profil konsumsi, ukuran sistem, dan jenis sistem (on-grid / hybrid). Kami selalu menyampaikan estimasi yang konservatif, bukan janji penghematan berlebihan.",
  },
  {
    q: "Apakah saya perlu mengurus perizinan ke PLN?",
    a: "Untuk sistem on-grid, ada proses pendaftaran ke PLN (biasanya melalui program seperti IMB dan PLN timbal balik). Kami bantu mengurus proses ini sebagai bagian dari layanan — Anda tidak perlu mengurusnya sendiri. Detail perizinan spesifik akan kami jelaskan sesuai lokasi rumah Anda.",
  },
  {
    q: "Apa yang terjadi saat listrik padam?",
    a: "Sistem on-grid otomatis mati saat PLN padam — ini standar keselamatan agar listrik tidak mengalir ke jaringan PLN. Sistem hybrid dengan baterai akan otomatis beralih ke baterai sebagai cadangan. Jika rumah Anda sering mengalami pemadaman, hybrid layak dipertimbangkan.",
  },
  {
    q: "Apakah ada biaya perawatan rutin?",
    a: "Perawatan utamanya adalah pembersihan panel — bisa dilakukan sendiri atau oleh tim kami. Hujan tropis Indonesia sudah membantu mengurangi debu. Inspeksi tahunan disarankan untuk memastikan koneksi, kabel, dan inverter dalam kondisi optimal. Biaya inspeksi tahunan biasanya modest dan jauh lebih kecil dibanding penghematan yang dihasilkan.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Pertanyaan Umum"
          title="Yang Sering Ditanyakan Sebelum Menghubungi"
          description="Jika pertanyaan Anda belum ada di sini, tanyakan langsung — kami senang menjawab sebelum Anda memutuskan."
        />

        <Reveal delay={120} className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-3"
            defaultValue="item-0"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft data-[state=open]:border-primary/30 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={200} className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            Masih ada pertanyaan lain?
          </p>
          <a
            href={waLink("Halo, saya ada pertanyaan tentang PLTS yang belum terjawab di website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-brand-green-700 hover:shadow-card hover:-translate-y-0.5"
          >
            💬 Tanya langsung via WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
