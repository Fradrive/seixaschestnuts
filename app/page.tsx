import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-image">
          <Image
            src="/images/hero.jpg"
            alt="Castanhas de Penedono"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
        </div>

        <nav className="navbar">
          <a className="brand" href="#inicio" aria-label="SEIXASCHESTNUTS - Início">
            <Image
              src="/images/no_background_white_logo.png"
              alt="SEIXASCHESTNUTS"
              width={180}
              height={60}
              priority
            />
          </a>

          <div className="nav-links">
            <a href="#encomende">Encomende</a>
            <a href="#colheita">Colheita</a>
            <a href="#origem">Origem</a>
            <a href="#contactos">Contactos</a>
          </div>

          <button className="language-switcher" type="button">
            PT | EN
          </button>
        </nav>

        <div className="hero-content">
          <h1>
              <span>Castanhas de Penedono</span>
              <span>Colhidas na nossa Terra</span>
          </h1>

          <a className="hero-button" href="#encomende">
            Pedir disponibilidade
          </a>
        </div>

      </section>
    </main>
  );
}