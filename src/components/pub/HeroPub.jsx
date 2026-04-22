function HeroPub() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <span className="eyebrow hero__eyebrow" data-reveal>
          Agence publicité au résultat
        </span>

        <h1 className="hero__title" data-reveal style={{ '--reveal-delay': '120ms' }}>
          On lance vos pubs.{' '}
          <span className="hero__title-italic">On est payés au résultat.</span>
        </h1>

        <p className="hero__description" data-reveal style={{ '--reveal-delay': '220ms' }}>
          Meta, TikTok, YouTube, Snapchat. Nous touchons 10 à 20% du CA généré
          par nos campagnes. Aucun frais fixe, aucun risque pour vous.
        </p>

        <div className="hero__cta-row" data-reveal style={{ '--reveal-delay': '320ms' }}>
          <a
            href="https://calendly.com/expansionagency/30min?month=2026-04"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Réserver un audit gratuit
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M5 15 L15 5 M8 5 H15 V12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a href="#creations" className="btn btn--secondary">
            Voir nos campagnes
          </a>
        </div>

        <div className="hero__trust" data-reveal style={{ '--reveal-delay': '420ms' }}>
          <div className="hero__trust-avatars" aria-hidden="true">
            <span className="hero__trust-avatar">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" loading="lazy" />
            </span>
            <span className="hero__trust-avatar">
              <img src="https://randomuser.me/api/portraits/women/52.jpg" alt="" loading="lazy" />
            </span>
            <span className="hero__trust-avatar">
              <img src="https://randomuser.me/api/portraits/men/26.jpg" alt="" loading="lazy" />
            </span>
            <span className="hero__trust-avatar hero__trust-avatar--more">+</span>
          </div>
          <span>Meta · TikTok · YouTube · Snapchat Ads</span>
        </div>
      </div>
    </section>
  )
}

export default HeroPub
