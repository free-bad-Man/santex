import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";

const processSteps = [
  "Заявка",
  "Фото / план / проект",
  "Предварительный расчет",
  "Выезд инженера",
  "Смета в 2-3 вариантах",
  "Договор и старт работ",
  "Монтаж",
  "Опрессовка и фотоотчет",
  "Сдача объекта и гарантия",
];

export function ProcessSection() {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <SectionTitle
          eyebrow="Как работаем"
          title="Процесс без тумана: от фото объекта до сдачи системы"
          text="Каждый этап нужен не для видимости порядка, а для контроля: смета до старта, договор, монтаж, проверка давлением и понятная передача результата."
        />
        <div className="mt-5 2xl:mt-7">
          <ProcessTimeline steps={processSteps} />
        </div>
      </div>
    </section>
  );
}
