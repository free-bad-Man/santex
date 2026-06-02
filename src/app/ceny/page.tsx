import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { PricesSection } from "@/components/sections/PricesSection";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { priceDisclaimer, priceList } from "@/data/prices";
import { leadSources } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Цены на инженерные коммуникации",
  description:
    "Цены от на котельные, отопление дома, водяной теплый пол, сантехнику в квартире, водоснабжение и канализацию в Москве и МО.",
  path: "/ceny",
});

export default function PricesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Цены"
        title="Стоимость работ по инженерным коммуникациям"
        text="Показываем ориентиры по работам. Финальная смета зависит от объекта, оборудования, материалов, трасс, доступа и сроков."
        breadcrumbs={[{ label: "Цены" }]}
        chips={["Работы отдельно", "Материалы отдельно", "2-3 варианта сметы"]}
      />
      <section className="section-spacing">
        <div className="container-page">
          <GlassPanel className="p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-light">Цены от</h2>
            <div className="equal-grid mt-6 gap-3 md:grid-cols-2">
              {priceList.map((item) => (
                <div key={item} className="flex min-h-14 items-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-muted">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 p-4 leading-7 text-light">{priceDisclaimer}</p>
          </GlassPanel>
        </div>
      </section>
      <PricesSection />
      <CtaSection source={leadSources.prices} title="Получите смету под ваш объект" />
    </>
  );
}
