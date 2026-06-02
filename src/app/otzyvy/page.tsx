import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Отзывы клиентов",
  description: "Отзывы клиентов о монтаже котельных, отопления, теплых полов, сантехники, водоснабжения и канализации.",
  path: "/otzyvy",
});

const reviews = [
  {
    name: "Алексей",
    object: "Дом, Истринский район",
    text: "Нужно было собрать котельную так, чтобы потом можно было обслуживать без разборки половины стены. Получилось аккуратно, все подписано, после работ передали фото и объяснили схему.",
  },
  {
    name: "Марина",
    object: "Квартира, Хамовники",
    text: "Делали сантехнику под дизайн-проект. Понравилось, что заранее проверили выводы, не торопили с решениями и показали, где лучше оставить доступ.",
  },
  {
    name: "Илья",
    object: "Коммерческое помещение",
    text: "Для нас было важно не сорвать график ремонта. Ребята работали по этапам, давали фотоотчет и спокойно согласовывали изменения с прорабом.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Отзывы"
        title="Спокойная инженерия оставляет спокойные отзывы"
        text="Пока здесь собраны placeholder-карточки. Структура раздела готова для реальных отзывов, фото объектов и ссылок на подтверждения."
        breadcrumbs={[{ label: "Отзывы" }]}
        chips={["Квартиры", "Дома", "Коммерция"]}
      />
      <section className="section-spacing">
        <div className="container-page equal-grid gap-5 md:grid-cols-3 2xl:gap-6">
          {reviews.map((review) => (
            <GlassPanel key={review.name} className="flex h-full flex-col p-6">
              <Quote className="h-8 w-8 text-accent" aria-hidden />
              <div className="mt-5 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <p className="mt-5 flex-1 leading-8 text-muted">{review.text}</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="font-semibold text-light">{review.name}</div>
                <div className="mt-1 text-sm text-muted">{review.object}</div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </section>
      <CtaSection title="Хотите такой же спокойный процесс на своем объекте?" />
    </>
  );
}
