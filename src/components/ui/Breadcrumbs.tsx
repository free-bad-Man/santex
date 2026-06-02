import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Хлебные крошки" className="mb-5 flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-bg-main/35 px-4 py-3 text-sm text-muted">
      <Link href="/" className="transition hover:text-accent">
        Главная
      </Link>
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-steel" aria-hidden />
          {item.href ? (
            <Link href={item.href} className="transition hover:text-accent">
              {item.label}
            </Link>
          ) : (
            <span className="text-light">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
