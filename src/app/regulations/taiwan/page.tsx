import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taiwan AI Basic Act — Healthcare Compliance",
  description:
    "Comply with Taiwan's AI Basic Act requirements for healthcare AI applications.",
};

export default function TaiwanPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">
          Taiwan AI Basic Act Compliance
        </h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Taiwan&apos;s AI Basic Act establishes governance requirements for AI
          systems in healthcare. ParityScope helps you comply.
        </p>
      </div>
    </section>
  );
}
