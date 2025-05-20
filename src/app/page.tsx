"use client";

import Link from "next/link";
import HireMeModal from "@components/HireMeModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* grid reserve 6 rem right gutter for contact widget */}
      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 pr-24 max-w-6xl mx-auto">
        {/* Navigation tiles */}
        <NavTile title="About Me" href="/about" />
        <TeaserTile
          title="Services"
          href="/services"
          teaser="AEM cloud migrations · Omnichannel architecture · Team enablement"
        />
        <HireTile />
        <NavTile title="Blog" href="/blog" />
        <NavTile title="Projects" href="/projects" />
        {/* Contact handled by widget; drawer opens everywhere */}
      </section>

      {/* Hire Me modal lives at root so it’s outside grid flow */}
      <HireMeModal />
    </div>
  );
}

/* ——— helper components ——— */

function NavTile({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="rounded-2xl border-2 border-gray-300 bg-white p-6 flex items-center justify-center
                 text-gray-800 font-bold text-xl hover:border-brand transition-colors"
    >
      {title}
    </Link>
  );
}

function TeaserTile({
  title,
  href,
  teaser,
}: {
  title: string;
  href: string;
  teaser: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border-2 border-gray-300 bg-white p-6 flex flex-col
                 items-center text-center hover:border-brand transition-colors"
    >
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
        {teaser}
      </p>
    </Link>
  );
}

function HireTile() {
  return (
    <button
      onClick={() => document.getElementById("hire-modal")?.classList.remove("hidden")}
      className="rounded-2xl bg-brand text-white p-6 font-bold text-xl shadow-lg hover:bg-brand-light transition-colors"
    >
      Hire Me
    </button>
  );
}
