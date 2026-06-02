import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { PriceGroup } from "@/data/prices";
import { cn } from "@/lib/utils";
import { Card } from "./Card";

type PriceCardProps = {
  group: PriceGroup;
  wide?: boolean;
};

export function PriceCard({ group, wide }: PriceCardProps) {
  return (
    <Card className={cn("flex h-full flex-col p-5 xl:p-4 2xl:p-6", !wide && "md:min-h-[520px] 2xl:min-h-[580px]")}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-light 2xl:text-2xl">{group.service}</h3>
        <Link
          href={group.href}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.12] text-muted transition hover:border-accent/50 hover:text-accent"
          aria-label={`Подробнее: ${group.service}`}
        >
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <div className={cn("mt-4 grid flex-1 gap-3 2xl:mt-6 2xl:gap-4", wide && "md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]")}>
        {group.packages.map((item) => (
          <div key={item.name} className="flex min-h-28 h-full flex-col rounded-3xl border border-white/10 bg-bg-main/35 p-3 2xl:p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-accent">
              <CheckCircle className="h-4 w-4" aria-hidden />
              {item.name}
            </div>
            <div className="mt-2 text-lg font-semibold text-light 2xl:text-2xl">{item.price}</div>
            <p className="mt-2 text-[13px] leading-6 text-muted 2xl:text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
