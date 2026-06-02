import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { leadSources, siteConfig } from "@/data/site";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { LeadForm } from "@/components/ui/LeadForm";
import { SectionTitle } from "@/components/ui/SectionTitle";

const contactItems = [
  { icon: Phone, label: "Телефон", value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Написать в WhatsApp", href: siteConfig.whatsapp },
  { icon: Send, label: "Telegram", value: "Написать в Telegram", href: siteConfig.telegram },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "География", value: siteConfig.location, href: null },
];

export function ContactsSection() {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <SectionTitle
          eyebrow="Контакты"
          title="Опишите объект - подскажем следующий инженерный шаг"
          text="Можно начать с фото, плана или короткого описания. Если нужен точный расчет, договоримся о выезде инженера."
        />
        <div className="equal-grid mt-5 gap-5 lg:grid-cols-2 2xl:mt-7 2xl:gap-6">
          <div className="grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <GlassPanel className="flex min-h-24 items-center gap-4 p-5 transition hover:border-accent/[0.35]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">{item.label}</span>
                    <span className="mt-1 block font-semibold text-light">{item.value}</span>
                  </span>
                </GlassPanel>
              );

              return item.href ? (
                <a key={item.label} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
          <GlassPanel className="h-full p-6 md:p-8">
            <LeadForm source={leadSources.contacts} />
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
