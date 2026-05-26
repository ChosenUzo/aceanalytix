import { cn } from "@/lib/utils";

/**
 * Company logo (image). Replaces the old text wordmark.
 *  - tone="ink"  → plain logo, for light backgrounds (navbar)
 *  - tone="light"→ logo on a white plate, for dark backgrounds (footer)
 *    so the dark "ANALYTIX" wordmark stays legible on charcoal.
 */
export default function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "light";
}) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo/ace-analytix.png"
      alt="ACE Analytix"
      className={cn("w-auto object-contain", tone === "light" ? "h-7" : "h-9")}
    />
  );

  if (tone === "light") {
    return (
      <span className={cn("inline-flex rounded-md bg-white px-3 py-2", className)}>{img}</span>
    );
  }

  return <span className={cn("inline-flex items-center", className)}>{img}</span>;
}
