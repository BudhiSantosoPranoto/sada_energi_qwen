"use client";

import { Reveal } from "./reveal";
import { siteConfig } from "@/lib/site-config";
import { ExternalLink } from "lucide-react";

export function AESITrustBar() {
  return (
    <Reveal>
      <div className="border-b border-border bg-brand-cream/50 py-6">
        <div className="container-brand">
          <a
            href={siteConfig.aesi.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all hover:border-primary/20 hover:shadow-card"
          >
            {/* AESI Logo with white chip background */}
            <div className="flex h-12 w-auto items-center justify-center rounded-lg bg-white px-3 py-2 shadow-sm">
              <img
                src={siteConfig.aesi.logo}
                alt={`Logo ${siteConfig.aesi.shortName}`}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-sm font-semibold text-foreground">
                {siteConfig.aesi.description}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                Kunjungi website resmi
                <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </Reveal>
  );
}
