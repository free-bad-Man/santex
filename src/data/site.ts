export const BRAND_NAME = "МСК Инженерные Системы";
export const BRAND_SHORT_NAME = "Инженерные Системы";
export const BRAND_NAME_OPTIONS = ["ТеплоВода", "Коммуникации", "СантехИнжиниринг"];

export const siteConfig = {
  name: BRAND_NAME,
  shortName: BRAND_SHORT_NAME,
  url: "https://example.ru",
  tagline: "Вода. Тепло. Канализация. Под ключ.",
  description:
    "Котельные, отопление, водоснабжение, канализация, водяной теплый пол и сантехника в квартирах. Работаем по смете, договору, с фотоотчетом и гарантией.",
  phone: "+7 (999) 000-00-00",
  phoneHref: "tel:+79990000000",
  email: "info@example.ru",
  whatsapp: "https://wa.me/79990000000",
  telegram: "https://t.me/example",
  location: "Москва и Московская область",
  address: "Москва, выезд по Москве и МО",
  workingHours: "Ежедневно 09:00-20:00",
  heroImage: "/images/tools/hero-engineering-bg.png",
  heroBadges: [
    "Смета до начала работ",
    "Фотоотчет скрытых работ",
    "Опрессовка перед сдачей",
    "Москва и Московская область",
  ],
};

export const leadSources = {
  homepage: "homepage",
  service: "service-page",
  contacts: "contacts-page",
  prices: "prices-page",
  partners: "partners-page",
};

export type Lead = {
  name: string;
  phone: string;
  objectType: "apartment" | "house" | "commercial";
  service: string;
  area?: string;
  location?: string;
  message?: string;
  source: string;
};
