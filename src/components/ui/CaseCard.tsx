import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { CaseItem } from "@/data/cases";
import { cn } from "@/lib/utils";
import { Card } from "./Card";

type CaseCardProps = {
  item: CaseItem;
  featured?: boolean;
};

export function CaseCard({ item, featured }: CaseCardProps) {
  return (
    <Link href={`/portfolio/${item.slug}`} className="group block h-full">
      <Card className={cn("h-full overflow-hidden", featured ? "grid lg:grid-cols-[0.95fr_1.05fr]" : "flex flex-col md:min-h-[520px]")}>
        <div className={cn("relative overflow-hidden bg-bg-graphite", featured ? "aspect-[16/9] lg:aspect-auto lg:min-h-[360px]" : "aspect-[16/10]")}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/20 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full border border-white/[0.14] bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-light backdrop-blur">
            {item.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            {item.location}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-light">{item.title}</h3>
          <p className="mt-3 flex-1 leading-7 text-muted">{item.result}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Смотреть кейс
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
          </div>
        </div>
      </Card>
    </Link>
  );
}
