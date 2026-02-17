import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fairness Audit — Comprehensive AI Bias Detection",
  description:
    "Detect and quantify AI bias across 15+ fairness metrics and all protected attributes with ParityScope's Fairness Audit.",
};

export default function FairnessAuditPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">Fairness Audit</h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Comprehensive bias detection across every protected attribute — race,
          gender, age, socioeconomic status, and more. Get actionable audit
          reports that satisfy regulatory requirements.
        </p>
      </div>
    </section>
  );
}
