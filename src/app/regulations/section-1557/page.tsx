import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Section 1557 — US Healthcare Anti-Discrimination",
  description:
    "Ensure your healthcare AI systems comply with Section 1557 anti-discrimination requirements.",
};

export default function Section1557Page() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">
          Section 1557 Compliance
        </h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Section 1557 of the ACA prohibits discrimination in healthcare,
          including by AI systems. ParityScope helps you audit and demonstrate
          non-discrimination across all protected classes.
        </p>
      </div>
    </section>
  );
}
