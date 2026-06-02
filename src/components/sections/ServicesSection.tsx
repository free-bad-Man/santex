import { services } from "@/data/services";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";

type ServicesSectionProps = {
  title?: string;
  text?: string;
};

export function ServicesSection({
  title = "Пять направлений инженерии в одном контуре ответственности",
  text = "Не передаем воду, тепло и канализацию разным подрядчикам. Проектируем и монтируем системы так, чтобы они работали вместе и оставались понятными после ремонта.",
}: ServicesSectionProps) {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <SectionTitle eyebrow="Услуги" title={title} text={text} />
        <div className="equal-grid mt-5 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:mt-7 2xl:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
