import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "Статья не найдена",
      description: "Статья блога не найдена.",
      path: "/blog",
    });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageIntro
        eyebrow={`${formatDate(post.date)} · ${post.readingTime}`}
        title={post.title}
        text={post.description}
        breadcrumbs={[{ label: "Блог", href: "/blog" }, { label: post.title }]}
        chips={post.tags}
      />
      <section className="section-spacing">
        <div className="container-page">
          <GlassPanel className="mx-auto overflow-hidden p-0">
            <div className="relative aspect-[16/7] min-h-[280px] bg-bg-graphite">
              <Image src={post.image} alt={post.title} fill className="object-cover opacity-80" sizes="(min-width: 1024px) 1180px, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/15 to-transparent" />
            </div>
            <div className="space-y-6 p-6 text-lg leading-9 text-muted md:p-10">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </GlassPanel>
        </div>
      </section>
      <CtaSection source={`blog:${post.slug}`} title="Есть вопрос по инженерии вашего объекта?" />
    </>
  );
}
