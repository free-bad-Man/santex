import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-accent/70 bg-accent text-bg-main shadow-glow hover:border-accent hover:bg-[#d6ac6b] hover:shadow-[0_18px_60px_rgba(197,155,90,0.28)]",
  secondary:
    "border-white/[0.16] bg-white/[0.04] text-light hover:border-accent/50 hover:bg-white/[0.08] hover:text-white",
  ghost: "border-transparent bg-transparent text-muted hover:bg-white/[0.06] hover:text-light",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  full?: boolean;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  icon,
  full,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-55",
        variantClasses[variant],
        sizeClasses[size],
        full && "w-full",
        className,
      )}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}

export type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  full?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  full,
  className,
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border font-semibold transition duration-300",
        variantClasses[variant],
        sizeClasses[size],
        full && "w-full",
        className,
      )}
    >
      {children}
      {icon}
    </Link>
  );
}
