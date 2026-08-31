"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { waLink } from "@/lib/site-config";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Show bubble hint after 4s if user hasn't moved past hero
  useEffect(() => {
    const t1 = setTimeout(() => setShowHint(true), 6000);
    const t2 = setTimeout(() => setShowHint(false), 18000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {/* Desktop floating button */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi gratis via WhatsApp"
        className={cn(
          "fixed bottom-6 right-6 z-50 hidden lg:flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-elevated transition-all duration-300 hover:bg-[#1DA851] hover:-translate-y-0.5",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <span className="absolute inline-flex h-9 w-9 rounded-full bg-[#25D366] animate-pulse-ring" />
          <MessageCircle className="relative h-5 w-5" fill="currentColor" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-wider text-white/80">
            Konsultasi Gratis
          </span>
          <span className="font-bold">Chat di WhatsApp</span>
        </span>
      </a>

      {/* Hint bubble (desktop) */}
      {showHint && (
        <div className="fixed bottom-24 right-6 z-50 hidden max-w-[260px] rounded-2xl border border-border bg-white p-3.5 shadow-elevated lg:block">
          <button
            type="button"
            onClick={() => setShowHint(false)}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-white shadow-soft"
            aria-label="Tutup pesan"
          >
            <X className="h-3 w-3" />
          </button>
          <p className="text-sm font-semibold text-foreground">
            Ada yang bisa kami bantu?
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Tanya dulu seputar PLTS — gratis, tanpa kewajiban. Tim biasanya
            merespons dalam beberapa menit.
          </p>
        </div>
      )}

      {/* Mobile sticky bottom CTA */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 lg:hidden transition-transform duration-300",
          visible ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="border-t border-border bg-background/95 p-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] backdrop-blur-md shadow-elevated">
          <div className="flex items-center gap-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-soft transition-all active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" fill="currentColor" />
              💬 Konsultasi Gratis via WhatsApp
            </a>
            <a
              href="#simulasi"
              className="flex items-center justify-center rounded-full border border-primary/20 bg-card px-4 py-3.5 text-sm font-semibold text-primary"
              aria-label="Buka kalkulator PLTS"
            >
              Hitung
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
