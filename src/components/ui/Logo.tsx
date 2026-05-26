import { cn } from "@/lib/utils";

/**
 * Wordmark + monogram. Replaces the duplicated template logos and the
 * Herrington theme footer logo flagged in the audit — one consistent mark.
 */
export default function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "light";
}) {
  const text = tone === "light" ? "text-ondark" : "text-ink";
  const sub = tone === "light" ? "text-ondark-muted" : "text-muted";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M8 1.5 14.5 14.5H10.7L8 8.4 5.3 14.5H1.5L8 1.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("text-[15px] font-semibold tracking-tight", text)}>
          ACE Analytix
        </span>
        <span className={cn("mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em]", sub)}>
          Strategy · Execution
        </span>
      </span>
    </span>
  );
}
