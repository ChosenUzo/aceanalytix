import { cn } from "@/lib/utils";

/**
 * Designed monogram placeholder. When you add the real team photos to
 * /public/team and pass `src`, it renders the photo instead.
 * (The audit noted real photos are now live — drop them in to restore them.)
 */
export default function Avatar({
  name,
  src,
  className,
}: {
  name: string;
  src?: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-br from-ink-2 to-ink",
        className,
      )}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-30" />
          <span className="display text-5xl text-brand-400">{initials}</span>
        </div>
      )}
    </div>
  );
}
