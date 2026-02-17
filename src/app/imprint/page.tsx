import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint (Impressum)",
  description: "Legal imprint for ParityScope as required by German law.",
};

export default function ImprintPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-h1 font-bold text-navy">
          Imprint (Impressum)
        </h1>
        <div className="mt-12 space-y-6 text-medium-gray">
          <div>
            <h2 className="text-h3 font-semibold text-navy">
              Information pursuant to Sect. 5 German Telemedia Act (TMG)
            </h2>
            <p className="mt-2">
              ParityScope GmbH
              <br />
              Address to be provided
              <br />
              Germany
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-semibold text-navy">Contact</h2>
            <p className="mt-2">
              Email: hello@parityscope.com
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-semibold text-navy">
              Responsible for content
            </h2>
            <p className="mt-2">To be provided</p>
          </div>
        </div>
      </div>
    </section>
  );
}
