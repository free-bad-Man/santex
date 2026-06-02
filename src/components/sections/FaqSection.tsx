import { commonFaq, type FaqItem } from "@/data/faq";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionTitle } from "@/components/ui/SectionTitle";

type FaqSectionProps = {
  items?: FaqItem[];
  title?: string;
};

export function FaqSection({ items = commonFaq, title = "Частые вопросы" }: FaqSectionProps) {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <SectionTitle
          eyebrow="FAQ"
          title={title}
          text="Отвечаем на вопросы, которые обычно возникают до сметы, выезда инженера и начала монтажа."
        />
        <div className="mt-5 2xl:mt-7">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
