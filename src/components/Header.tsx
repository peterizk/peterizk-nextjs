import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 mb-6">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Peter Rizk</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
