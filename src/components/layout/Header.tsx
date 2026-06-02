import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg-main/[0.62] backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-[1720px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-5 xl:px-6 2xl:h-[88px] 2xl:gap-5 2xl:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label={siteConfig.name}>
          <Image
            src="/images/logo-engineering-systems.png"
            alt={siteConfig.name}
            width={360}
            height={112}
            priority
            className="h-11 w-auto max-w-[190px] object-contain sm:h-12 sm:max-w-[220px] xl:h-11 xl:max-w-[190px] 2xl:h-16 2xl:max-w-[300px]"
          />
        </Link>

        <nav className="hidden min-w-0 items-center gap-0.5 xl:flex 2xl:gap-1" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-2 py-2 text-[13px] font-medium text-muted transition hover:bg-white/[0.06] hover:text-light 2xl:px-3 2xl:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex 2xl:gap-3">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-3 text-[13px] font-semibold text-light transition hover:border-accent/40 hover:text-accent 2xl:px-4 2xl:text-sm"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {siteConfig.phone}
          </a>
          <ButtonLink href="/kontakty" className="h-12 whitespace-nowrap px-5 text-[13px] 2xl:text-sm" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
            Рассчитать стоимость
          </ButtonLink>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
