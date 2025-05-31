'use client';

// Change this once, or load from an ENV var if you prefer
const CALENDLY_SLUG = 'peterizk/30-minute-meeting'; // ← replace with your real slug

export default function HireMeModal() {
  /** close when ✕ or backdrop is clicked */
  const close = () => document.getElementById('hire-modal')?.classList.add('hidden');

  return (
    <div
      id="hire-modal"
      className="hidden"
      onClick={(e) => e.target === e.currentTarget && close()}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: 12,
          maxWidth: 440,
          width: '100%',
          position: 'relative',
        }}
      >
        <button
          onClick={close}
          aria-label="Close modal"
          style={{ position: 'absolute', top: 10, right: 10 }}
        >
          ✕
        </button>
        <h2 style={{ fontSize: 20, marginBottom: 16 }}>Book a free consult</h2>

        {/* Calendly embed */}
        <iframe
          src={`https://calendly.com/${CALENDLY_SLUG}`}
          title="Calendly scheduling iframe"
          style={{ width: '100%', height: 320, border: 0, borderRadius: 6 }}
        />
      </div>
    </div>
  );
}
