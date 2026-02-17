import type { Metadata } from "next";
import { getAllContent } from "@/lib/mdx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — AI Fairness & Healthcare Compliance Insights",
  description:
    "Expert insights on AI fairness, healthcare compliance, bias auditing, and regulatory updates from the ParityScope team.",
};

export default function BlogPage() {
  const posts = getAllContent("blog");

  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">Blog</h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Expert insights on AI fairness, healthcare compliance, and the
          evolving regulatory landscape.
        </p>

        {posts.length > 0 ? (
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="group rounded-xl border border-light-gray p-6 transition-shadow hover:shadow-card-hover"
              >
                <time className="text-body-sm text-medium-gray">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="mt-2 text-h4 font-semibold text-navy group-hover:text-teal">
                  {post.title}
                </h2>
                <p className="mt-2 text-body-sm text-medium-gray">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-body-sm text-muted">
                  <span>{post.author}</span>
                  <span>&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-xl border border-light-gray bg-off-white p-12 text-center">
            <p className="text-body-lg text-medium-gray">
              Blog posts coming soon. Subscribe to our newsletter to be
              notified.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
