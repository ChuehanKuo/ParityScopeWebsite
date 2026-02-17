import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getContentBySlug("blog", slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      ...(post.meta.image && { images: [post.meta.image] }),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getContentBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12">
          <time className="text-body-sm text-medium-gray">
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-2 text-h1 font-bold text-navy">
            {post.meta.title}
          </h1>
          <p className="mt-4 text-body-lg text-medium-gray">
            {post.meta.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-body-sm text-muted">
            <span>{post.meta.author}</span>
            {post.meta.authorRole && (
              <>
                <span>&middot;</span>
                <span>{post.meta.authorRole}</span>
              </>
            )}
            <span>&middot;</span>
            <span>{post.meta.readingTime}</span>
          </div>
        </header>
        <div className="prose prose-lg max-w-none">
          {/* MDX content will be rendered here when the MDX rendering pipeline is connected */}
          <p className="text-medium-gray">{post.content}</p>
        </div>
      </div>
    </article>
  );
}
