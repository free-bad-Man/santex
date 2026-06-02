import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlassPanel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/[0.12] bg-glass shadow-glass backdrop-blur-[18px]",
        className,
      )}
      {...props}
    />
  );
}
