import type { CaseItem } from "@/data/cases";
import { PortfolioGrid } from "@/components/ui/PortfolioGrid";
import { SectionTitle } from "@/components/ui/SectionTitle";

type CasesSectionProps = {
  items: CaseItem[];
  title?: string;
  text?: string;
};

export function CasesSection({
  items,
  title = "Выполненные работы",
  text = "Кейсы по котельным, отоплению, теплым полам, сантехнике, водоснабжению и канализации.",
}: CasesSectionProps) {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <SectionTitle eyebrow="Кейсы" title={title} text={text} />
        <div className="mt-5 2xl:mt-7">
          <PortfolioGrid items={items} />
        </div>
      </div>
    </section>
  );
}
