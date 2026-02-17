import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ParityScope's privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-h1 font-bold text-navy">Privacy Policy</h1>
        <p className="mt-4 text-body-lg text-medium-gray">
          Last updated: February 2026
        </p>
        <div className="mt-12 space-y-8 text-medium-gray">
          <p>
            ParityScope (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your
            information when you visit our website or use our services.
          </p>
          <p>
            Detailed privacy policy content will be provided by legal counsel.
          </p>
        </div>
      </div>
    </section>
  );
}
