import type { Metadata } from "next";
import { CasesSection } from "@/components/sections/CasesSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { cases } from "@/data/cases";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Портфолио инженерных работ",
  description:
    "Кейсы по котельным, отоплению, теплому полу, сантехнике, водоснабжению и канализации в Москве и Московской области.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Портфолио"
        title="Выполненные инженерные работы"
        text="Каждый кейс показывает объект, задачу, состав работ, срок, особенности и результат. Фокус - аккуратность, надежность и обслуживаемость."
        breadcrumbs={[{ label: "Портфолио" }]}
        chips={["Котельные", "Отопление", "Теплый пол", "Сантехника", "Вода и канализация"]}
      />
      <CasesSection items={cases} />
    </>
  );
}
