// src/app/layout.tsx
import "@styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ContactWidget from "@components/ContactWidget";
import type { ReactNode } from "react";

export const metadata = {
  title: "Peter Rizk - Solution Architect",
  description: "Portfolio, services, and contact portal for Peter Rizk.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts – Inter */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      {/* Two‑column grid on medium screens and up */}
      <body className="bg-gray-50 min-h-screen grid md:grid-cols-[280px_1fr] font-sans">
        {/* === Left avatar rail === */}
        <aside className="flex flex-col items-center bg-brand text-white p-6">
          <img
            src="/avatar.png"
            className="w-32 h-32 rounded-full mb-4 object-cover"
            alt="Peter Rizk portrait"
          />
          <h1 className="text-2xl font-semibold">Peter Rizk</h1>
          <p className="text-sm text-gray-200 mt-2">Solution Architect</p>
        </aside>

        {/* === Main column === */}
        <div className="flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto p-6">{children}</main>
          <Footer />
        </div>

        {/* === Floating contact buttons === */}
        <ContactWidget />
      </body>
    </html>
  );
}
