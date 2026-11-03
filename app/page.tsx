export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between border-b border-yellow-700/40 px-6 py-6">
        <h1 className="text-2xl font-black tracking-widest text-yellow-500">
          DC VIBES
        </h1>
        <a href="#kontakt" className="text-sm text-yellow-400">
          REZERVACIJE
        </a>
      </header>

      <section className="flex min-h-[75vh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-5 tracking-[0.4em] text-yellow-500">
          DJ • SOUND • LIGHTS
        </p>

        <h2 className="text-5xl font-black md:text-7xl">
          MAKE YOUR
          <span className="block text-yellow-500">EVENT</span>
          UNFORGETTABLE
        </h2>

        <p className="mt-8 max-w-xl text-lg text-gray-400">
          Profesionalna DJ glazba, razglas, rasvjeta i
          posebni efekti za vaše nezaboravne događaje.
        </p>

        <a href="#kontakt"
          className="mt-10 rounded border border-yellow-500 px-10 py-4 font-bold text-yellow-400 hover:bg-yellow-500 hover:text-black">
          ZATRAŽI PONUDU
        </a>
      </section>

      <section className="grid gap-8 bg-zinc-950 px-8 py-20 text-center md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-yellow-500">DJ NASTUPI</h3>
          <p className="mt-3 text-gray-400">Glazba za svaki tip događaja.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-yellow-500">PRO RAZGLAS</h3>
          <p className="mt-3 text-gray-400">Kvalitetan i snažan zvuk.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-yellow-500">RASVJETA</h3>
          <p className="mt-3 text-gray-400">Svjetlosni efekti i atmosfera.</p>
        </div>
      </section>

      <section id="kontakt" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-yellow-500">
          REZERVIRAJ SVOJ TERMIN
        </h2>
        <p className="mt-5 text-gray-400">
          Rođendani • Godišnjice • Vjenčanja • Korporativni eventi
        </p>
        <a href="mailto:matijacafuk@gmail.com"
          className="mt-8 inline-block border border-yellow-500 px-8 py-4 text-yellow-400">
          KONTAKTIRAJ NAS
        </a>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-gray-500">
        © 2026 DC VIBES. Sva prava pridržana.
      </footer>
    </main>
  );
}
