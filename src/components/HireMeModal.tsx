// src/components/HireMeModal.tsx
export default function HireMeModal() {
  return (
    <div
      id="hire-modal"
      className="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8">
        <button
          onClick={() => document.getElementById("hire-modal")?.classList.add("hidden")}
          className="float-right text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Book a free consult</h2>

        {/* Calendly embed */}
        <iframe
          src="https://calendly.com/your-calendly-slug/30min"
          className="w-full h-96 border-0 rounded-md"
        />

        {/* PayPal / Stripe deposit link */}
        <div className="mt-6 text-center">
          <a 
            href="https://www.paypal.me/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-light"
          >
            Reserve slot - $100 deposit
          </a>
        </div>
      </div>
    </div>
  );
}
