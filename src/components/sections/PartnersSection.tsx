import { Briefcase, Building2, Handshake, Home, Store, Users } from "lucide-react";
import { leadSources } from "@/data/site";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { LeadForm } from "@/components/ui/LeadForm";
import { SectionTitle } from "@/components/ui/SectionTitle";

const partners = [
  { icon: Users, title: "Дизайнерам", text: "Согласуем выводы, скрытые узлы и фотоотчет под дизайн-проект." },
  { icon: Building2, title: "Архитекторам", text: "Берем инженерную часть без нарушения логики планировок и техзон." },
  { icon: Briefcase, title: "Прорабам", text: "Работаем по этапам и не ломаем график смежных работ." },
  { icon: Home, title: "Строителям домов", text: "Закрываем воду, тепло, котельную и канализацию одним подрядчиком." },
  { icon: Handshake, title: "Ремонтным компаниям", text: "Аккуратно интегрируемся в объект и ведем коммуникацию прозрачно." },
  { icon: Store, title: "Магазинам оборудования", text: "Монтируем системы под выбранное оборудование и спецификацию." },
];

export function PartnersSection() {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <SectionTitle
          eyebrow="Партнерам"
          title="Инженерная команда для ваших объектов"
          text="Берем на себя инженерные коммуникации: котельные, отопление, теплый пол, водоснабжение и канализацию. Работаем по смете, договору и с фотоотчетом."
        />
        <div className="equal-grid mt-5 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:mt-7 2xl:gap-6">
          {partners.map((item) => (
            <BenefitCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
        <GlassPanel className="mt-5 p-5 md:p-6 2xl:mt-7 2xl:p-8">
          <LeadForm source={leadSources.partners} />
        </GlassPanel>
      </div>
    </section>
  );
}
