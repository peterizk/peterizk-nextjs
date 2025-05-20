import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-brand text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold tracking-wide">Peter Rizk</h1>

        <nav className="flex gap-6 text-sm font-semibold">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Projects", "/projects"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="hover:text-brand-light transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
