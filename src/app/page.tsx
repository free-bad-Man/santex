import type { Metadata } from "next";
import { AlertTriangle, CheckCircle, Layers, Wrench } from "lucide-react";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricesSection } from "@/components/sections/PricesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SeoTextSection } from "@/components/sections/SeoTextSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Инженерные коммуникации под ключ",
  description: siteConfig.description,
  path: "/",
});

const turnkeyItems = [
  "Котельные, обвязка, бойлеры и насосные группы",
  "Радиаторное отопление, магистрали и коллекторы",
  "Водяной теплый пол с опрессовкой до стяжки",
  "Сантехника в квартирах: вода, канализация, инсталляции",
  "Водоснабжение и канализация для домов и коммерческих объектов",
  "Помощь с материалами, оборудованием и спецификацией",
];

const riskItems = [
  "Скрытая протечка после чистовой отделки стоит дороже нормальной проверки системы.",
  "Хаотичная разводка усложняет обслуживание и делает любой ремонт непредсказуемым.",
  "Отсутствие фотоотчета превращает коммуникации за стеной в черный ящик.",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <BenefitsSection />

      <section className="section-spacing">
        <div className="container-page">
          <SectionTitle
            eyebrow="Под ключ"
            title="Что берем на себя"
            text="Закрываем инженерные коммуникации как систему: от предварительного расчета до сдачи с опрессовкой, фотоотчетом и понятными узлами."
          />
          <div className="equal-grid mt-5 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:mt-7">
            {turnkeyItems.map((item) => (
              <GlassPanel key={item} className="flex min-h-28 items-start gap-4 p-5">
                <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                  <CheckCircle className="h-4 w-4" aria-hidden />
                </span>
                <span className="leading-7 text-muted">{item}</span>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <PricesSection />
      <ProcessSection />
      <PortfolioSection />

      <section className="section-spacing">
        <div className="container-page">
          <GlassPanel className="mx-auto max-w-5xl p-6 md:p-8 lg:p-10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
              <AlertTriangle className="h-6 w-6" aria-hidden />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-light md:text-4xl 2xl:text-5xl">
              Почему не стоит экономить на инженерии
            </h2>
            <p className="mt-5 leading-8 text-muted">
              Инженерные коммуникации почти всегда становятся скрытыми. Ошибка в уклоне, соединении или доступе к узлам может проявиться уже после ремонта.
            </p>
          </GlassPanel>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4">
            {riskItems.map((item) => (
              <GlassPanel key={item} className="flex gap-4 p-5">
                <Wrench className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <p className="leading-7 text-muted">{item}</p>
              </GlassPanel>
            ))}
            <GlassPanel className="flex gap-4 border-accent/25 p-5">
              <Layers className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <p className="leading-7 text-light">
                Мы делаем системы, которые не просто работают, а остаются понятными и обслуживаемыми после ремонта.
              </p>
            </GlassPanel>
          </div>
        </div>
      </section>

      <FaqSection />
      <SeoTextSection
        title="Инженерные коммуникации для квартир, домов и коммерческих объектов"
        paragraphs={[
          "Компания работает с объектами в Москве и Московской области: квартирами, частными домами, коттеджами, небольшими коммерческими помещениями. Основной фокус - аккуратные системы воды, тепла и канализации, которые можно обслуживать после завершения ремонта.",
          "Перед стартом мы уточняем вводные, готовим предварительный расчет, предлагаем варианты комплектации и фиксируем договоренности. На скрытых этапах делаем фотоотчет, а перед сдачей проверяем систему опрессовкой.",
        ]}
      />
      <CtaSection />
    </>
  );
}
