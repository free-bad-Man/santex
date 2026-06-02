import { ArrowRight } from "lucide-react";
import { leadSources } from "@/data/site";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { LeadForm } from "@/components/ui/LeadForm";

type CtaSectionProps = {
  source?: string;
  title?: string;
  text?: string;
};

export function CtaSection({
  source = leadSources.homepage,
  title = "Пришлите фото, план или проект",
  text = "Рассчитаем предварительную стоимость и предложим 2-3 варианта решения: от рационального до расширенного.",
}: CtaSectionProps) {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <GlassPanel className="grid gap-6 p-5 md:p-6 lg:grid-cols-[0.82fr_1.18fr] lg:p-7 2xl:gap-10 2xl:p-10">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
              <ArrowRight className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-light md:text-4xl 2xl:text-5xl">{title}</h2>
            <p className="mt-4 leading-7 text-muted 2xl:mt-5 2xl:leading-8">{text}</p>
            <div className="mt-5 grid gap-3 text-sm text-muted 2xl:mt-8">
              <span className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">Смета до начала работ</span>
              <span className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">Фотоотчет скрытых работ</span>
              <span className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">Опрессовка перед сдачей</span>
            </div>
          </div>
          <LeadForm source={source} />
        </GlassPanel>
      </div>
    </section>
  );
}
