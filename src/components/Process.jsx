function ShootMockup() {
  return (
    <div className="mockup mockup--shoot">
      <div className="clapboard">
        <div className="clapboard__stripes" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <div className="clapboard__body">
          <div className="clapboard__row">
            <span className="clapboard__label">Prod</span>
            <span className="clapboard__value">Institut Beauté</span>
          </div>
          <div className="clapboard__row">
            <span className="clapboard__label">Scène</span>
            <span className="clapboard__value">Module 01</span>
          </div>
          <div className="clapboard__row">
            <span className="clapboard__label">Jour</span>
            <span className="clapboard__value">01 / 01</span>
          </div>
          <div className="clapboard__row">
            <span className="clapboard__label">Date</span>
            <span className="clapboard__value">15 Mars 2026</span>
          </div>
        </div>
        <div className="clapboard__rec">
          <span className="clapboard__rec-dot" />
          <span>REC</span>
        </div>
      </div>
    </div>
  )
}

function EditMockup() {
  const modules = [
    { n: '01', title: 'Les fondamentaux', dur: '12:45', active: true },
    { n: '02', title: 'Techniques de base', dur: '18:30' },
    { n: '03', title: 'Cas pratiques', dur: '24:10' },
    { n: '04', title: 'Erreurs à éviter', dur: '09:55' },
  ]
  return (
    <div className="mockup mockup--edit">
      <div className="edit-panel">
        <div className="edit-panel__header">
          <span className="edit-panel__dot" />
          <span className="edit-panel__dot" />
          <span className="edit-panel__dot" />
          <span className="edit-panel__title">Timeline.expansion</span>
        </div>
        <div className="edit-panel__body">
          {modules.map((m) => (
            <div
              key={m.n}
              className={`edit-panel__module${m.active ? ' edit-panel__module--active' : ''}`}
            >
              <span className="edit-panel__num">{m.n}</span>
              <span className="edit-panel__title-module">{m.title}</span>
              <span className="edit-panel__duration">{m.dur}</span>
            </div>
          ))}
        </div>
        <div className="edit-panel__timeline" aria-hidden="true">
          <span className="edit-panel__segment edit-panel__segment--active" style={{ flex: 2 }} />
          <span className="edit-panel__segment" style={{ flex: 3 }} />
          <span className="edit-panel__segment" style={{ flex: 4 }} />
          <span className="edit-panel__segment" style={{ flex: 1.5 }} />
        </div>
      </div>
    </div>
  )
}

function LaunchMockup() {
  return (
    <div className="mockup mockup--launch">
      <div className="browser">
        <div className="browser__bar">
          <span className="browser__dot" />
          <span className="browser__dot" />
          <span className="browser__dot" />
          <span className="browser__url">formation.expansion.fr</span>
        </div>
        <div className="browser__body">
          <div className="browser__hero-title" />
          <div className="browser__hero-line" />
          <div className="browser__hero-line browser__hero-line--short" />
          <div className="browser__cta">Je réserve</div>
        </div>
      </div>
      <div className="funnel" aria-hidden="true">
        <span className="funnel__step funnel__step--done">1</span>
        <span className="funnel__line funnel__line--done" />
        <span className="funnel__step funnel__step--done">2</span>
        <span className="funnel__line funnel__line--done" />
        <span className="funnel__step funnel__step--active">3</span>
        <span className="funnel__line" />
        <span className="funnel__step">4</span>
      </div>
    </div>
  )
}

const STEPS = [
  {
    key: 'shoot',
    title: 'Étape 1 — Tournage sur site',
    desc: "On envoie notre équipe avec caméras, micros et éclairage pro directement sur votre lieu de formation. En 1 à 2 journées, on capte votre savoir-faire en conditions réelles — pas de fond vert, pas de motion design.",
    Mockup: ShootMockup,
    badges: [
      { text: '1 journée', position: 'top-right' },
      { text: 'Équipe de 3', position: 'bottom-left' },
    ],
  },
  {
    key: 'edit',
    title: 'Étape 2 — Montage modulaire',
    desc: "On découpe votre formation en modules pédagogiques courts et progressifs. Chaque geste est expliqué, chaque séquence cohérente. Vos apprenants avancent sans jamais se perdre, et vous conservez tous les rushes.",
    Mockup: EditMockup,
    badges: [
      { text: '12 modules', position: 'top-left' },
      { text: 'Qualité premium', position: 'bottom-right' },
    ],
  },
  {
    key: 'launch',
    title: 'Étape 3 — Livraison du système',
    desc: "En 3 à 5 semaines, on livre une solution complète : page de vente, tunnel d'inscription, CRM connecté, paiement Stripe. Votre formation est en ligne, prête à vendre — vous n'avez plus qu'à activer.",
    Mockup: LaunchMockup,
    badges: [
      { text: 'Landing + CRM', position: 'top-right' },
      { text: 'Clé en main', position: 'bottom-left' },
    ],
  },
]

const TEASER_THUMBS = [
  { title: 'Prothésie ongulaire', category: 'Beauté', youtubeId: 'Xb462FbfVuE' },
  { title: 'Rehaussement de cils', category: 'Beauté', youtubeId: 'tXZSF4mTKMQ' },
  { title: 'Head spa', category: 'Bien-être', youtubeId: 'fSL5LHJmxrk' },
  { title: 'Remplacement pare-brise', category: 'Automobile', youtubeId: '-hQ9Zt9OKL8' },
  { title: 'Extensions de cils', category: 'Beauté', youtubeId: 'IAHEIGquzNk' },
  { title: 'Browlift', category: 'Beauté', youtubeId: 'RguqLvvj8BY' },
  { title: 'Blanchiment dentaire', category: 'Santé', youtubeId: 'f0bu068Hx-k' },
  { title: 'Magasin pièce auto', category: 'Automobile', youtubeId: 'FWXRC72DbnU' },
]

function Thumb({ thumb }) {
  return (
    <div className="marquee-thumb">
      <div
        className="marquee-thumb__media"
        style={{
          backgroundImage: `url(https://img.youtube.com/vi/${thumb.youtubeId}/hqdefault.jpg)`,
        }}
      >
        <span className="marquee-thumb__badge">{thumb.category}</span>
      </div>
      <div className="marquee-thumb__meta">
        <h4 className="marquee-thumb__title">{thumb.title}</h4>
      </div>
    </div>
  )
}

function ProcessTeaser() {
  const colA = TEASER_THUMBS.filter((_, i) => i % 2 === 0)
  const colB = TEASER_THUMBS.filter((_, i) => i % 2 === 1)

  return (
    <div className="process-teaser">
      <div className="process-teaser__content">
        <span className="eyebrow">Comment ça se passe</span>
        <h2 className="process-teaser__title">
          Notre méthode{' '}
          <span className="section-head__title-italic">en 3 étapes</span>
        </h2>
        <p className="process-teaser__desc">
          Chaque étape pensée pour rendre votre formation commercialisable
          sans friction, du tournage à la mise en ligne.
        </p>
        <a
          href="https://calendly.com/expansionagency/appel-decouverte-formation-en-ligne-clone"
          target="_blank"
          rel="noreferrer"
          className="btn btn--light process-teaser__cta"
        >
          Réserver un appel
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M5 15 L15 5 M8 5 H15 V12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>

      <div className="process-teaser__marquee" aria-hidden="true">
        <div className="marquee-column">
          <div className="marquee-track marquee-track--up">
            {[...colA, ...colA].map((t, i) => (
              <Thumb key={`a-${i}`} thumb={t} />
            ))}
          </div>
        </div>
        <div className="marquee-column">
          <div className="marquee-track marquee-track--down">
            {[...colB, ...colB].map((t, i) => (
              <Thumb key={`b-${i}`} thumb={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Process() {
  return (
    <section id="services" className="process">
      <div className="process__inner">
        <div data-reveal>
          <ProcessTeaser />
        </div>

        <div className="process__grid">
          {STEPS.map(({ key, title, desc, Mockup, badges }, i) => (
            <article
              key={key}
              className={`process-card process-card--${key}`}
              data-reveal
              style={{ '--reveal-delay': `${i * 140}ms` }}
            >
              <div className="process-card__visual">
                <Mockup />
                {badges.map((b) => (
                  <span
                    key={b.position}
                    className={`process-card__badge process-card__badge--${b.position}`}
                  >
                    {b.text}
                  </span>
                ))}
              </div>
              <h3 className="process-card__title">{title}</h3>
              <p className="process-card__desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
