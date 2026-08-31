"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, waLink } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-border/70 shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container-brand flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* Logo */}
        <a href="#top" className="flex items-center group">
          {/* TODO: pastikan file logo final bernama logo-sada.svg di public/ */}
          <img
            src="/logo-sada.svg"
            alt="Logo Sada Energi"
            className="h-9 w-auto lg:h-11"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#simulasi"
            className="text-sm font-semibold text-primary hover:bg-transparent hover:text-brand-green-700 transition-colors"
          >
            Hitung Kebutuhan
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-brand-green-700 hover:shadow-card hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/70 text-primary lg:hidden"
          aria-label="Buka menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={cn(
            "absolute inset-x-0 top-0 origin-top bg-background px-5 py-6 shadow-card transition-transform duration-300",
            open ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-primary/5 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="#simulasi"
              onClick={() => setOpen(false)}
              className="rounded-full border border-primary/20 px-5 py-3 text-center text-sm font-semibold text-primary"
            >
              Hitung Kebutuhan PLTS
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              💬 Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
