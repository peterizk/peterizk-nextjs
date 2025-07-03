'use client';

import { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  name: string;
  href: string;         // blob URL
  type: string;         // mime type
}

const NAV_KEY = 'selfservice-demo-nav';

export default function SelfServiceWidget() {
  const [nav, setNav] = useState<NavItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  /* hydrate once */
  useEffect(() => {
    try {
      setNav(JSON.parse(localStorage.getItem(NAV_KEY) || '[]'));
    } catch {
      /* ignore */
    }
  }, []);

  /* persist on change */
  useEffect(() => {
    localStorage.setItem(NAV_KEY, JSON.stringify(nav));
  }, [nav]);

  /* handle drop */
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);

    const newItems: NavItem[] = files.map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      href: URL.createObjectURL(file),
      type: file.type,
    }));

    setNav((curr) => [...curr, ...newItems]);
    if (!activeId && newItems.length) setActiveId(newItems[0].id);
  }

  const active = nav.find((n) => n.id === activeId) ?? null;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {/* ── Drop zone & Nav list ─────────────────────────────── */}
      <div className="md:col-span-1 space-y-4">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="flex h-40 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 text-gray-500"
        >
          <p className="text-sm">Drag &amp; drop files here</p>
          <p className="text-xs">(simulated upload)</p>
        </div>

        <nav>
          <h2 className="mb-2 text-sm font-semibold text-gray-700">Site Nav</h2>
          {nav.length === 0 ? (
            <p className="text-xs text-gray-400">No pages yet</p>
          ) : (
            <ul className="space-y-1 text-sm">
              {nav.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer rounded px-3 py-1 shadow-sm ${
                    item.id === activeId ? 'bg-indigo-100' : 'bg-white'
                  }`}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>

      {/* ── Preview pane ──────────────────────────────────────── */}
      <div className="md:col-span-2 rounded-lg border bg-gray-50 p-4">
        {!active ? (
          <p className="text-sm text-gray-500">Select a nav item to preview.</p>
        ) : active.type.startsWith('image/') ? (
          <img
            src={active.href}
            alt={active.name}
            className="max-h-96 w-auto rounded"
          />
        ) : active.type === 'application/pdf' ? (
          <iframe
            title={active.name}
            src={active.href}
            className="h-96 w-full rounded"
          />
        ) : (
          <p className="text-sm">
            <strong>{active.name}</strong> has been “uploaded.” In production,
            this would be a generated page or download. Here we just show the
            file name (<em>{active.type || 'unknown type'}</em>).
          </p>
        )}
      </div>
    </div>
  );
}
