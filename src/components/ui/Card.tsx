import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/[0.12] bg-glass shadow-glass backdrop-blur-[18px] transition duration-300 hover:border-accent/[0.35] hover:bg-[rgba(20,23,30,0.9)]",
        className,
      )}
      {...props}
    />
  );
}
