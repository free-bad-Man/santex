import type { Metadata } from "next";
import { BadgeCheck, Camera, Gauge, Users } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "О компании",
  description:
    "МСК Инженерные Системы - инженерная команда по котельным, отоплению, водоснабжению, канализации, теплым полам и сантехнике.",
  path: "/o-kompanii",
});

const values = [
  { icon: Users, title: "Инженерная команда", text: "Смотрим на объект как на систему, а не как на набор отдельных точек подключения." },
  { icon: Camera, title: "Прозрачность работ", text: "Фиксируем скрытые этапы, чтобы у заказчика оставалась понятная история монтажа." },
  { icon: Gauge, title: "Проверка давлением", text: "Не закрываем коммуникации до опрессовки и контроля герметичности." },
  { icon: BadgeCheck, title: "Ответственность", text: "Работаем по смете, договору, поэтапной оплате и гарантии на монтаж." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="О компании"
        title="Мы не сантехник на час. Мы инженерная команда."
        text="Делаем коммуникации, которые должны выдерживать годы эксплуатации: воду, тепло, канализацию, котельные, теплые полы и сантехнические узлы."
        breadcrumbs={[{ label: "О компании" }]}
        chips={["Москва и МО", "Смета", "Договор", "Фотоотчет", "Гарантия"]}
      />
      <section className="section-spacing">
        <div className="container-page equal-grid gap-5 md:grid-cols-2 lg:grid-cols-4 2xl:gap-6">
          {values.map((item) => (
            <BenefitCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </section>
      <section className="section-spacing">
        <div className="container-page">
          <GlassPanel className="p-6 md:p-10">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-light md:text-4xl 2xl:text-5xl">
              Главный результат - система, в которой можно разобраться после ремонта
            </h2>
            <div className="mt-5 grid gap-5 leading-7 text-muted md:grid-cols-2 2xl:mt-8 2xl:gap-6 2xl:leading-8">
              <p>
                Мы заранее думаем о том, где будут фильтры, коллекторы, насосы, ревизии, запорная арматура и сервисные зоны.
                Это не всегда видно на красивых фото, но именно это определяет качество эксплуатации.
              </p>
              <p>
                Поэтому в работе важны не только трубы и оборудование, но и порядок: понятная смета, согласование решений,
                фотоотчет скрытых работ, опрессовка и аккуратная передача объекта.
              </p>
            </div>
          </GlassPanel>
        </div>
      </section>
      <CtaSection title="Расскажите о вашем объекте" />
    </>
  );
}
