import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-h1 font-bold leading-tight tracking-tight lg:text-display">
            Fair AI Starts with{" "}
            <span className="text-teal">Knowing Where Bias Hides</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-light-gray">
            ParityScope helps healthcare organizations audit, monitor, and
            mitigate AI bias — so you can deploy clinical AI with confidence and
            meet global regulatory requirements.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-teal px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Book a Demo
            </Link>
            <Link
              href="/product"
              className="rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="px-4 py-section sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-h2 font-bold text-navy">
            Healthcare AI Has a Fairness Problem
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-body-lg text-medium-gray">
            Clinical algorithms affect millions of patients daily. Without
            proper auditing, biased AI perpetuates health disparities — and
            organizations face mounting regulatory risk.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Regulatory Pressure",
                description:
                  "The EU AI Act, Section 1557, and emerging laws in South Korea and Taiwan require bias auditing for healthcare AI.",
              },
              {
                title: "Hidden Disparities",
                description:
                  "Studies show clinical algorithms systematically disadvantage patients by race, gender, age, and socioeconomic status.",
              },
              {
                title: "Compliance Complexity",
                description:
                  "Multi-jurisdictional compliance is a moving target. Manual auditing doesn't scale, and the stakes are patient lives.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-light-gray p-8 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <h3 className="text-h4 font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-medium-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="bg-off-white px-4 py-section sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-h2 font-bold text-navy">
            One Platform. Complete AI Fairness.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-body-lg text-medium-gray">
            From pre-deployment audit to continuous production monitoring,
            ParityScope covers the full AI fairness lifecycle.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Fairness Audit",
                href: "/product/fairness-audit",
                description:
                  "Detect bias across 15+ fairness metrics and all protected attributes. Get actionable audit reports.",
              },
              {
                title: "Continuous Monitoring",
                href: "/product/monitoring",
                description:
                  "Real-time dashboards track fairness drift in production. Alerts when thresholds are breached.",
              },
              {
                title: "Bias Mitigation",
                href: "/product/mitigation",
                description:
                  "Automated recommendations and SDK tools to fix identified biases at the source.",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-light-gray bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <h3 className="text-h4 font-semibold text-navy group-hover:text-teal">
                  {item.title}
                </h3>
                <p className="mt-3 text-medium-gray">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal">
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy px-4 py-section sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-h2 font-bold text-white">
            Ready to Make Your AI Fair and Compliant?
          </h2>
          <p className="mt-4 text-body-lg text-light-gray">
            Join leading healthcare organizations that trust ParityScope to
            ensure equitable AI outcomes across every patient population.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-teal px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
