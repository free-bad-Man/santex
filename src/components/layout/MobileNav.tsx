"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Calculator, Menu, MessageCircle, Phone, Send, X } from "lucide-react";
import { navItems, serviceNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const scrollY = window.scrollY;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyWidth = document.body.style.width;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const menu = (
    <div className="fixed inset-0 z-[2147483647] min-h-[100dvh] overflow-hidden bg-[#070A0F] text-light lg:hidden">
      <div className="absolute inset-0 bg-[#070A0F]" />
      <div className="relative flex min-h-[100dvh] flex-col">
        <div className="flex h-[84px] shrink-0 items-center justify-between border-b border-white/10 bg-[#070A0F] px-4 pt-[env(safe-area-inset-top)]">
          <Image
            src="/images/logo-engineering-systems.png"
            alt={siteConfig.name}
            width={300}
            height={93}
            className="h-11 w-auto max-w-[220px] object-contain"
          />
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] text-light"
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain bg-[#070A0F] px-4 py-5 pb-[calc(24px+env(safe-area-inset-bottom))]">
          <div className="grid gap-2.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[54px] items-center rounded-2xl border border-white/10 bg-[#171B22] px-4 text-lg font-semibold text-light"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 rounded-[24px] border border-white/[0.12] bg-[#171B22] p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Услуги</p>
            <div className="mt-4 grid gap-2">
              {serviceNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-2xl border border-white/10 bg-[#0F1319] px-4 text-base font-medium text-muted transition hover:text-light"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            <Link
              href="/kontakty"
              onClick={() => setOpen(false)}
              aria-label="Рассчитать стоимость"
              className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full border border-accent/70 bg-accent px-5 text-sm font-semibold text-bg-main shadow-glow transition hover:border-accent hover:bg-[#d6ac6b]"
            >
              Рассчитать
              <Calculator className="h-4 w-4" aria-hidden />
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={siteConfig.whatsapp}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-[#171B22] px-4 text-sm font-semibold text-light"
              >
                <MessageCircle className="h-4 w-4 text-accent" aria-hidden />
                WhatsApp
              </a>
              <a
                href={siteConfig.telegram}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-[#171B22] px-4 text-sm font-semibold text-light"
              >
                <Send className="h-4 w-4 text-accent" aria-hidden />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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

      {open && mounted ? createPortal(menu, document.body) : null}
    </div>
  );
}
