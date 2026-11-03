
export default function Privatnost() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="mb-10 inline-block text-[#d5ad63]">
          ← Povratak na DC VIBES
        </a>

        <h1 className="mb-4 text-3xl font-bold text-[#d5ad63]">
          POLITIKA PRIVATNOSTI
        </h1>

        <p className="mb-10 text-sm text-gray-400">
          Zadnje ažuriranje: 3. studenoga 2026.
        </p>

        <div className="space-y-8 leading-7 text-gray-300">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              1. Voditelj obrade osobnih podataka
            </h2>
            <p>
              Voditelj obrade osobnih podataka je:
            </p>
            <p className="mt-3">
              <strong className="text-white">
                DC VIBES, obrt za usluge i najam, vl. Matija Cafuk
              </strong>
              <br />
              Kratka ulica 14, Trnovec, Hrvatska
              <br />
              E-mail: matijacafuk@gmail.com
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              2. Koje podatke prikupljamo?
            </h2>
            <p>
              Putem kontakt obrasca na ovoj stranici možemo prikupljati:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>ime i prezime</li>
              <li>e-mail adresu</li>
              <li>broj telefona</li>
              <li>datum i vrstu događaja</li>
              <li>lokaciju događaja</li>
              <li>poruku i posebne zahtjeve koje dobrovoljno navedete</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              3. Svrha i pravna osnova obrade
            </h2>
            <p>
              Podatke koristimo isključivo radi odgovaranja na upite,
              komunikacije s potencijalnim klijentima, pripreme ponuda
              i dogovaranja DJ usluga i najma opreme.
            </p>
            <p className="mt-3">
              Pravna osnova obrade je poduzimanje radnji na zahtjev
              ispitanika prije sklapanja ugovora, odnosno legitimni
              interes kada je primjenjivo.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              4. Tko može obrađivati podatke?
            </h2>
            <p>
              Za rad internetske stranice i zaprimanje upita koristimo
              vanjske pružatelje usluga, uključujući:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Vercel – pružanje usluge hostinga internetske stranice</li>
              <li>FormSubmit.app – zaprimanje i obrada poruka iz obrasca</li>
              <li>Google Gmail – korištenje e-mail komunikacije</li>
            </ul>
            <p className="mt-3">
              Podaci se ne prodaju niti koriste za slanje neželjenih
              reklamnih poruka.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              5. Koliko dugo čuvamo podatke?
            </h2>
            <p>
              Podaci zaprimljeni putem obrasca u sustavu FormSubmit.app
              postavljeni su na automatsko brisanje nakon 90 dana.
            </p>
            <p className="mt-3">
              Poruke zaprimljene putem e-maila mogu se čuvati dok je
              to potrebno za obradu upita, komunikaciju i ostvarivanje
              eventualnih pravnih obveza ili zahtjeva.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              6. Vaša prava
            </h2>
            <p>
              U skladu s važećim propisima o zaštiti osobnih podataka
              imate pravo zatražiti:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>pristup svojim osobnim podacima</li>
              <li>ispravak netočnih podataka</li>
              <li>brisanje podataka kada su za to ispunjeni uvjeti</li>
              <li>ograničenje obrade</li>
              <li>prigovor na obradu kada je primjenjivo</li>
              <li>prenosivost podataka kada je primjenjivo</li>
            </ul>
            <p className="mt-3">
              Za ostvarivanje svojih prava možete nam se obratiti
              na adresu: matijacafuk@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              7. Pravo na pritužbu
            </h2>
            <p>
              Ako smatrate da se vaši osobni podaci obrađuju protivno
              propisima, imate pravo podnijeti pritužbu Agenciji za
              zaštitu osobnih podataka (AZOP).
            </p>
            <p className="mt-3">
              <a
                href="https://azop.hr/"
                target="_blank"
                rel="noreferrer"
                className="text-[#d5ad63] underline"
              >
                Službena stranica AZOP-a
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              8. Kolačići
            </h2>
            <p>
              Ova internetska stranica ne koristi Google Analytics
              ni Facebook Pixel. Tehnički kolačići i drugi podaci
              koje mogu koristiti hosting ili vanjske usluge ovise
              o njihovom načinu rada.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              9. Izmjene politike privatnosti
            </h2>
            <p>
              Ovu politiku privatnosti možemo povremeno ažurirati
              radi usklađivanja s promjenama propisa ili načina
              poslovanja. Važeća verzija uvijek će biti dostupna
              na ovoj internetskoj stranici.
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-[#d5ad63]/30 pt-6 text-center text-sm text-gray-500">
          © 2026 DC VIBES – Sva prava pridržana.
        </div>
      </div>
    </main>
  );
}
