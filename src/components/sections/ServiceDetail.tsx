import { CheckCircle, Layers, ShieldCheck } from "lucide-react";
import { cases } from "@/data/cases";
import { serviceFaq } from "@/data/faq";
import { priceGroups } from "@/data/prices";
import type { Service } from "@/data/services";
import { leadSources } from "@/data/site";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PriceCard } from "@/components/ui/PriceCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CasesSection } from "./CasesSection";
import { CtaSection } from "./CtaSection";
import { FaqSection } from "./FaqSection";
import { PageIntro } from "./PageIntro";

const relatedCategory: Record<Service["slug"], string> = {
  "kotelnye-pod-klyuch": "котельные",
  "otoplenie-chastnogo-doma": "отопление",
  "vodyanoy-teplyy-pol": "теплый пол",
  "santehnika-v-kvartire": "сантехника в квартире",
  "vodosnabzhenie-kanalizaciya": "водоснабжение и канализация",
};

type ServiceDetailProps = {
  service: Service;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  const priceGroup = priceGroups.find((group) => group.href === service.href);
  const relatedCases = cases.filter((item) => item.category === relatedCategory[service.slug]);

  return (
    <>
      <PageIntro
        eyebrow="Услуга"
        title={service.h1}
        text={service.offer}
        breadcrumbs={[{ label: "Услуги", href: "/uslugi" }, { label: service.title }]}
        chips={["Работа по смете", "Договор", "Фотоотчет", "Опрессовка", service.priceFrom]}
      />

      <section className="section-spacing">
        <div className="container-page equal-grid gap-5 lg:grid-cols-2 2xl:gap-6">
          <GlassPanel className="h-full p-6 md:p-8">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
              <Layers className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-3xl font-semibold text-light">Что входит</h2>
            <div className="mt-6 grid gap-4">
              {service.includes.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-muted">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="h-full p-6 md:p-8">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
              <ShieldCheck className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-3xl font-semibold text-light">Преимущества</h2>
            <div className="mt-6 grid gap-4">
              {service.benefits.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-muted">
                  {item}
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </section>

      {priceGroup ? (
        <section className="section-spacing">
          <div className="container-page">
            <SectionTitle
              eyebrow="Пакеты"
              title="Стоимость зависит от объекта и комплектации"
              text="Сначала уточняем вводные, затем предлагаем рациональный состав работ и оборудования."
            />
            <div className="mt-5 2xl:mt-7">
              <PriceCard group={priceGroup} wide />
            </div>
          </div>
        </section>
      ) : null}

      <CasesSection
        items={relatedCases.length ? relatedCases : cases.slice(0, 3)}
        title="Примеры работ по направлению"
        text="Показываем не рекламные обещания, а инженерную логику: трассы, узлы, сроки и результат."
      />

      <FaqSection items={serviceFaq[service.slug]} title={`Вопросы по услуге "${service.title}"`} />
      <CtaSection source={`${leadSources.service}:${service.slug}`} title="Обсудим ваш объект и подготовим расчет" />
    </>
  );
}
