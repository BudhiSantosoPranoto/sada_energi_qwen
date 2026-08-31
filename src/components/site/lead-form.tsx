"use client";

import { useState } from "react";
import { ShieldCheck, ArrowRight, Send } from "lucide-react";
import { Reveal } from "./reveal";
import { waLink } from "@/lib/site-config";

export function LeadForm() {
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    kota: "",
    daya: "1300",
    tagihan: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const msg = `Halo, saya ingin konsultasi PLTS.

• Nama: ${form.nama || "[Belum diisi]"}
• WhatsApp: ${form.whatsapp || "[Belum diisi]"}
• Kota: ${form.kota || "[Belum diisi]"}
• Daya PLN: ${form.daya} VA${form.tagihan ? `\n• Tagihan rata-rata: Rp ${form.tagihan}/bulan` : ""}

Mohon dibantu untuk analisa awal. Terima kasih.`;

    // Small delay for UX feedback
    setTimeout(() => {
      window.open(waLink(msg), "_blank");
      setSubmitting(false);
    }, 350);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      aria-label="Form konsultasi PLTS"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label="Nama" required>
          <input
            type="text"
            required
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            placeholder="Nama lengkap Anda"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </FormField>

        <FormField label="WhatsApp" required>
          <input
            type="tel"
            required
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            placeholder="08xx xxxx xxxx"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </FormField>

        <FormField label="Kota / Daerah" required>
          <input
            type="text"
            required
            value={form.kota}
            onChange={(e) => setForm({ ...form, kota: e.target.value })}
            placeholder="Jakarta Selatan, Bandung, ..."
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </FormField>

        <FormField label="Daya PLN">
          <select
            value={form.daya}
            onChange={(e) => setForm({ ...form, daya: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="450">450 VA</option>
            <option value="900">900 VA</option>
            <option value="1300">1.300 VA</option>
            <option value="2200">2.200 VA</option>
            <option value="3500">3.500 VA</option>
            <option value="5500">5.500 VA</option>
            <option value="6600">6.600 VA</option>
            <option value="7700">7.700 VA</option>
            <option value="10600">10.600 VA</option>
          </select>
        </FormField>
      </div>

      <FormField label="Tagihan listrik rata-rata (opsional)" hint="Tidak wajib, tapi membantu estimasi">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">
            Rp
          </span>
          <input
            type="number"
            min={0}
            step={50000}
            value={form.tagihan}
            onChange={(e) => setForm({ ...form, tagihan: e.target.value })}
            placeholder="500.000"
            className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-sm font-medium text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </FormField>

      {/* Microcopy */}
      <div className="flex items-start gap-2 rounded-xl bg-primary/5 p-3 text-xs leading-relaxed text-muted-foreground">
        <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
        <span>
          Data Anda digunakan hanya untuk membantu analisa kebutuhan PLTS. Kami
          tidak akan membagikan data ke pihak ketiga.
        </span>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-bold text-foreground shadow-soft transition-all hover:bg-accent/90 hover:shadow-card hover:-translate-y-0.5 disabled:opacity-70"
      >
        {submitting ? "Menyiapkan WhatsApp..." : "Konsultasi via WhatsApp"}
        {!submitting && (
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>

      <a
        href="#simulasi"
        className="text-center text-xs text-muted-foreground hover:text-primary transition-colors"
      >
        atau coba simulasi dulu →{" "}
        <span className="font-semibold">Hitung Potensi PLTS Saya</span>
      </a>
    </form>
  );
}

function FormField({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-1 text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-accent">*</span> : null}
        {hint ? (
          <span className="ml-auto text-[11px] font-normal text-muted-foreground">
            {hint}
          </span>
        ) : null}
      </span>
      {children}
    </label>
  );
}
