import { Camera, ClipboardCheck, FileText, Gauge, ShieldCheck, Wrench } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BenefitCard } from "@/components/ui/BenefitCard";

const benefits = [
  {
    icon: FileText,
    title: "Понятная смета до начала работ",
    text: "Фиксируем состав работ и предлагаем 2-3 варианта решения: базовый, оптимальный и расширенный.",
  },
  {
    icon: Camera,
    title: "Фотоотчет скрытых работ",
    text: "Сохраняем трассы, контуры, соединения и узлы до стяжки, штукатурки и закрытия коробами.",
  },
  {
    icon: Gauge,
    title: "Опрессовка перед сдачей",
    text: "Проверяем герметичность под давлением до того, как коммуникации станут недоступны.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия на монтаж",
    text: "Передаем объект с понятной схемой, актом и условиями гарантии по выполненным работам.",
  },
  {
    icon: Wrench,
    title: "Обслуживаемые узлы",
    text: "Проектируем доступ к фильтрам, коллекторам, насосам и запорной арматуре без демонтажа отделки.",
  },
  {
    icon: ClipboardCheck,
    title: "Поэтапная оплата",
    text: "Работа делится на понятные этапы: расчет, выезд, смета, монтаж, опрессовка и сдача.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <SectionTitle
          eyebrow="Контроль качества"
          title="Инженерные системы должны быть не только смонтированы, но и понятны"
          text="После ремонта у заказчика остается не загадка за плиткой и стяжкой, а обслуживаемая система с фотофиксацией, маркировкой и логикой."
        />
        <div className="equal-grid mt-5 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:mt-7 2xl:gap-6">
          {benefits.map((item) => (
            <BenefitCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
