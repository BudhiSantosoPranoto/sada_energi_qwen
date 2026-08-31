import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig, waLink, navLinks } from "@/lib/site-config";

const resources = [
  { label: "Apakah Rumah Saya Cocok?", href: "#cocok" },
  { label: "Simulasi Kebutuhan PLTS", href: "#simulasi" },
  { label: "Portfolio Proyek", href: "#proyek" },
  { label: "Proses Pemasangan", href: "#proses" },
  { label: "Pertanyaan Umum", href: "#faq" },
];

const educations = [
  "On-grid vs Hybrid vs Off-grid",
  "Berapa panel yang dibutuhkan?",
  "Apakah perlu baterai?",
  "Berapa lama pemasangan?",
];

export function Footer() {
  return (
    <footer className="relative mt-auto bg-gradient-to-b from-foreground to-[#0F1A14] pt-16 pb-[calc(env(safe-area-inset-bottom)+5rem)] text-white/80 lg:pb-16">
      <div className="container-brand">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center">
              <img
                src="/logo-sada.png"
                alt="Logo Sada Energi"
                className="h-30 w-auto"
              />
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {siteConfig.brand.shortDescription}
            </p>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-[#1DA851] hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" />
              Mulai Chat WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Navigasi
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/80 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Sumber
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {resources.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    className="text-sm text-white/80 transition-colors hover:text-accent"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Kontak
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.contact.phoneSecondary}</span>
              </li>
              {/*<li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.contact.email}</span>
              </li>*/}
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.contact.jamOperasional}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Education chips */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Topik Edukasi
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {educations.map((e) => (
              <span
                key={e}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {e}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.brand.legalName} ({siteConfig.brand.name}).
            Semua hak dilindungi.
          </p>
          <p className="text-white/40">
            Dibuat dengan perhatian pada kepercayaan, bukan tekanan.
          </p>
        </div>
      </div>
    </footer>
  );
}
