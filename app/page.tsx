const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
);

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Webstacc Portfolio Startseite">
      <span className="logo-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>webstacc</span>
    </a>
  );
}

function BrowserBar({ url }: { url: string }) {
  return (
    <div className="browser-bar">
      <div className="browser-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <span>{url}</span>
      <b aria-hidden="true">↗</b>
    </div>
  );
}

function LivePreview({
  title,
  url,
  image,
}: {
  title: string;
  url: string;
  image: string;
}) {
  return (
    <div className="project-screen live-preview">
      <BrowserBar url={url.replace(/^https?:\/\//, "")} />
      <a
        className="live-preview-link"
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${title} live öffnen`}
      >
        <img
          src={image}
          alt={`Aktuelle Live-Vorschau von ${title}`}
          width={1440}
          height={900}
          loading="lazy"
        />
        <span className="live-preview-status">
          <i aria-hidden="true" />
          Live-Vorschau
        </span>
        <span className="live-preview-open">
          Website öffnen <Arrow diagonal />
        </span>
      </a>
    </div>
  );
}

const services = [
  {
    number: "01",
    title: "Webdesign",
    text: "Websites und Landingpages, die nicht nur gut aussehen, sondern Interessenten gezielt zur Anfrage führen.",
    proof: "Kundenerfahrung",
  },
  {
    number: "02",
    title: "Google Ads",
    text: "Suchkampagnen mit klarer Struktur, relevanten Keywords und laufender Optimierung auf echte Anfragen.",
    proof: "Kundenerfahrung",
  },
  {
    number: "03",
    title: "SEO",
    text: "Technische Basis, lokale Sichtbarkeit und Inhalte, die Menschen wie Suchmaschinen verstehen.",
    proof: "Webstacc Leistung",
  },
  {
    number: "04",
    title: "Social Media",
    text: "Strategie und Content-Systeme für eine Marke, die auch zwischen den Kampagnen sichtbar bleibt.",
    proof: "Webstacc Leistung",
  },
  {
    number: "05",
    title: "Content & Strategie",
    text: "Ein digitaler Plan, der Website, Kampagnen und Inhalte in eine gemeinsame Richtung bringt.",
    proof: "Webstacc Leistung",
  },
];

const projects = [
  {
    number: "01",
    title: "Rechtsschutzpartner24",
    category: "Webdesign · Conversion",
    description:
      "Eine vertrauensstarke Website für erklärungsbedürftige Versicherungsprodukte – klar strukturiert, fokussiert und auf die schnelle Kontaktaufnahme ausgelegt.",
    href: "https://rechtsschutzpartner24.de",
    visual: (
      <LivePreview
        title="Rechtsschutzpartner24"
        url="https://rechtsschutzpartner24.de"
        image="/project-previews/rechtsschutzpartner24.png"
      />
    ),
  },
  {
    number: "02",
    title: "leads123",
    category: "Branding · Landingpage",
    description:
      "Ein prägnanter digitaler Auftritt rund um Leadgenerierung: mit klarer Positionierung, energischem Design und einer geradlinigen Nutzerführung.",
    href: "https://leads123.de",
    visual: (
      <LivePreview
        title="Leads123"
        url="https://leads123.de"
        image="/project-previews/leads123.png"
      />
    ),
  },
  {
    number: "03",
    title: "beatstacc",
    category: "Digital Product · Webdesign",
    description:
      "Eine eigenständige Musikplattform mit Streaming-Charakter, Marketplace und markanter visueller Sprache zwischen Studio, Community und Commerce.",
    href: "https://beatstacc.de",
    visual: (
      <LivePreview
        title="Beatstacc"
        url="https://beatstacc.de"
        image="/project-previews/beatstacc.png"
      />
    ),
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <Logo />
        <nav aria-label="Hauptnavigation">
          <a href="#projekte">Projekte</a>
          <a href="#leistungen">Leistungen</a>
          <a href="#prozess">Prozess</a>
        </nav>
        <a className="header-cta" href="#kontakt">
          Projekt anfragen <Arrow />
        </a>
      </header>

      <section className="hero">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-topline">
          <p><span /> Augsburg · Germany</p>
          <p>Webdesign & Performance Marketing</p>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">PORTFOLIO / 2026</p>
          <h1>
            Wir bauen<br />
            digitale <em>Vorsprünge.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              Strategie, Design und Performance aus einer Hand – für Unternehmen,
              die online nicht nur stattfinden, sondern wachsen wollen.
            </p>
            <a className="circle-link" href="#projekte" aria-label="Projekte ansehen">
              <span>Projekte<br />ansehen</span>
              <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">W / 01</div>
      </section>

      <section className="statement section-pad">
        <p className="eyebrow dark">WAS WIR TUN</p>
        <h2>
          Gute Websites sehen gut aus.<br />
          <span>Großartige Websites arbeiten.</span>
        </h2>
        <div className="statement-grid">
          <p>
            Webstacc verbindet klare Strategie, charakterstarkes Design und
            messbares Marketing. Keine Lösungen von der Stange, sondern digitale
            Auftritte, die exakt zu Unternehmen und Zielgruppe passen.
          </p>
          <p className="proof-note">
            <b>Unser aktueller Praxisfokus</b>
            Kundenprojekte in Webdesign und Google Ads. Alle weiteren Leistungen
            ergänzen das System rund um Sichtbarkeit und Wachstum.
          </p>
        </div>
      </section>

      <section className="projects section-pad" id="projekte">
        <div className="section-heading">
          <p className="eyebrow dark">AUSGEWÄHLTE PROJEKTE</p>
          <p className="section-count">03 / CASES</p>
        </div>
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-meta">
              <span>{project.number}</span>
              <p>{project.category}</p>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a href={project.href} target="_blank" rel="noreferrer">
                Live ansehen <Arrow diagonal />
              </a>
            </div>
            {project.visual}
          </article>
        ))}
      </section>

      <section className="services section-pad" id="leistungen">
        <div className="services-intro">
          <p className="eyebrow">LEISTUNGEN</p>
          <h2>Alles, was eine starke digitale Präsenz braucht.</h2>
          <p>
            Modular buchbar. Strategisch gedacht. Auf ein gemeinsames Ziel
            ausgerichtet: mehr Relevanz, mehr Anfragen, mehr Wachstum.
          </p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <small>{service.proof}</small>
              </div>
              <p>{service.text}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-pad" id="prozess">
        <div className="section-heading">
          <p className="eyebrow dark">SO ARBEITEN WIR</p>
          <p className="section-count">KLAR · DIREKT · PARTNERSCHAFTLICH</p>
        </div>
        <div className="process-grid">
          <article>
            <span>01</span>
            <h3>Verstehen</h3>
            <p>Ziele, Zielgruppe und Ausgangslage werden glasklar.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Verdichten</h3>
            <p>Aus Erkenntnissen wird eine schlüssige digitale Strategie.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Umsetzen</h3>
            <p>Design, Technik und Kampagnen greifen sauber ineinander.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Wachsen</h3>
            <p>Wir messen, lernen und verbessern, was bereits funktioniert.</p>
          </article>
        </div>
      </section>

      <section className="contact section-pad" id="kontakt">
        <div className="contact-shape" aria-hidden="true">
          <span>W</span>
        </div>
        <p className="eyebrow">BEREIT FÜR DEN NÄCHSTEN SCHRITT?</p>
        <h2>Aus einer Idee wird<br /><em>ein Auftritt.</em></h2>
        <p>
          Erzählen Sie uns kurz, was Sie vorhaben. Wir melden uns persönlich mit
          einer ehrlichen Einschätzung und den nächsten sinnvollen Schritten.
        </p>
        <a href="https://webstacc.de/kontakt/" target="_blank" rel="noreferrer">
          Kostenloses Erstgespräch <Arrow />
        </a>
      </section>

      <footer>
        <div>
          <Logo />
          <p>Digitale Zukunft beginnt jetzt.</p>
        </div>
        <div className="footer-contact">
          <small>KONTAKT</small>
          <a href="https://webstacc.de/kontakt/" target="_blank" rel="noreferrer">
            Anfrage senden ↗
          </a>
          <span>Augsburg, Deutschland</span>
        </div>
        <div className="footer-links">
          <a href="https://webstacc.de/impressum/" target="_blank" rel="noreferrer">Impressum</a>
          <a href="https://webstacc.de/datenschutz/" target="_blank" rel="noreferrer">Datenschutz</a>
          <a href="#top">Nach oben ↑</a>
        </div>
        <p className="copyright">© 2026 WEBSTACC — CHRISTIAN GEIER</p>
      </footer>
    </main>
  );
}
