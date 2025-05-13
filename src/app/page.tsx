export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <section className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg">About&nbsp;Me</div>
        <div className="bg-white p-6 rounded-xl shadow-lg">Services</div>
        <div className="bg-blue-600 p-6 rounded-xl shadow-lg text-white">Hire&nbsp;Me</div>
        <div className="bg-white p-6 rounded-xl shadow-lg">Projects</div>
      </section>
    </div>
  );
}
