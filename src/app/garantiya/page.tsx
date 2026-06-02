import type { Metadata } from "next";
import { AlertCircle, BadgeCheck, ClipboardCheck, ShieldCheck } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Гарантия на инженерные работы",
  description:
    "Гарантия на монтаж инженерных коммуникаций: условия, пакеты, опрессовка, фотоотчет и правила эксплуатации систем.",
  path: "/garantiya",
});

const warrantyItems = [
  {
    icon: ShieldCheck,
    title: "Гарантия на монтаж",
    text: "Распространяется на выполненные нами работы при соблюдении условий эксплуатации и доступа к узлам.",
  },
  {
    icon: BadgeCheck,
    title: "Гарантия по пакетам",
    text: "Условия зависят от состава работ, оборудования, материалов и уровня участия в комплектации.",
  },
  {
    icon: ClipboardCheck,
    title: "Опрессовка",
    text: "Проверка давлением фиксирует состояние системы до закрытия коммуникаций и отделочных работ.",
  },
  {
    icon: AlertCircle,
    title: "Что не входит",
    text: "Не покрываются сторонние вмешательства, скрытые дефекты чужих работ, неправильная эксплуатация и материалы вне согласованной спецификации.",
  },
];

export default function WarrantyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Гарантия"
        title="Гарантия начинается с правильной проверки"
        text="Мы не обещаем невозможное. Мы фиксируем состав работ, проверяем систему, передаем фотоотчет и объясняем условия гарантии до сдачи объекта."
        breadcrumbs={[{ label: "Гарантия" }]}
        chips={["Монтаж", "Опрессовка", "Фотоотчет", "Условия эксплуатации"]}
      />
      <section className="section-spacing">
        <div className="container-page equal-grid gap-5 md:grid-cols-2 lg:grid-cols-4 2xl:gap-6">
          {warrantyItems.map((item) => (
            <BenefitCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </section>
      <section className="section-spacing">
        <div className="container-page equal-grid gap-5 lg:grid-cols-2 2xl:gap-6">
          <GlassPanel className="h-full p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-light">Почему важна опрессовка</h2>
            <p className="mt-5 leading-8 text-muted">
              Опрессовка показывает герметичность до того, как трубы окажутся под стяжкой, плиткой или в коробах. Это контрольный этап,
              который защищает ремонт от дорогих переделок.
            </p>
          </GlassPanel>
          <GlassPanel className="h-full p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-light">Условия гарантии</h2>
            <p className="mt-5 leading-8 text-muted">
              Гарантия действует на согласованный объем монтажа. Для ее сохранения важно не менять систему сторонними силами,
              соблюдать рабочие режимы и сохранять доступ к сервисным элементам.
            </p>
          </GlassPanel>
        </div>
      </section>
      <CtaSection title="Нужна инженерия с понятной гарантией?" />
    </>
  );
}
