import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { priceDisclaimer, priceGroups } from "@/data/prices";
import { PriceCard } from "@/components/ui/PriceCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassPanel } from "@/components/ui/GlassPanel";

type PricesSectionProps = {
  limit?: number;
};

export function PricesSection({ limit }: PricesSectionProps) {
  const groups = limit ? priceGroups.slice(0, limit) : priceGroups;

  return (
    <section className="section-spacing">
      <div className="container-page">
        <GlassPanel className="p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Цены"
              title="Пакеты с честной оговоркой по материалам"
              text="Стоимость зависит от объекта, трасс, оборудования и уровня комплектации. Работы считаем отдельно, материалы и доставка - отдельно."
              panel={false}
            />
            <Link href="/ceny" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-bg-main/35 px-5 py-3 text-sm font-semibold text-accent transition hover:border-accent/40 hover:text-light">
              Все цены
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </GlassPanel>
        <div className="equal-grid mt-5 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:mt-7 2xl:gap-6">
          {groups.map((group) => (
            <PriceCard key={group.service} group={group} />
          ))}
        </div>
        <GlassPanel className="mt-6 p-5">
          <p className="text-sm leading-7 text-muted">{priceDisclaimer}</p>
        </GlassPanel>
      </div>
    </section>
  );
}
