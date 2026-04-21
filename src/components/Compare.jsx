const CRITERIA = [
  {
    label: 'Spécialistes de la formation',
    expansion: { status: 'yes', detail: 'Pensé pour formations en ligne' },
    freelance: { status: 'no' },
    agency: { status: 'warn' },
  },
  {
    label: 'Tournage sur site',
    expansion: { status: 'yes', detail: 'Équipe de 3 avec setup pro' },
    freelance: { status: 'warn' },
    agency: { status: 'yes' },
  },
  {
    label: 'Délais de livraison',
    expansion: { status: 'yes', detail: '3 à 5 semaines garanti' },
    freelance: { status: 'warn' },
    agency: { status: 'no' },
  },
  {
    label: 'Système de vente inclus',
    expansion: { status: 'yes', detail: 'Landing + tunnel + CRM' },
    freelance: { status: 'no' },
    agency: { status: 'no' },
  },
  {
    label: 'Montage pédagogique',
    expansion: { status: 'yes', detail: 'Découpage en modules clairs' },
    freelance: { status: 'warn' },
    agency: { status: 'warn' },
  },
  {
    label: 'Suivi & accompagnement',
    expansion: { status: 'yes', detail: 'Chef de projet dédié' },
    freelance: { status: 'warn' },
    agency: { status: 'warn' },
  },
]

function StatusIcon({ status }) {
  if (status === 'yes') {
    return (
      <span className="compare-icon compare-icon--yes" aria-label="Oui">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3.5 8.5 L6.5 11.5 L12.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    )
  }
  if (status === 'no') {
    return (
      <span className="compare-icon compare-icon--no" aria-label="Non">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M4.5 4.5 L11.5 11.5 M11.5 4.5 L4.5 11.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
    )
  }
  return (
    <span className="compare-icon compare-icon--warn" aria-label="Variable">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 2 L14 13 L2 13 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M8 6.5 V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="11" r="0.75" fill="currentColor" />
      </svg>
    </span>
  )
}

function Cell({ data, featured }) {
  return (
    <div className={`compare-table__cell${featured ? ' compare-table__cell--featured' : ''}`}>
      <StatusIcon status={data.status} />
      {data.detail && featured && (
        <span className="compare-table__detail">{data.detail}</span>
      )}
    </div>
  )
}

function Compare() {
  return (
    <section id="compare" className="compare">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Pourquoi Expansion</span>
        <h2 className="section-head__title">
          Nous vs{' '}
          <span className="section-head__title-italic">les alternatives</span>
        </h2>
        <p className="section-head__subtitle">
          Pourquoi passer par nous plutôt qu'un vidéaste freelance ou une
          agence de production classique ?
        </p>
      </div>

      <div className="compare__inner" data-reveal="fade" style={{ '--reveal-delay': '120ms' }}>
        <div className="compare-table" role="table" aria-label="Comparatif">
          {/* Header */}
          <div className="compare-table__th compare-table__th--label">Critères</div>
          <div className="compare-table__th compare-table__th--featured">
            <span className="compare-table__brand-dot" aria-hidden="true" />
            Expansion
          </div>
          <div className="compare-table__th">Vidéaste indépendant</div>
          <div className="compare-table__th">Agence de production</div>

          {/* Body */}
          {CRITERIA.map((row, i) => (
            <div key={row.label} className="compare-table__row" style={{ display: 'contents' }}>
              <div
                className={`compare-table__label${i === CRITERIA.length - 1 ? ' compare-table__label--last' : ''}`}
              >
                {row.label}
              </div>
              <Cell data={row.expansion} featured />
              <Cell data={row.freelance} />
              <Cell data={row.agency} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Compare
