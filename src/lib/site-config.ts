/**
 * Central site configuration.
 * All business-specific values live here so they can be swapped
 * with real data in one place without touching the components.
 */
export const siteConfig = {
  brand: {
    name: "Sada Energi",
    legalName: "PT Energi Cahaya Matahari",
    tagline: "Partner Energi Surya untuk Rumah Anda",
    shortDescription:
      "Kami membantu pemilik rumah merancang sistem PLTS yang sesuai dengan kebutuhan energi, kondisi properti, dan tujuan jangka panjang mereka.",
    domain: "https://sadaenergi.com",
  },

  // Replace with the real WhatsApp number (international format, no +)
  whatsapp: {
    number: "6285888818055",
    defaultMessage:
      "Halo, saya tertarik berkonsultasi mengenai PLTS untuk rumah saya. Bisa dibantu untuk analisa awal?",
  },

  // Placeholders — replace with real business data
  stats: [
    { label: "Sistem Terpasang", value: 50, suffix: "+" },
    { label: "Kapasitas Terpasang", value: 450, suffix: " kWp+" },
    { label: "Kota / Area Layanan", value: 12, suffix: "+" },
    { label: "Tahun Pengalaman", value: 6, suffix: "" },
  ],

  // Contact info
  contact: {
    // TODO: Replace with real email
    email: "halo@sadaenergi.com",
    phoneDisplay: "+62 858 8881 8055",
    phoneSecondary: "+62 822 2999 9805",
    address:
      "Jl. HOS. Cokroaminoto, Sapphire Residence Slawi Blok C15, Kel. Slawi Wetan, Kec. Slawi, Kab. Tegal, Jawa Tengah 52411",
    areaLayanan: "Tegal, Slawi, Pantura Jawa Tengah, dan sekitarnya",
    jamOperasional: "Senin–Sabtu, 09.00–18.00 WIB",
  },

  // Component partner brands — replace with actual brands used by the business
  components: {
    panels: "Monocrystalline 620 Wp",
    inverter: "LIVOLTEK Hybrid Inverter",
    battery: "LIVOLTEK LFP dengan BMS",
    mounting: "Mounting Rail Aluminium",
  },

  // AESI affiliation
  aesi: {
    name: "Asosiasi Energi Surya Indonesia",
    shortName: "AESI",
    link: "https://aesi.or.id",
    logo: "/logo-aesi.svg",
    description: "Anggota Resmi Asosiasi Energi Surya Indonesia (AESI)",
  },

  // Warranty info
  warranty: {
    maintenance: "1 tahun",
    panel: "12 tahun garansi produk, hingga 25 tahun performa",
    inverter: "5 tahun",
    battery: "5 tahun",
    contractNote: "Semua garansi tertuang tertulis dalam kontrak.",
  },

  // Payment scheme
  payment: {
    dp: "50%",
    delivery: "45%",
    completion: "5%",
    note: "DP 50% | 45% saat barang dikirim | 5% setelah instalasi",
    trustNote: "Setiap instalasi termasuk pemenuhan SLO & NIDI serta kajian teknis lengkap.",
  },
} as const;

/** Build a WhatsApp deep link with an optional custom message. */
export function waLink(message?: string): string {
  const text = encodeURIComponent(
    message ?? siteConfig.whatsapp.defaultMessage
  );
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}

/** Smooth-scroll anchor for in-page navigation. */
export const navLinks = [
  { label: "Cocok?", href: "#cocok" },
  { label: "Simulasi", href: "#simulasi" },
  { label: "Proyek", href: "#proyek" },
  { label: "Proses", href: "#proses" },
  { label: "FAQ", href: "#faq" },
] as const;
