function AuditMockup() {
  return (
    <div className="mockup mockup--audit">
      <div className="audit-panel">
        <div className="audit-panel__header">
          <span className="audit-panel__dot" />
          <span className="audit-panel__dot" />
          <span className="audit-panel__dot" />
          <span className="audit-panel__title">Audit.stratégie</span>
        </div>
        <div className="audit-panel__body">
          <div className="audit-panel__row">
            <span className="audit-panel__bullet" />
            <span className="audit-panel__label">Objectif</span>
            <span className="audit-panel__value">+200 leads / mois</span>
          </div>
          <div className="audit-panel__row">
            <span className="audit-panel__bullet" />
            <span className="audit-panel__label">Budget</span>
            <span className="audit-panel__value">5 000 € / mois</span>
          </div>
          <div className="audit-panel__row">
            <span className="audit-panel__bullet audit-panel__bullet--done" />
            <span className="audit-panel__label">Persona</span>
            <span className="audit-panel__value audit-panel__value--muted">Validé</span>
          </div>
          <div className="audit-panel__row">
            <span className="audit-panel__bullet audit-panel__bullet--done" />
            <span className="audit-panel__label">Canal #1</span>
            <span className="audit-panel__value audit-panel__value--muted">Meta</span>
          </div>
          <div className="audit-panel__cta">Prêt à lancer</div>
        </div>
      </div>
    </div>
  )
}

function AdManagerMockup() {
  return (
    <div className="mockup mockup--ads">
      <div className="ads-panel">
        <div className="ads-panel__header">
          <span className="ads-panel__logo" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="10" r="7" /></svg>
          </span>
          <span className="ads-panel__title">Campagne Lead Gen</span>
          <span className="ads-panel__live">● LIVE</span>
        </div>
        <div className="ads-panel__metrics">
          <div className="ads-panel__metric">
            <span className="ads-panel__metric-label">CPL</span>
            <span className="ads-panel__metric-value">4,80 €</span>
          </div>
          <div className="ads-panel__metric">
            <span className="ads-panel__metric-label">CTR</span>
            <span className="ads-panel__metric-value ads-panel__metric-value--up">3,2%</span>
          </div>
          <div className="ads-panel__metric">
            <span className="ads-panel__metric-label">Leads</span>
            <span className="ads-panel__metric-value">342</span>
          </div>
        </div>
        <div className="ads-panel__graph">
          <svg viewBox="0 0 200 60" preserveAspectRatio="none">
            <path
              d="M0 45 L20 40 L40 42 L60 32 L80 30 L100 22 L120 18 L140 12 L160 14 L180 8 L200 6"
              stroke="var(--color-gold)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0 45 L20 40 L40 42 L60 32 L80 30 L100 22 L120 18 L140 12 L160 14 L180 8 L200 6 L200 60 L0 60 Z"
              fill="url(#ad-gradient)"
            />
            <defs>
              <linearGradient id="ad-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(201, 168, 76, 0.4)" />
                <stop offset="100%" stopColor="rgba(201, 168, 76, 0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="mockup mockup--dashboard">
      <div className="dashboard-panel">
        <div className="dashboard-panel__header">
          <span className="dashboard-panel__title">CA généré · 30 jours</span>
          <span className="dashboard-panel__badge">+47%</span>
        </div>
        <div className="dashboard-panel__big">
          <span className="dashboard-panel__big-value">48 320 €</span>
          <span className="dashboard-panel__big-sub">ROAS x4.2</span>
        </div>
        <div className="dashboard-panel__bars" aria-hidden="true">
          <span style={{ height: '35%' }} />
          <span style={{ height: '50%' }} />
          <span style={{ height: '42%' }} />
          <span style={{ height: '65%' }} />
          <span style={{ height: '58%' }} />
          <span style={{ height: '78%' }} />
          <span className="dashboard-panel__bar--active" style={{ height: '92%' }} />
        </div>
      </div>
    </div>
  )
}

const STEPS = [
  {
    key: 'audit',
    title: 'Étape 1 — Audit & stratégie',
    desc: "On analyse votre produit, votre offre, votre audience. On définit les objectifs, le budget, les plateformes prioritaires et le framework de test. Tout est validé avec vous avant de lancer.",
    Mockup: AuditMockup,
    badges: [
      { text: 'Audit offert', position: 'top-right' },
      { text: 'Brief validé', position: 'bottom-left' },
    ],
  },
  {
    key: 'launch',
    title: 'Étape 2 — Créa & lancement',
    desc: "On produit les créas (scripts, montages, visuels), on monte les campagnes (Meta, TikTok, YouTube ou Snap selon la cible), on optimise quotidiennement. Vous voyez tout en temps réel.",
    Mockup: AdManagerMockup,
    badges: [
      { text: 'Créa incluse', position: 'top-left' },
      { text: 'Optim daily', position: 'bottom-right' },
    ],
  },
  {
    key: 'scale',
    title: 'Étape 3 — Scaling au résultat',
    desc: "On scale ce qui convertit, on coupe ce qui ne marche pas. Reporting transparent sur le CA généré, le CPL, le ROAS. Vous nous payez uniquement sur les ventes réalisées.",
    Mockup: DashboardMockup,
    badges: [
      { text: 'ROAS x4+', position: 'top-right' },
      { text: 'Pay on results', position: 'bottom-left' },
    ],
  },
]

const TEASER_THUMBS_VERTICAL = [
  { title: 'Campagne lead gen', category: 'CPL 3€', youtubeId: 'Zh10NzkmmO0' },
  { title: 'Campagne lead gen', category: 'CPL 4€', youtubeId: '0tGUPl02AVc' },
  { title: 'Campagne lead gen', category: 'CPL 5€', youtubeId: 'OoMDuO_1r5Y' },
  { title: 'Campagne lead gen', category: 'CPL 6€', youtubeId: 'G4m41KGB86w' },
  { title: 'Campagne solaire', category: 'CPL 9€', youtubeId: 'X00KllReGko' },
]

function VerticalThumb({ thumb }) {
  return (
    <div className="marquee-vthumb">
      <div
        className="marquee-vthumb__media"
        style={{
          backgroundImage: `url(https://img.youtube.com/vi/${thumb.youtubeId}/hqdefault.jpg)`,
        }}
      >
        <span className="marquee-vthumb__badge">{thumb.category}</span>
      </div>
      <div className="marquee-vthumb__meta">
        <span className="marquee-vthumb__title">{thumb.title}</span>
      </div>
    </div>
  )
}

function ProcessTeaserPub() {
  const colA = TEASER_THUMBS_VERTICAL.filter((_, i) => i % 2 === 0)
  const colB = TEASER_THUMBS_VERTICAL.filter((_, i) => i % 2 === 1)

  return (
    <div className="process-teaser">
      <div className="process-teaser__content">
        <span className="eyebrow">Comment on fonctionne</span>
        <h2 className="process-teaser__title">
          Notre méthode{' '}
          <span className="section-head__title-italic">en 3 étapes</span>
        </h2>
        <p className="process-teaser__desc">
          De l'audit stratégique au scaling, on gère tout pour vous. Vous ne
          payez que sur le CA que nos campagnes génèrent.
        </p>
        <a
          href="https://calendly.com/expansionagency/appel-decouverte-formation-en-ligne-clone"
          target="_blank"
          rel="noreferrer"
          className="btn btn--light process-teaser__cta"
        >
          Réserver un audit
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

      <div className="process-teaser__marquee process-teaser__marquee--vertical" aria-hidden="true">
        <div className="marquee-column">
          <div className="marquee-track marquee-track--up">
            {[...colA, ...colA].map((t, i) => (
              <VerticalThumb key={`a-${i}`} thumb={t} />
            ))}
          </div>
        </div>
        <div className="marquee-column">
          <div className="marquee-track marquee-track--down">
            {[...colB, ...colB].map((t, i) => (
              <VerticalThumb key={`b-${i}`} thumb={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProcessPub() {
  return (
    <section id="services" className="process">
      <div className="process__inner">
        <div data-reveal>
          <ProcessTeaserPub />
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

export default ProcessPub
