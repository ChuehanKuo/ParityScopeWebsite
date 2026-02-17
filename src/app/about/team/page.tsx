import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the people behind ParityScope.",
};

export default function TeamPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">Our Team</h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          We&apos;re a team of AI researchers, healthcare domain experts, and
          software engineers passionate about making healthcare AI fair for
          everyone.
        </p>
      </div>
    </section>
  );
}
