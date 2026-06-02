import type { Metadata } from "next";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Контакты",
  description: "Контакты МСК Инженерные Системы: телефон, WhatsApp, Telegram, email, форма заявки. Работаем по Москве и МО.",
  path: "/kontakty",
});

export default function ContactsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Контакты"
        title="Свяжитесь с инженерной командой"
        text="Пришлите фото, план или проект. Мы уточним задачу, подготовим предварительный расчет и предложим следующий шаг."
        breadcrumbs={[{ label: "Контакты" }]}
        chips={["Телефон", "WhatsApp", "Telegram", "Email", "Москва и МО"]}
      />
      <ContactsSection />
    </>
  );
}
