import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Блог об инженерных коммуникациях",
  description: "Материалы о котельных, отоплении, водоснабжении, канализации, теплых полах, сантехнике и контроле качества.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Блог"
        title="Заметки об инженерии без лишнего шума"
        text="Заготовка SEO-раздела для полезных материалов о монтаже, проверке, обслуживании и типичных ошибках в инженерных коммуникациях."
        breadcrumbs={[{ label: "Блог" }]}
        chips={["Котельные", "Опрессовка", "Сантехника", "Обслуживание"]}
      />
      <section className="section-spacing">
        <div className="container-page equal-grid gap-5 md:grid-cols-3 2xl:gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
              <GlassPanel className="flex h-full flex-col p-6 transition group-hover:border-accent/[0.35]">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Clock className="h-4 w-4 text-accent" aria-hidden />
                  {formatDate(post.date)} · {post.readingTime}
                </div>
                <h2 className="mt-5 text-2xl font-semibold leading-tight text-light">{post.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-muted">{post.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Читать
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                </div>
              </GlassPanel>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
