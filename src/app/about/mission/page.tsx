import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "ParityScope's mission is to ensure healthcare AI works equitably for every patient, everywhere.",
};

export default function MissionPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-h1 font-bold text-navy">Our Mission</h1>
        <p className="mt-6 text-body-lg text-medium-gray">
          Every patient deserves equitable care, regardless of who they are. As
          AI becomes central to clinical decision-making, ensuring algorithmic
          fairness is not optional — it&apos;s a moral imperative and an
          emerging legal requirement.
        </p>
        <p className="mt-4 text-body-lg text-medium-gray">
          ParityScope exists to bridge the gap between AI innovation and health
          equity. We provide healthcare organizations with the tools, expertise,
          and compliance infrastructure to deploy AI that is fair, transparent,
          and regulatory-ready.
        </p>
      </div>
    </section>
  );
}
