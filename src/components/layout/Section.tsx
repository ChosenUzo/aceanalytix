import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * Vertical rhythm wrapper. `tone` switches the surface (paper / ink).
 */
export default function Section({
  id,
  tone = "paper",
  className,
  children,
}: {
  id?: string;
  tone?: "paper" | "paper-2" | "ink";
  className?: string;
  children: ReactNode;
}) {
  const tones = {
    paper: "bg-paper text-text",
    "paper-2": "bg-paper-2 text-text",
    ink: "bg-ink text-ondark",
  } as const;

  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 sm:py-28 lg:py-36", tones[tone], className)}
    >
      {children}
    </section>
  );
}
