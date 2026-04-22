const CRITERIA = [
  {
    label: 'Paiement au résultat',
    expansion: { status: 'yes', detail: '10-20% du CA généré' },
    freelance: { status: 'no' },
    agency: { status: 'no' },
  },
  {
    label: 'Zéro frais fixe / retainer',
    expansion: { status: 'yes', detail: 'Aucun acompte' },
    freelance: { status: 'warn' },
    agency: { status: 'no' },
  },
  {
    label: 'Audit stratégique inclus',
    expansion: { status: 'yes', detail: 'Offert avant de démarrer' },
    freelance: { status: 'warn' },
    agency: { status: 'warn' },
  },
  {
    label: 'Multi-plateformes',
    expansion: { status: 'yes', detail: 'Meta · TikTok · YouTube · Snap' },
    freelance: { status: 'warn' },
    agency: { status: 'yes' },
  },
  {
    label: 'Créas produites en interne',
    expansion: { status: 'yes', detail: 'Script + tournage + montage' },
    freelance: { status: 'no' },
    agency: { status: 'warn' },
  },
  {
    label: 'Reporting temps réel',
    expansion: { status: 'yes', detail: 'Dashboard CA + CPL + ROAS' },
    freelance: { status: 'warn' },
    agency: { status: 'warn' },
  },
]

function StatusIcon({ status }) {
  if (status === 'yes') {
    return (
      <span className="compare-icon compare-icon--yes" aria-label="Oui">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3.5 8.5 L6.5 11.5 L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    )
  }
  if (status === 'no') {
    return (
      <span className="compare-icon compare-icon--no" aria-label="Non">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4.5 4.5 L11.5 11.5 M11.5 4.5 L4.5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
    )
  }
  return (
    <span className="compare-icon compare-icon--warn" aria-label="Variable">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 2 L14 13 L2 13 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
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

function ComparePub() {
  return (
    <section id="compare" className="compare">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Pourquoi Expansion</span>
        <h2 className="section-head__title">
          Nous vs{' '}
          <span className="section-head__title-italic">les alternatives</span>
        </h2>
        <p className="section-head__subtitle">
          Pourquoi passer par nous plutôt qu'un media buyer freelance ou une agence pub classique ?
        </p>
      </div>

      <div className="compare__inner" data-reveal="fade" style={{ '--reveal-delay': '120ms' }}>
        <div className="compare-table" role="table" aria-label="Comparatif publicité">
          <div className="compare-table__th compare-table__th--label">Critères</div>
          <div className="compare-table__th compare-table__th--featured">
            <span className="compare-table__brand-dot" aria-hidden="true" />
            Expansion
          </div>
          <div className="compare-table__th">Media buyer freelance</div>
          <div className="compare-table__th">Agence pub classique</div>

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

export default ComparePub
