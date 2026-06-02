import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Clock, MapPin, Target, Wrench } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { cases, getCaseBySlug } from "@/data/cases";
import { createMetadata } from "@/lib/seo";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    return createMetadata({
      title: "Кейс не найден",
      description: "Кейс инженерных работ не найден.",
      path: "/portfolio",
    });
  }

  return createMetadata({
    title: item.title,
    description: item.result,
    path: `/portfolio/${item.slug}`,
    image: item.image,
  });
}

export default async function CaseDetailPage({ params }: CasePageProps) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <PageIntro
        eyebrow={item.category}
        title={item.title}
        text={item.task}
        breadcrumbs={[{ label: "Портфолио", href: "/portfolio" }, { label: item.title }]}
        chips={[item.object, item.location, item.term]}
      />
      <section className="section-spacing">
        <div className="container-page equal-grid gap-5 lg:grid-cols-2 2xl:gap-6">
          <GlassPanel className="h-full overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
            </div>
          </GlassPanel>
          <div className="grid h-full gap-4">
            <InfoCard icon={MapPin} title="Локация" text={item.location} />
            <InfoCard icon={Target} title="Задача" text={item.task} />
            <InfoCard icon={Clock} title="Срок" text={item.term} />
            <GlassPanel className="p-5">
              <div className="mb-4 flex items-center gap-3 text-lg font-semibold text-light">
                <Wrench className="h-5 w-5 text-accent" aria-hidden />
                Что сделали
              </div>
              <div className="grid gap-2">
                {item.works.map((work) => (
                  <span key={work} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-muted">
                    {work}
                  </span>
                ))}
              </div>
            </GlassPanel>
          </div>
        </div>
      </section>
      <section className="section-spacing">
        <div className="container-page equal-grid gap-5 md:grid-cols-2 2xl:gap-6">
          <GlassPanel className="h-full p-6">
            <h2 className="text-3xl font-semibold text-light">Особенности</h2>
            <div className="mt-6 grid gap-3">
              {item.features.map((feature) => (
                <p key={feature} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 leading-7 text-muted">
                  {feature}
                </p>
              ))}
            </div>
          </GlassPanel>
          <GlassPanel className="h-full p-6">
            <h2 className="text-3xl font-semibold text-light">Результат</h2>
            <p className="mt-6 leading-8 text-muted">{item.result}</p>
          </GlassPanel>
        </div>
      </section>
      <CtaSection source={`case:${item.slug}`} title="Хотите похожий уровень инженерии на своем объекте?" />
    </>
  );
}

function InfoCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <GlassPanel className="h-full p-5">
      <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        <Icon className="h-4 w-4 text-accent" aria-hidden />
        {title}
      </div>
      <p className="mt-3 text-lg font-semibold text-light">{text}</p>
    </GlassPanel>
  );
}
