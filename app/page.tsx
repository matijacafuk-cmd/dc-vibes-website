
const phone = "+385993421568";
const email = "matijacafuk@gmail.com";
const whatsappMessage = encodeURIComponent(
  "Pozdrav! Zanima me ponuda za DJ nastup i opremu."
);

const services = [
  {
    number: "01",
    title: "DJ NASTUPI",
    description:
      "Glazba prilagođena publici, atmosferi i vrsti događaja. Od elegantnog početka do punog plesnog podija.",
  },
  {
    number: "02",
    title: "PROFESIONALNI RAZGLAS",
    description:
      "Kvalitetan i snažan zvuk prilagođen veličini prostora i broju gostiju.",
  },
  {
    number: "03",
    title: "RASVJETA I EFEKTI",
    description:
      "Dinamična rasvjeta, svjetlosni efekti i atmosfera koja pretvara prostor u pravi party.",
  },
];

const events = [
  "Rođendani i obljetnice",
  "Privatne proslave",
  "Vjenčanja",
  "Poslovni eventi",
  "Proslave i zabave",
  "Posebni događaji",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <header className="sticky top-0 z-50 border-b border-[#c9a45c]/20 bg-[#080808]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="#" className="text-2xl font-black tracking-[0.18em]">
            DC <span className="text-[#d5ad63]">VIBES</span>
          </a>
          <nav className="hidden gap-8 text-xs font-semibold tracking-widest text-gray-300 md:flex">
            <a href="#usluge">USLUGE</a>
            <a href="#dogadaji">DOGAĐAJI</a>
            <a href="#kontakt">KONTAKT</a>
          </nav>
          <a
            href={`https://wa.me/${phone.replace("+", "")}?text=${whatsappMessage}`}
            className="rounded-full border border-[#d5ad63] px-4 py-2 text-xs font-bold text-[#d5ad63]"
          >
            REZERVIRAJ
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-40 -top-20 h-96 w-96 rounded-full bg-[#bd8e3c]/10 blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-28 md:grid-cols-2 md:py-40">
          <div>
            <p className="mb-6 text-xs font-bold tracking-[0.4em] text-[#d5ad63]">
              DJ • SOUND • LIGHTS
            </p>
            <h1 className="text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
              YOUR EVENT.
              <br />
              <span className="text-[#d5ad63]">YOUR VIBE.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">
              Vrhunska glazba, profesionalni razglas i rasvjeta.
              Stvaramo atmosferu koju će tvoji gosti pamtiti.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${phone.replace("+", "")}?text=${whatsappMessage}`}
                className="rounded-full bg-[#d5ad63] px-7 py-4 text-sm font-black text-black transition hover:bg-white"
              >
                ZATRAŽI PONUDU ↗
              </a>
              <a
                href="#usluge"
                className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold"
              >
                NAŠE USLUGE
              </a>
            </div>
          </div>
          <div className="relative flex min-h-72 items-center justify-center rounded-3xl border border-[#d5ad63]/30 bg-gradient-to-br from-[#292116] via-[#111] to-black p-8">
            <div className="absolute inset-5 rounded-2xl border border-[#d5ad63]/10" />
            <div className="text-center">
              <div className="text-7xl font-black tracking-widest text-[#d5ad63] md:text-8xl">
                DC
              </div>
              <div className="mt-3 text-xl font-bold tracking-[0.45em]">
                VIBES
              </div>
              <div className="mt-5 text-xs tracking-[0.35em] text-gray-400">
                MAKE IT MEMORABLE
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="usluge" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs font-bold tracking-[0.35em] text-[#d5ad63]">
          ŠTO NUDIMO
        </p>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          SVE ZA SAVRŠEN EVENT.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#d5ad63]/60"
            >
              <p className="text-sm font-bold text-[#d5ad63]">
                {service.number}
              </p>
              <h3 className="mt-8 text-xl font-black">{service.title}</h3>
              <p className="mt-5 leading-7 text-gray-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="dogadaji" className="border-y border-white/10 bg-[#101010]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs font-bold tracking-[0.35em] text-[#d5ad63]">
            ZA SVAKU PRILIKU
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            TVOJ DOGAĐAJ. NAŠA ENERGIJA.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {events.map((event) => (
              <div
                key={event}
                className="border-b border-[#d5ad63]/30 py-5 text-lg font-semibold"
              >
                <span className="mr-3 text-[#d5ad63]">✦</span>
                {event}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-[#d5ad63]/30 bg-gradient-to-br from-[#211b10] to-[#0b0b0b] p-8 md:p-14">
          <p className="text-xs font-bold tracking-[0.35em] text-[#d5ad63]">
            GDJE RADIMO
          </p>
          <h2 className="mt-5 text-4xl font-black">VARAŽDIN I OKOLICA.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-gray-300">
            Primarno djelujemo na području Varaždina i okolice.
            Za događaje u drugim dijelovima Hrvatske moguć je dogovor.
            Javite nam se i zajedno ćemo pronaći najbolje rješenje.
          </p>
        </div>
      </section>

<section id="galerija" className="mx-auto max-w-7xl px-6 py-24">
  <p className="text-xs font-bold tracking-[0.35em] text-[#d5ad63]">
    DC VIBES U AKCIJI
  </p>
  <h2 className="mt-4 text-4xl font-black md:text-5xl">
    NAŠA GALERIJA.
  </h2>
  <p className="mt-5 max-w-xl leading-7 text-gray-400">
    Pogledajte našu DJ opremu, rasvjetu i atmosferu s evenata.
  </p>

  <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {[
      ["01-dj-nastup.jpg", "DJ nastup uživo"],
      ["02-dc-vibes-pult.jpg", "DC VIBES DJ pult"],
      ["03-razglas-i-rasvjeta.jpg", "Razglas i rasvjeta"],
      ["04-dj-booth-live.jpg", "DJ booth na eventu"],
      ["05-dj-konzola-party.jpg", "DJ oprema i party atmosfera"],
      ["06-vanjski-event.jpg", "Vanjski event"],
      ["07-high-vibes-event.jpg", "High Vibes event"],
      ["08-pioneer-xdj-az.jpg", "Pioneer XDJ-AZ"],
    ].map(([file, caption]) => (
      <div
        key={file}
        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
      >
        <img
          src={`/gallery/${file}`}
          alt={caption}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <p className="p-4 text-sm font-bold text-[#d5ad63]">
          {caption}
        </p>
      </div>
    ))}
  </div>
</section>

      <section id="kontakt" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="text-xs font-bold tracking-[0.35em] text-[#d5ad63]">
            REZERVIRAJ SVOJ TERMIN
          </p>
          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            LET'S MAKE
            <br />
            <span className="text-[#d5ad63]">SOME NOISE.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-7 text-gray-400">
            Planiraš proslavu ili poseban događaj? Pošalji nam upit
            i zatraži ponudu prilagođenu svojim željama.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${phone.replace("+", "")}?text=${whatsappMessage}`}
              className="rounded-full bg-[#d5ad63] px-8 py-4 font-black text-black"
            >
              WHATSAPP UPIT ↗
            </a>
            <a
              href={`tel:${phone}`}
              className="rounded-full border border-white/30 px-8 py-4 font-bold"
            >
              NAZOVI NAS
            </a>
          </div>
          <div className="mt-12 space-y-3 text-sm text-gray-400">
            <p>099 342 1568</p>
            <p>{email}</p>
            <p>Varaždin, Hrvatska</p>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-[#d5ad63]/30 bg-[#111] p-6 text-left">
  <h3 className="mb-6 text-2xl font-bold text-[#d5ad63]">
    POŠALJI UPIT ZA EVENT
  </h3>

  <form action="https://formsubmit.app/f/n4gnk95fp2" method="POST" className="space-y-4">
    <input type="hidden" name="_redirect" value="https://dcvibes.hr/hvala" /><input type="text" name="name" placeholder="Ime i prezime" required className="w-full rounded-xl border border-white/20 bg-black p-4 text-white" />
    <input type="email" name="email" placeholder="E-mail adresa" required className="w-full rounded-xl border border-white/20 bg-black p-4 text-white" />
    <input type="tel" name="phone" placeholder="Telefon" required className="w-full rounded-xl border border-white/20 bg-black p-4 text-white" />
    <input type="date" name="datum" required className="w-full rounded-xl border border-white/20 bg-black p-4 text-white" />

    <select name="event_type" required className="w-full rounded-xl border border-white/20 bg-black p-4 text-white">
      <option value="">Vrsta događaja</option>
      <option>Rođendan</option>
      <option>Godišnjica</option>
      <option>Maturalna zabava</option>
      <option>Privatna zabava</option>
      <option>Poslovni event</option>
      <option>Festival / javni događaj</option>
      <option>Ostalo</option>
    </select>

    <input type="text" name="location" placeholder="Lokacija događaja" required className="w-full rounded-xl border border-white/20 bg-black p-4 text-white" />
    <textarea name="details" placeholder="Poruka i posebni zahtjevi" rows={4} className="w-full rounded-xl border border-white/20 bg-black p-4 text-white" />

    <input type="text" name="_gotcha" className="hidden" />

    <button type="submit" className="w-full rounded-full bg-[#d5ad63] p-4 font-bold text-black">
      POŠALJI UPIT
    </button>
  </form>
</div>
      </section>
<section className="mx-auto max-w-5xl px-6 py-12">
  <div className="rounded-2xl border border-yellow-500/30 bg-zinc-900 p-6 text-center">
    <h2 className="mb-2 text-2xl font-bold text-yellow-400">
      DC VIBES MUSIC
    </h2>
    <p className="mb-5 text-gray-400">
      Feel the rhythm. Live the moment.
    </p>
    <audio controls preload="none" className="mx-auto w-full max-w-md">
      <source src="/feel-the-rhythm.mp3" type="audio/mpeg" />
      Tvoj preglednik ne podržava audio reprodukciju.
    </audio>
  </div>
</section>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs tracking-widest text-gray-500">
        © {new Date().getFullYear()} DC VIBES · DJ · SOUND · LIGHTS
        <p className="mt-3 text-sm text-gray-400">
  <a href="/privatnost" className="hover:text-[#d5ad63]">
    Politika privatnosti
  </a>
</p>
       <p className="mt-3 text-sm text-gray-400">
  <a href="/prigovori" className="hover:text-[#d5ad63]">
    Pisani prigovori potrošača
  </a>
</p> 
      </footer>
    </main>
  );
}
