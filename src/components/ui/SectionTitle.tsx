import { Badge } from "./Badge";
import { GlassPanel } from "./GlassPanel";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  panel?: boolean;
  className?: string;
};

export function SectionTitle({ eyebrow, title, text, align = "left", panel = true, className }: SectionTitleProps) {
  const content = (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-light md:text-4xl 2xl:mt-5 2xl:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-muted 2xl:mt-5 2xl:text-lg 2xl:leading-8">{text}</p> : null}
    </div>
  );

  if (!panel) {
    return <div className={className}>{content}</div>;
  }

  return <GlassPanel className={cn("p-5 md:p-6 lg:p-7 2xl:p-10", className)}>{content}</GlassPanel>;
}
