import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
};

/** Consistent section header used across all sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-primary/70" : "text-accent"
          )}
        >
          <span
            className={cn(
              "h-px w-6",
              tone === "dark" ? "bg-primary/40" : "bg-accent/70"
            )}
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "max-w-3xl text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          tone === "dark" ? "text-foreground" : "text-white"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-muted-foreground" : "text-white/80"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
