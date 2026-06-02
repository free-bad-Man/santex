import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { SeoTextSection } from "@/components/sections/SeoTextSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Услуги инженерных коммуникаций",
  description: "Котельные, отопление, водяной теплый пол, сантехника в квартире, водоснабжение и канализация под ключ в Москве и МО.",
  path: "/uslugi",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Навигатор услуг"
        title="Инженерные коммуникации под ключ"
        text="Выберите направление: котельная, отопление, теплый пол, сантехника в квартире, водоснабжение и канализация. Каждую систему проектируем с учетом эксплуатации и обслуживания."
        breadcrumbs={[{ label: "Услуги" }]}
        chips={["Квартиры", "Частные дома", "Коммерция", "Москва и МО"]}
      />
      <ServicesSection
        title="Основные услуги"
        text="Каждая услуга может быть отдельным этапом или частью комплексной инженерии объекта."
      />
      <SeoTextSection
        title="Один подрядчик на воду, тепло и канализацию"
        paragraphs={[
          "Когда инженерные системы делают разные исполнители, на стыках часто появляются конфликтующие решения. Мы смотрим на объект целиком: трассы, доступ к узлам, будущую отделку, оборудование и сценарии эксплуатации.",
          "Такой подход особенно важен в частных домах и квартирах с несколькими санузлами, теплым полом, сложной кухней, постирочной или техническим помещением.",
        ]}
      />
    </>
  );
}
