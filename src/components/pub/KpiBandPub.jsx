const KPIS = [
  { value: '10', suffix: '–15%', label: 'taux de closing moyen' },
  { value: '0', suffix: '€', label: 'de frais fixe' },
  { value: '10', suffix: '–20%', label: 'du CA généré facturé' },
]

function KpiBandPub() {
  return (
    <section className="kpi-band" aria-label="Chiffres clés publicité">
      <div className="kpi-band__inner">
        {KPIS.map((kpi, i) => (
          <div
            key={kpi.label}
            className="kpi"
            data-reveal
            style={{ '--reveal-delay': `${i * 100}ms` }}
          >
            <span className="kpi__value">
              {kpi.value === '0' ? (
                <span>{kpi.value}</span>
              ) : (
                <span data-counter={kpi.value}>0</span>
              )}
              <span className="kpi__value-suffix">{kpi.suffix}</span>
            </span>
            <span className="kpi__label">{kpi.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KpiBandPub
