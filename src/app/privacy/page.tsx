import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности сайта МСК Инженерные Системы.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Документы"
        title="Политика конфиденциальности"
        text="Заготовка юридической страницы. Перед публикацией текст нужно согласовать с юристом и адаптировать под реальные процессы обработки данных."
        breadcrumbs={[{ label: "Политика конфиденциальности" }]}
      />
      <section className="section-spacing">
        <div className="container-page">
          <GlassPanel className="p-6 leading-8 text-muted md:p-10">
            <p>
              Сайт использует данные, которые пользователь самостоятельно отправляет через форму заявки: имя, телефон,
              тип объекта, услугу, площадь, локацию и комментарий. Данные используются для связи и подготовки предварительного расчета.
            </p>
          </GlassPanel>
        </div>
      </section>
    </>
  );
}
