import Link from "next/link";
import { ArrowRight, Bath, Droplets, Flame, Layers, Thermometer } from "lucide-react";
import type { Service } from "@/data/services";
import { Card } from "./Card";

const iconMap = {
  flame: Flame,
  thermometer: Thermometer,
  floor: Layers,
  bath: Bath,
  water: Droplets,
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <Link href={service.href} className="group block h-full">
      <Card className="flex h-full flex-col p-5 xl:p-4 2xl:p-6">
        <div className="mb-5 flex items-center justify-between xl:mb-4 2xl:mb-8">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <ArrowRight className="h-5 w-5 text-muted transition duration-300 group-hover:translate-x-1 group-hover:text-accent" aria-hidden />
        </div>
        <h3 className="text-lg font-semibold text-light 2xl:text-xl">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted 2xl:mt-4 2xl:text-base 2xl:leading-7">{service.short}</p>
        <div className="mt-4 border-t border-white/10 pt-4 text-sm font-semibold text-accent 2xl:mt-8 2xl:pt-5">{service.priceFrom}</div>
      </Card>
    </Link>
  );
}
