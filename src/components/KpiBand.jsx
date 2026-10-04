const KPIS = [
  { value: '50', suffix: '+', label: 'organismes accompagnés' },
  { value: '98', suffix: '%', label: 'taux de satisfaction' },
  { value: '100', suffix: '%', label: 'tournage sur site' },
]

function KpiBand() {
  return (
    <section className="kpi-band" aria-label="Chiffres clés">
      <div className="kpi-band__inner">
        {KPIS.map((kpi, i) => (
          <div
            key={kpi.label}
            className="kpi"
            data-reveal
            style={{ '--reveal-delay': `${i * 100}ms` }}
          >
            <span className="kpi__value">
              <span data-counter={kpi.value}>{kpi.value}</span>
              <span className="kpi__value-suffix">{kpi.suffix}</span>
            </span>
            <span className="kpi__label">{kpi.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KpiBand
