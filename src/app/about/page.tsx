import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ParityScope",
  description:
    "Learn about ParityScope's mission to make healthcare AI fair, transparent, and compliant with global regulations.",
};

export default function AboutPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-h1 font-bold text-navy">About ParityScope</h1>
        <p className="mt-6 text-body-lg text-medium-gray">
          ParityScope was founded with a clear mission: ensure that AI in
          healthcare works fairly for every patient, regardless of who they are
          or where they live.
        </p>
        <p className="mt-4 text-body-lg text-medium-gray">
          As AI becomes embedded in clinical decision-making, the stakes of
          algorithmic bias are measured in patient outcomes. We build the tools
          healthcare organizations need to audit, monitor, and fix AI bias —
          so they can deploy clinical AI with confidence and meet the rapidly
          evolving global regulatory landscape.
        </p>
        <div className="mt-12 flex gap-6">
          <Link
            href="/about/mission"
            className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
          >
            Our Mission
          </Link>
          <Link
            href="/about/team"
            className="rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Meet the Team
          </Link>
          <Link
            href="/about/careers"
            className="rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Careers
          </Link>
        </div>
      </div>
    </section>
  );
}
