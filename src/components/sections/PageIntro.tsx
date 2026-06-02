import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { GlassPanel } from "@/components/ui/GlassPanel";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  text: string;
  breadcrumbs?: BreadcrumbItem[];
  chips?: string[];
};

export function PageIntro({ eyebrow, title, text, breadcrumbs, chips }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden py-4 md:py-5 lg:py-5 2xl:py-8">
      <div className="container-page relative">
        <GlassPanel className="mx-auto p-5 md:p-7 2xl:p-9">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p> : null}
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-light md:text-5xl 2xl:text-6xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted 2xl:mt-6 2xl:text-lg 2xl:leading-8">{text}</p>
          {chips?.length ? (
            <div className="mt-5 flex flex-wrap gap-3 2xl:mt-8">
              {chips.map((chip) => (
                <span key={chip} className="rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-sm text-light">
                  {chip}
                </span>
              ))}
            </div>
          ) : null}
        </GlassPanel>
      </div>
    </section>
  );
}
