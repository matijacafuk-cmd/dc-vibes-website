export default function Hvala() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <div className="max-w-xl">
        <div className="mb-6 text-5xl">✓</div>
        <h1 className="mb-6 text-4xl font-bold text-[#d5ad63]">
          HVALA NA UPITU!
        </h1>
        <p className="mb-8 text-lg text-gray-300">
          Vaš zahtjev je uspješno zaprimljen. Javit ćemo vam se u najkraćem mogućem roku.
        </p>
        <a
          href="/"
          className="inline-block rounded-full bg-[#d5ad63] px-8 py-4 font-bold text-black"
        >
          POVRATAK NA DC VIBES
        </a>
      </div>
    </main>
  );
}
