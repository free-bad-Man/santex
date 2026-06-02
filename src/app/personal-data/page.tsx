import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Обработка персональных данных",
  description: "Согласие на обработку персональных данных сайта МСК Инженерные Системы.",
  path: "/personal-data",
});

export default function PersonalDataPage() {
  return (
    <>
      <PageIntro
        eyebrow="Документы"
        title="Обработка персональных данных"
        text="Заготовка страницы согласия. Перед публикацией формулировки нужно проверить и привести к юридически корректному виду."
        breadcrumbs={[{ label: "Обработка персональных данных" }]}
      />
      <section className="section-spacing">
        <div className="container-page">
          <GlassPanel className="p-6 leading-8 text-muted md:p-10">
            <p>
              Отправляя форму на сайте, пользователь подтверждает согласие на обработку указанных данных для обратной связи,
              уточнения задачи и подготовки предварительного расчета инженерных работ.
            </p>
          </GlassPanel>
        </div>
      </section>
    </>
  );
}
