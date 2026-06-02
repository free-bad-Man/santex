import { GlassPanel } from "@/components/ui/GlassPanel";

type SeoTextSectionProps = {
  title: string;
  paragraphs: string[];
};

export function SeoTextSection({ title, paragraphs }: SeoTextSectionProps) {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <GlassPanel className="p-6 md:p-8 lg:p-10">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-light md:text-4xl 2xl:text-5xl">{title}</h2>
          <div className="mt-5 grid gap-5 text-base leading-7 text-muted md:grid-cols-2 2xl:mt-8 2xl:gap-6 2xl:leading-8">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
