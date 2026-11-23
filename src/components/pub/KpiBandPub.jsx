const KPIS = [
  { value: '10', suffix: '–15%', label: 'taux de closing moyen', counter: true },
  { value: 'J+14', suffix: '', label: "premiers leads après l'audit" },
  { value: '15', suffix: '%', label: 'du CA généré, rien de plus', counter: true },
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
              {kpi.counter ? (
                <span data-counter={kpi.value}>{kpi.value}</span>
              ) : (
                <span>{kpi.value}</span>
              )}
              {kpi.suffix && <span className="kpi__value-suffix">{kpi.suffix}</span>}
            </span>
            <span className="kpi__label">{kpi.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KpiBandPub
