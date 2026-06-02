import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Партнерам",
  description:
    "Партнерство для дизайнеров, архитекторов, прорабов, строителей домов, ремонтных компаний, магазинов сантехники и оборудования.",
  path: "/partneram",
});

export default function PartnersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Партнерам"
        title="Берем инженерные коммуникации на ваших объектах"
        text="Котельные, отопление, теплый пол, водоснабжение и канализация. Работаем по смете, договору и с фотоотчетом."
        breadcrumbs={[{ label: "Партнерам" }]}
        chips={["Дизайнеры", "Архитекторы", "Прорабы", "Строители", "Магазины оборудования"]}
      />
      <PartnersSection />
    </>
  );
}
