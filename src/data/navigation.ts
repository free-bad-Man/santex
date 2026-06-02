export type NavigationItem = {
  label: string;
  href: string;
};

export const navItems: NavigationItem[] = [
  { label: "Услуги", href: "/uslugi" },
  { label: "Цены", href: "/ceny" },
  { label: "Наши работы", href: "/portfolio" },
  { label: "О компании", href: "/o-kompanii" },
  { label: "Гарантия", href: "/garantiya" },
  { label: "Отзывы", href: "/otzyvy" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/kontakty" },
];

export const serviceNavItems: NavigationItem[] = [
  { label: "Котельные под ключ", href: "/kotelnye-pod-klyuch" },
  { label: "Отопление частного дома", href: "/otoplenie-chastnogo-doma" },
  { label: "Водяной теплый пол", href: "/vodyanoy-teplyy-pol" },
  { label: "Сантехника в квартире", href: "/santehnika-v-kvartire" },
  { label: "Водоснабжение и канализация", href: "/vodosnabzhenie-kanalizaciya" },
];

export const legalLinks: NavigationItem[] = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Обработка персональных данных", href: "/personal-data" },
];
