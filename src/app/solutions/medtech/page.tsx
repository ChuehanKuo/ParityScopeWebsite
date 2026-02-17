import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MedTech & Digital Health — Ship Compliant AI Faster",
  description:
    "Embed AI fairness testing into your development pipeline. Ship compliant healthcare AI products to market faster.",
};

export default function MedtechPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">
          AI Compliance for MedTech & Digital Health
        </h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Embed bias testing directly into your CI/CD pipeline with our SDK.
          Ship compliant AI products faster and win enterprise health system
          deals.
        </p>
        <div className="mt-12">
          <Link
            href="/contact"
            className="rounded-full bg-teal px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
