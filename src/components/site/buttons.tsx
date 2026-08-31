import { cn } from "@/lib/utils";

/** Primary button — deep green pill with subtle hover lift. */
export function PrimaryButton({
  href,
  children,
  className,
  target,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:bg-brand-green-700 hover:shadow-card hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      {children}
    </a>
  );
}

/** Secondary button — outlined on light bg, fills subtly on hover. */
export function SecondaryButton({
  href,
  children,
  className,
  variant = "outline",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "ghost" | "on-dark";
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "outline" &&
          "border border-primary/20 bg-white/60 text-primary hover:border-primary/40 hover:bg-white",
        variant === "ghost" && "text-primary hover:bg-primary/5",
        variant === "on-dark" &&
          "border border-white/25 bg-white/5 text-white hover:bg-white/10 hover:border-white/40",
        className
      )}
    >
      {children}
    </a>
  );
}
