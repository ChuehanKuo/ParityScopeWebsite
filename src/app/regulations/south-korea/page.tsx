import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "South Korea AI Act — Healthcare Compliance",
  description:
    "Navigate South Korea's AI regulatory framework for healthcare applications with ParityScope.",
};

export default function SouthKoreaPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">
          South Korea AI Act Compliance
        </h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          South Korea is developing comprehensive AI regulation with healthcare
          as a priority sector. Stay ahead of requirements with ParityScope.
        </p>
      </div>
    </section>
  );
}
