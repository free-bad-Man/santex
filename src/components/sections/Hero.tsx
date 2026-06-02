import { ArrowRight, Calculator, CheckCircle, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="container-page flex items-center justify-center py-5 md:py-6 lg:py-6 2xl:min-h-[calc(100svh-88px)] 2xl:py-12">
        <GlassPanel className="animate-fade-up mx-auto max-w-[720px] p-5 md:p-7 2xl:max-w-[760px] 2xl:p-9">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent md:text-sm">
            <CheckCircle className="h-4 w-4" aria-hidden />
            {siteConfig.tagline}
          </div>
          <h1 className="text-[34px] font-semibold leading-[1.08] text-light md:text-[44px] lg:text-5xl 2xl:text-[56px]">
            <span className="block">Инженерные коммуникации</span>
            <span className="block">под ключ в Москве</span>
            <span className="block">и МО</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#DDE3EA] 2xl:mt-6 2xl:text-lg 2xl:leading-8">
            Котельные, отопление, водоснабжение, канализация, водяной теплый пол и сантехника в квартирах.
            Работаем по смете, договору, с фотоотчетом и гарантией.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 2xl:mt-8 2xl:gap-4">
            <ButtonLink href="/kontakty" size="lg" full icon={<Calculator className="h-5 w-5" aria-hidden />}>
              Рассчитать стоимость
            </ButtonLink>
            <ButtonLink href={siteConfig.phoneHref} size="lg" full variant="secondary" icon={<PhoneCall className="h-5 w-5" aria-hidden />}>
              Вызвать инженера
            </ButtonLink>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 2xl:mt-8">
            {siteConfig.heroBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-bg-main/35 px-4 py-3 text-sm text-light">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {badge}
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5 text-sm text-muted 2xl:mt-8 2xl:pt-6">
            <ArrowRight className="h-4 w-4 text-accent" aria-hidden />
            Пришлите фото, план или проект - рассчитаем предварительную стоимость и предложим 2-3 варианта решения.
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
