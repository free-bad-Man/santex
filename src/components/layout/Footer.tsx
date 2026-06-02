import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { legalLinks, navItems, serviceNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-main/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-7 2xl:px-8 2xl:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo-engineering-systems.png"
                alt={siteConfig.name}
                width={420}
                height={131}
                className="h-16 w-auto max-w-[300px] object-contain"
              />
            </Link>
            <p className="mt-6 max-w-md leading-8 text-muted">{siteConfig.description}</p>
            <ButtonLink href="/kontakty" className="mt-8" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
              Рассчитать стоимость
            </ButtonLink>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FooterColumn title="Услуги" items={serviceNavItems} />
            <FooterColumn title="Навигация" items={navItems} />
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Контакты</h3>
              <div className="mt-5 space-y-4 text-sm text-muted">
                <a href={siteConfig.phoneHref} className="flex items-center gap-3 transition hover:text-accent">
                  <Phone className="h-4 w-4 text-accent" aria-hidden />
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition hover:text-accent">
                  <Mail className="h-4 w-4 text-accent" aria-hidden />
                  {siteConfig.email}
                </a>
                <span className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden />
                  {siteConfig.location}
                </span>
                <div className="flex gap-3 pt-2">
                  <a
                    href={siteConfig.whatsapp}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] text-light transition hover:border-accent/50 hover:text-accent"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                  </a>
                  <a
                    href={siteConfig.telegram}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] text-light transition hover:border-accent/50 hover:text-accent"
                    aria-label="Telegram"
                  >
                    <Send className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Инженерные коммуникации под ключ.</p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-accent">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm text-muted transition hover:text-accent">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
