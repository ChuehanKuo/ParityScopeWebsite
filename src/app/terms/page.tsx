import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ParityScope's terms of service.",
};

export default function TermsPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-h1 font-bold text-navy">Terms of Service</h1>
        <p className="mt-4 text-body-lg text-medium-gray">
          Last updated: February 2026
        </p>
        <div className="mt-12 space-y-8 text-medium-gray">
          <p>
            These Terms of Service govern your use of the ParityScope website
            and services. By accessing or using our services, you agree to be
            bound by these terms.
          </p>
          <p>
            Detailed terms of service will be provided by legal counsel.
          </p>
        </div>
      </div>
    </section>
  );
}
