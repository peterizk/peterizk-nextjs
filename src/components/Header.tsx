'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname() ?? '/';
  const nav = [
    ['Home', '/'],
    ['About', '/about'],
    ['Services', '/services'],
    ['Projects', '/projects'],
    ['Blog', '/blog'],
  ];
  return (
    <nav className="nav-col text-sm">
      {nav.map(([label, href]) => (
        <Link
          key={href}
          href={href}
          className={`no-underline ${
            path.startsWith(href) ? 'text-brand' : 'text-white'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
