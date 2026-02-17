import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join ParityScope and help make healthcare AI fair for everyone.",
};

export default function CareersPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-h1 font-bold text-navy">Careers</h1>
        <p className="mt-4 text-body-lg text-medium-gray">
          We&apos;re building the tools that make healthcare AI fair. If
          you&apos;re passionate about AI ethics, health equity, and
          high-quality software, we&apos;d love to hear from you.
        </p>
        <div className="mt-16 rounded-xl border border-light-gray bg-off-white p-12 text-center">
          <p className="text-body-lg text-medium-gray">
            No open positions at the moment. Check back soon or reach out to{" "}
            <a
              href="mailto:careers@parityscope.com"
              className="text-teal hover:underline"
            >
              careers@parityscope.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
