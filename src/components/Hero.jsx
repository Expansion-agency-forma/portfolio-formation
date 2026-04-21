function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <span className="eyebrow hero__eyebrow" data-reveal>Agence de formation</span>

        <h1 className="hero__title" data-reveal style={{ '--reveal-delay': '120ms' }}>
          On digitalise vos formations{' '}
          <span className="hero__title-italic">clé en main.</span>
        </h1>

        <p className="hero__description" data-reveal style={{ '--reveal-delay': '220ms' }}>
          Tournage pro sur site, montage en modules pédagogiques, système de
          vente complet. Vous transmettez — nous produisons, packageons, livrons.
        </p>

        <div className="hero__cta-row" data-reveal style={{ '--reveal-delay': '320ms' }}>
          <a
            href="https://calendly.com/expansionagency/appel-decouverte-formation-en-ligne-clone"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Réserver un appel découverte
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M5 15 L15 5 M8 5 H15 V12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a href="#formations" className="btn btn--secondary">
            Voir nos formations
          </a>
        </div>

        <div className="hero__trust" data-reveal style={{ '--reveal-delay': '420ms' }}>
          <div className="hero__trust-avatars" aria-hidden="true">
            <span className="hero__trust-avatar">AR</span>
            <span className="hero__trust-avatar">JM</span>
            <span className="hero__trust-avatar">SL</span>
            <span className="hero__trust-avatar">+</span>
          </div>
          <span>Plus de 150 formations digitalisées depuis 2021</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
