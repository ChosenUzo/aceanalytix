import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

/**
 * Image slot with a graceful, designed placeholder.
 * Pass `src` (a file in /public, e.g. "/images/boardroom.jpg") to show the photo.
 * Until then a tasteful labelled placeholder renders — no broken images.
 *
 * Drop client photos into /public/images and set `src` here or in the parent.
 */
export default function Figure({
  src,
  alt,
  label,
  ratio = "4/3",
  className,
  rounded = "rounded-2xl",
}: {
  src?: string;
  alt: string;
  label?: string;
  ratio?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-paper-2", rounded, className)}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-paper-2 to-paper">
          <div aria-hidden className="absolute inset-0 grid-lines opacity-[0.5]" />
          <div className="relative flex flex-col items-center gap-2 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand">
              <ImageIcon size={20} />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              {label ?? "Image"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
