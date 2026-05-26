import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  tone = "ink",
  className,
}: {
  children: React.ReactNode;
  tone?: "ink" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
        tone === "light" ? "text-brand-400" : "text-brand",
        className,
      )}
    >
      <span className="h-px w-6 bg-current opacity-50" />
      {children}
    </span>
  );
}
