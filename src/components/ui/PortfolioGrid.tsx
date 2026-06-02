import type { CaseItem } from "@/data/cases";
import { cn } from "@/lib/utils";
import { CaseCard } from "./CaseCard";

type PortfolioGridProps = {
  items: CaseItem[];
};

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const columnsClass =
    items.length === 1
      ? "grid-cols-1"
      : items.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={cn("equal-grid gap-4 2xl:gap-6", columnsClass)}>
      {items.map((item) => (
        <CaseCard key={item.slug} item={item} featured={items.length === 1} />
      ))}
    </div>
  );
}
