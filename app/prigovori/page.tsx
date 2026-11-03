export default function PrigovoriPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-[#d5ad63] hover:underline">
          ← Povratak na DC VIBES
        </a>

        <h1 className="mt-10 text-3xl md:text-4xl font-bold text-[#d5ad63]">
          PISANI PRIGOVORI POTROŠAČA
        </h1>

        <p className="mt-6 text-gray-300 leading-8">
          Sukladno Zakonu o zaštiti potrošača, pisani prigovor možete
          podnijeti putem elektroničke pošte ili poštom na adresu obrta.
        </p>

        <div className="mt-8 rounded-xl border border-[#d5ad63]/30 p-6">
          <h2 className="text-xl font-semibold text-[#d5ad63]">
            Podaci za podnošenje prigovora
          </h2>

          <p className="mt-4 text-gray-300">
            DC VIBES, obrt za usluge i najam, vl. Matija Cafuk
          </p>
          <p className="mt-2 text-gray-300">
            Kratka ulica 14, 42202 Trnovec, Hrvatska
          </p>
          <p className="mt-2 text-gray-300">
            E-mail:{" "}
            <a
              href="mailto:matijacafuk@gmail.com"
              className="text-[#d5ad63] hover:underline"
            >
              matijacafuk@gmail.com
            </a>
          </p>
        </div>

        <h2 className="mt-10 text-xl font-semibold text-[#d5ad63]">
          Postupanje po prigovoru
        </h2>

        <p className="mt-4 text-gray-300 leading-8">
          Potvrdit ćemo primitak pisanog prigovora bez odgađanja.
          Na pisani prigovor odgovorit ćemo u roku od 15 dana od dana
          njegova zaprimanja, uz jasno očitovanje prihvaćamo li
          osnovanost prigovora.
        </p>

        <p className="mt-4 text-gray-300 leading-8">
          Evidenciju pisanih prigovora čuvamo najmanje godinu dana
          od dana primitka prigovora.
        </p>
      </div>
    </main>
  );
}
