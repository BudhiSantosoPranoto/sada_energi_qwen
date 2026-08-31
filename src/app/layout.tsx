import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/lib/site-config";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.domain),
  title: {
    default: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
    template: `%s · ${siteConfig.brand.name}`,
  },
  description: siteConfig.brand.shortDescription,
  keywords: [
    "PLTS rumahan",
    "panel surya rumah",
    "solar panel Indonesia",
    "energi surya residensial",
    "konsultasi PLTS",
    "simulasi panel surya",
    "pembangkit listrik tenaga surya",
  ],
  authors: [{ name: siteConfig.brand.name }],
  openGraph: {
    title: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.shortDescription,
    url: siteConfig.brand.domain,
    siteName: siteConfig.brand.name,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.brand.name,
  legalName: siteConfig.brand.legalName,
  description: siteConfig.brand.shortDescription,
  url: siteConfig.brand.domain,
  telephone: siteConfig.contact.phoneDisplay,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Jalan Raya Selatan Banjaran, RT 006/RW 001, Desa Grobog Kulon, Kecamatan Pangkah",
    addressLocality: "Slawi",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  areaServed: siteConfig.contact.areaLayanan,
  openingHours: "Mo-Sa 09:00-18:00",
  priceRange: "$$",
  knowsAbout: [
    "PLTS residensial",
    "Panel surya on-grid",
    "Panel surya hybrid",
    "Inverter surya",
    "Baterai surya",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
