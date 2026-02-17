import type { Metadata } from "next";
import { getAllContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Whitepapers — In-depth AI Fairness Research",
  description:
    "Download in-depth research and guides on AI fairness, healthcare compliance, and bias mitigation from ParityScope.",
};

export default function WhitepapersPage() {
  const papers = getAllContent("whitepapers");

  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">Whitepapers</h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          In-depth research and practical guides on AI fairness, regulatory
          compliance, and bias mitigation in healthcare.
        </p>

        {papers.length > 0 ? (
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {papers.map((paper) => (
              <div
                key={paper.slug}
                className="rounded-xl border border-light-gray p-6"
              >
                <h2 className="text-h4 font-semibold text-navy">
                  {paper.title}
                </h2>
                <p className="mt-2 text-body-sm text-medium-gray">
                  {paper.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-xl border border-light-gray bg-off-white p-12 text-center">
            <p className="text-body-lg text-medium-gray">
              Whitepapers coming soon. Subscribe to our newsletter to be
              notified.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
