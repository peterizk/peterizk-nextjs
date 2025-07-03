// NO 'use client' here  ← keeps this file on the server

import SelfServiceWidget from './SelfServiceWidget';

export const metadata = {
  title: 'Self-Service Demo · Peter Rizk',
  description:
    'Mock admin experience – upload a file and it appears in the navigation instantly (all client-side).',
};

export default function SelfServiceDemoPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-6">
      <h1 className="text-2xl font-bold">Self-Service Admin Demo</h1>
      <p className="text-gray-600">
        Drag a file into the drop-zone below. In production we’d stream to Azure
        Blob Storage and update a CMS nav JSON; here we mock that flow entirely
        in the browser.
      </p>

      <SelfServiceWidget />
    </main>
  );
}
