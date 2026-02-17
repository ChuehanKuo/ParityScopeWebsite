import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hospitals & Health Systems — AI Fairness Solutions",
  description:
    "Ensure equitable clinical AI across your health system with ParityScope's bias auditing and monitoring tools.",
};

export default function HospitalsPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">
          AI Fairness for Hospitals & Health Systems
        </h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Clinical decision support, risk stratification, and resource allocation
          algorithms impact every patient. Ensure they work equitably across all
          populations.
        </p>
        <div className="mt-12">
          <Link
            href="/contact"
            className="rounded-full bg-teal px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
