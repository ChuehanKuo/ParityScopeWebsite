import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
  description:
    "ParityScope's security practices, certifications, and data protection policies.",
};

export default function SecurityPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-h1 font-bold text-navy">Security</h1>
        <p className="mt-4 text-body-lg text-medium-gray">
          At ParityScope, security is foundational. Our SDK-first architecture
          means your patient data never leaves your infrastructure — we bring
          the analysis to your data, not the other way around.
        </p>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-h3 font-semibold text-navy">
              Data Never Leaves Your Infrastructure
            </h2>
            <p className="mt-2 text-medium-gray">
              Our SDK runs on-premise or in your cloud environment. Patient data
              is never transmitted to ParityScope servers. Only aggregated,
              de-identified fairness metrics are shared.
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-semibold text-navy">
              Enterprise-Grade Security
            </h2>
            <p className="mt-2 text-medium-gray">
              End-to-end encryption, SOC 2 Type II compliance, regular
              penetration testing, and strict access controls protect every
              interaction with our platform.
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-semibold text-navy">
              HIPAA Compliant
            </h2>
            <p className="mt-2 text-medium-gray">
              ParityScope is designed for healthcare from the ground up. We
              maintain full HIPAA compliance and will execute BAAs with
              customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
