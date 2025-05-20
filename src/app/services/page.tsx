"use client";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Consulting packages</h1>

      <Service
        name="AEM Cloud Migration"
        blurb="End-to-end migration planning, blue-green deploys, KPI dashboards."
        price="$8k / week"
      />
      {/* repeat */}
    </section>
  );
}

function Service({ name, blurb, price }: any) {
  return (
    <div className="border-l-4 border-brand bg-white p-6 shadow rounded-lg">
      <h2 className="font-semibold text-xl mb-1">{name}</h2>
      <p className="text-gray-600">{blurb}</p>
      <p className="mt-2 font-bold">{price}</p>
    </div>
  );
}
