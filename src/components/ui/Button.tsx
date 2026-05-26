"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "onDark";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-colors duration-300 focus-visible:outline-none disabled:opacity-50";

const sizes = {
  md: "h-11 px-6",
  lg: "h-13 px-8 text-[15px]",
} as const;

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-600",
  outline: "border border-line-strong text-text hover:bg-ink hover:text-ondark hover:border-ink",
  ghost: "text-text hover:bg-paper-2",
  onDark: "bg-ondark text-ink hover:bg-white",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  magnetic?: boolean;
};

/**
 * Magnetic link/button. The label nudges toward the cursor on hover.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  magnetic = true,
  onClick,
  type,
}: CommonProps & {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);

  const handleMove = (e: MouseEvent) => {
    if (!magnetic || reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.3}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const inner = (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-flex items-center gap-2 transition-transform duration-300 ease-out"
    >
      {children}
    </motion.span>
  );

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={classes}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
