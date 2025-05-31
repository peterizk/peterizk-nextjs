// src/app/blog/page.tsx  ← Server Component (no "use client")
export const metadata = { title: 'Blog – Peter Rizk' };

export default function BlogPage() {
  return (
     <div className="mt-6 text-xs">
      <h1>Blog</h1>
      <p>Articles, case studies and engineering notes will appear here soon.</p>
    </div>
  );
}
