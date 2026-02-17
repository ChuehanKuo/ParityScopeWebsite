import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Continuous Monitoring — Real-time AI Fairness Tracking",
  description:
    "Monitor AI fairness in production with real-time dashboards, automated alerts, and drift detection.",
};

export default function MonitoringPage() {
  return (
    <section className="px-4 py-section sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-h1 font-bold text-navy">Continuous Monitoring</h1>
        <p className="mt-4 max-w-3xl text-body-lg text-medium-gray">
          Real-time fairness monitoring in production. Get alerts when fairness
          metrics drift, generate audit trails automatically, and maintain
          compliance continuously.
        </p>
      </div>
    </section>
  );
}
