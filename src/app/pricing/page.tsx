import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — AI Fairness Auditing Plans",
  description:
    "Transparent pricing for ParityScope's AI fairness auditing, monitoring, and compliance tools. From one-time assessments to enterprise solutions.",
};

const tiers = [
  {
    name: "Assessment",
    description: "One-time fairness audit for a single AI model",
    price: "Contact us",
    features: [
      "Single model audit",
      "15+ fairness metrics",
      "All protected attributes",
      "Detailed audit report",
      "Regulatory compliance mapping",
      "Remediation recommendations",
    ],
    cta: "Request Assessment",
    highlighted: false,
  },
  {
    name: "SDK License",
    description: "Ongoing fairness testing integrated into your pipeline",
    price: "Contact us",
    features: [
      "Everything in Assessment",
      "SDK access for CI/CD integration",
      "Continuous monitoring dashboard",
      "Automated alerting",
      "Fairness drift detection",
      "Quarterly compliance reviews",
      "Email support",
    ],
    cta: "Book a Demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Full-scale AI governance for large organizations",
    price: "Custom",
    features: [
      "Everything in SDK License",
      "Unlimited models",
      "Custom fairness metrics",
      "Multi-jurisdiction compliance",
      "Dedicated success manager",
      "On-premise deployment option",
      "SLA guarantees",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-h1 font-bold text-navy">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-body-lg text-medium-gray">
            Start with a one-time assessment or scale with continuous
            monitoring. Every plan includes full regulatory compliance support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-teal bg-navy text-white shadow-elevated"
                  : "border-light-gray bg-white"
              }`}
            >
              <h2
                className={`text-h3 font-bold ${tier.highlighted ? "text-white" : "text-navy"}`}
              >
                {tier.name}
              </h2>
              <p
                className={`mt-2 text-body-sm ${tier.highlighted ? "text-light-gray" : "text-medium-gray"}`}
              >
                {tier.description}
              </p>
              <p
                className={`mt-6 text-h2 font-bold ${tier.highlighted ? "text-teal-light" : "text-navy"}`}
              >
                {tier.price}
              </p>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className={`mt-0.5 h-5 w-5 shrink-0 ${tier.highlighted ? "text-teal-light" : "text-teal"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span
                      className={`text-body-sm ${tier.highlighted ? "text-light-gray" : "text-medium-gray"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-teal text-white hover:bg-teal-light"
                      : "bg-navy text-white hover:bg-navy-light"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
