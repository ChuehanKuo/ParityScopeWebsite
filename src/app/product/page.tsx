import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product — AI Fairness Platform for Healthcare",
  description:
    "ParityScope's end-to-end platform for auditing, monitoring, and mitigating AI bias in healthcare applications.",
};

export default function ProductPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">
          The AI Fairness Platform Built for Healthcare
        </h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          ParityScope gives you the tools to detect, monitor, and fix bias in
          clinical AI — with an SDK-first approach that protects patient data by
          running on your infrastructure.
        </p>
        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {[
            {
              title: "Fairness Audit",
              href: "/product/fairness-audit",
              description:
                "Comprehensive bias detection across 15+ metrics, every protected attribute, and all major clinical AI use cases.",
            },
            {
              title: "Continuous Monitoring",
              href: "/product/monitoring",
              description:
                "Real-time fairness tracking in production with automated alerting, drift detection, and audit trail generation.",
            },
            {
              title: "Bias Mitigation",
              href: "/product/mitigation",
              description:
                "Actionable recommendations and SDK-powered automated fixes to remediate identified biases.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-xl border border-light-gray p-8 transition-shadow hover:shadow-card-hover"
            >
              <h2 className="text-h3 font-semibold text-navy group-hover:text-teal">
                {item.title}
              </h2>
              <p className="mt-3 text-medium-gray">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
