import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government & Payers — Regulatory AI Compliance",
  description:
    "Meet AI regulatory mandates with confidence. ParityScope helps government agencies and health plans ensure fair AI governance.",
};

export default function GovernmentPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">
          AI Compliance for Government & Payers
        </h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Healthcare regulators and payers need to ensure AI systems treat every
          beneficiary fairly. ParityScope provides the governance tools to
          enforce and verify AI fairness at scale.
        </p>
        <div className="mt-12">
          <Link
            href="/contact"
            className="rounded-full bg-teal px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
