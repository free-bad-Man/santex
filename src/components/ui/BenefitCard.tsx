import type { LucideIcon } from "lucide-react";
import { Card } from "./Card";

type BenefitCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function BenefitCard({ icon: Icon, title, text }: BenefitCardProps) {
  return (
    <Card className="group flex h-full flex-col p-5 2xl:p-6">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent 2xl:mb-8">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="text-xl font-semibold text-light">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-muted 2xl:mt-4">{text}</p>
    </Card>
  );
}
