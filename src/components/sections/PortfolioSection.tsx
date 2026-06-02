import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cases } from "@/data/cases";
import { PortfolioGrid } from "@/components/ui/PortfolioGrid";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function PortfolioSection() {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <GlassPanel className="p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Портфолио"
              title="Работы, где важны аккуратность и сервисный доступ"
              text="Кейсы показывают подход: понятные узлы, фотофиксация, проверка системы и результат, который можно обслуживать."
              panel={false}
            />
            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-bg-main/35 px-5 py-3 text-sm font-semibold text-accent transition hover:border-accent/40 hover:text-light">
              Все работы
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </GlassPanel>
        <div className="mt-5 2xl:mt-7">
          <PortfolioGrid items={cases.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
}
