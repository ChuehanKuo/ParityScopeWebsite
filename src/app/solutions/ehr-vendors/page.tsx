import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EHR Vendors — Embed AI Fairness Into Your Platform",
  description:
    "Integrate ParityScope's fairness SDK into your EHR platform to provide built-in AI compliance for your customers.",
};

export default function EhrVendorsPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">
          AI Fairness for EHR Vendors
        </h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Embed ParityScope directly into your platform. Give your customers
          built-in AI fairness tools and differentiate your EHR with compliance
          capabilities.
        </p>
        <div className="mt-12">
          <Link
            href="/contact"
            className="rounded-full bg-teal px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Explore Partnership
          </Link>
        </div>
      </div>
    </section>
  );
}
