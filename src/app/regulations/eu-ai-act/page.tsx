import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Compliance for Healthcare",
  description:
    "Navigate EU AI Act requirements for high-risk healthcare AI systems. ParityScope automates compliance with Articles 9, 10, and 15.",
};

export default function EuAiActPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">
          EU AI Act Compliance for Healthcare
        </h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Healthcare AI systems are classified as high-risk under the EU AI Act.
          ParityScope automates the bias testing, documentation, and monitoring
          required by Articles 9, 10, and 15.
        </p>
        <div className="mt-12 flex gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-teal px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Get Compliant
          </Link>
          <Link
            href="/resources/whitepapers"
            className="rounded-full border border-navy px-8 py-3 text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Download Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
