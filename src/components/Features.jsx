const ICONS = {
  camera: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h3l2-2h8l2 2h3v12H3z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  ),
  modules: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  landing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 14h8" />
      <path d="M8 17h5" />
    </svg>
  ),
  funnel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4h18l-7 8v8l-4-2v-6z" />
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="6" r="2.5" />
      <path d="M14 13c2-1 5-0.5 7 1" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3c4 0 8 4 8 8l-6 6-3-3-3-3 6-6z" />
      <path d="M13 13c-2 2-6 2-7 1-1-1-1-5 1-7" />
      <circle cx="15" cy="9" r="1.2" />
    </svg>
  ),
}

const FEATURES = [
  {
    key: 'camera',
    title: 'Tournage sur site',
    desc: "On se déplace avec une équipe pro. Pas d'animations, pas de motion design — du vrai contenu tourné sur le terrain, chez vous.",
  },
  {
    key: 'modules',
    title: 'Montage modulaire',
    desc: "Chaque formation découpée en modules clairs et progressifs. Vos apprenants savent toujours où ils en sont.",
  },
  {
    key: 'landing',
    title: 'Page de vente',
    desc: "Une landing page optimisée pour convertir vos visiteurs en acheteurs, avec copywriting et design dédiés.",
  },
  {
    key: 'funnel',
    title: "Tunnel d'inscription",
    desc: "Workflow automatisé pour onboarder vos apprenants sans friction : paiement, accès, emails de bienvenue.",
  },
  {
    key: 'crm',
    title: 'CRM intégré',
    desc: "Gestion centralisée de vos leads, élèves et communications. Tout est connecté, rien ne se perd.",
  },
  {
    key: 'rocket',
    title: 'Mise en ligne rapide',
    desc: "De la captation à la mise en ligne, on livre en quelques semaines. Vous commencez à vendre vite.",
  },
]

function Features() {
  return (
    <section id="services" className="features">
      <div className="features__inner">
        <div className="features__head">
          <h2 className="features__title">Services</h2>
          <p className="features__subtitle">Un système complet, clé en main</p>
        </div>

        <div className="features__grid">
          {FEATURES.map((f) => (
            <article key={f.key} className="feature-card">
              <span className="feature-card__icon">{ICONS[f.key]}</span>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <svg className="features__arrow-bottom" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M10 26 L26 10 M14 10 H26 V22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
      </svg>
    </section>
  )
}

export default Features
