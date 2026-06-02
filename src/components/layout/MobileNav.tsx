"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calculator, Menu, MessageCircle, Phone, Send, X } from "lucide-react";
import { navItems, serviceNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <div className="flex items-center gap-2">
        <a
          href={siteConfig.phoneHref}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.05] text-light"
          aria-label="Позвонить"
        >
          <Phone className="h-5 w-5" aria-hidden />
        </a>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.05] text-light"
          onClick={() => setOpen(true)}
          aria-label="Открыть меню"
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[100] bg-[#070A0F]">
          <div className="flex h-20 items-center justify-between border-b border-white/10 bg-[#070A0F] px-4">
            <Image
              src="/images/logo-engineering-systems.png"
              alt={siteConfig.name}
              width={300}
              height={93}
              className="h-11 w-auto max-w-[220px] object-contain"
            />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] text-light"
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <div className="h-[calc(100dvh-80px)] overflow-y-auto px-4 py-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-base font-semibold text-light"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 rounded-[24px] border border-white/[0.12] bg-white/[0.05] p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Услуги</p>
              <div className="mt-4 grid gap-2">
                {serviceNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-3 py-2 text-sm text-muted transition hover:bg-white/[0.06] hover:text-light"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-3 pb-4">
              <ButtonLink href="/kontakty" full icon={<Calculator className="h-4 w-4" aria-hidden />} ariaLabel="Рассчитать стоимость">
                Рассчитать
              </ButtonLink>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.whatsapp}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] px-4 py-3 text-sm font-semibold text-light"
                >
                  <MessageCircle className="h-4 w-4 text-accent" aria-hidden />
                  WhatsApp
                </a>
                <a
                  href={siteConfig.telegram}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] px-4 py-3 text-sm font-semibold text-light"
                >
                  <Send className="h-4 w-4 text-accent" aria-hidden />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
