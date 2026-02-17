import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossary — AI Fairness & Compliance Terminology",
  description:
    "Comprehensive glossary of AI fairness, bias, healthcare compliance, and regulatory terminology.",
};

const glossaryTerms = [
  {
    term: "Algorithmic Fairness",
    definition:
      "The study and practice of ensuring that automated decision-making systems do not produce systematically biased outcomes across different demographic groups.",
  },
  {
    term: "Demographic Parity",
    definition:
      "A fairness metric requiring that the positive prediction rate is equal across all protected groups.",
  },
  {
    term: "Disparate Impact",
    definition:
      "When a seemingly neutral policy or algorithm disproportionately affects a protected group, even without intent to discriminate.",
  },
  {
    term: "Equal Opportunity",
    definition:
      "A fairness metric requiring that the true positive rate is equal across all protected groups.",
  },
  {
    term: "Equalized Odds",
    definition:
      "A fairness metric requiring that both the true positive rate and false positive rate are equal across all protected groups.",
  },
  {
    term: "EU AI Act",
    definition:
      "The European Union's comprehensive regulatory framework for artificial intelligence, classifying healthcare AI as high-risk and requiring bias testing, documentation, and human oversight.",
  },
  {
    term: "Fairness Drift",
    definition:
      "The phenomenon where an AI model's fairness metrics degrade over time as the underlying data distribution shifts.",
  },
  {
    term: "Protected Attribute",
    definition:
      "A characteristic (e.g., race, gender, age) that is legally protected from discrimination and must be evaluated in AI fairness assessments.",
  },
];

export default function GlossaryPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-h1 font-bold text-navy">Glossary</h1>
        <p className="mt-4 text-body-lg text-medium-gray">
          Key terms and definitions in AI fairness, bias auditing, and
          healthcare compliance.
        </p>

        <dl className="mt-16 divide-y divide-light-gray">
          {glossaryTerms.map((item) => (
            <div key={item.term} className="py-6">
              <dt className="text-h4 font-semibold text-navy">{item.term}</dt>
              <dd className="mt-2 text-medium-gray">{item.definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
