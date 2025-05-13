// src/components/ContactWidget.tsx
export default function ContactWidget() {
  return (
    <div className="fixed right-6 top-1/3 z-50 flex flex-col gap-4">
      {/* Email */}
      <a
        href="mailto:peterizk@hotmail.com"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition hover:bg-blue-600"
        title="Email"
      >
        📧
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/peterizk"
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition hover:bg-blue-600"
        title="LinkedIn"
      >
        in
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/peterizk"
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition hover:bg-blue-600"
        title="GitHub"
      >
        🐙
      </a>
    </div>
  );
}
