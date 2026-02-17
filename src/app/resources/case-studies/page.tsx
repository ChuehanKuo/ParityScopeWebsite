import type { Metadata } from "next";
import { getAllContent } from "@/lib/mdx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Real-world AI Fairness Impact",
  description:
    "See how healthcare organizations use ParityScope to ensure AI fairness and meet compliance requirements.",
};

export default function CaseStudiesPage() {
  const studies = getAllContent("case-studies");

  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">Case Studies</h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Real-world stories of healthcare organizations ensuring AI fairness
          with ParityScope.
        </p>

        {studies.length > 0 ? (
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {studies.map((study) => (
              <Link
                key={study.slug}
                href={`/resources/case-studies/${study.slug}`}
                className="group rounded-xl border border-light-gray p-8 transition-shadow hover:shadow-card-hover"
              >
                <h2 className="text-h3 font-semibold text-navy group-hover:text-teal">
                  {study.title}
                </h2>
                <p className="mt-3 text-medium-gray">{study.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-xl border border-light-gray bg-off-white p-12 text-center">
            <p className="text-body-lg text-medium-gray">
              Case studies coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
