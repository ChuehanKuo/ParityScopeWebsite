import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bias Mitigation — Actionable AI Fairness Fixes",
  description:
    "Automated recommendations and SDK tools to remediate identified AI biases in healthcare applications.",
};

export default function MitigationPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">Bias Mitigation</h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Move from detection to action. ParityScope provides automated
          recommendations and SDK-powered fixes to remediate identified biases at
          the model, data, and decision level.
        </p>
      </div>
    </section>
  );
}
