import '../styles/simulateur.css'
import { SimulateurApp } from '../pages/Simulateur'

// Simulateur complet intégré à l'accueil. Le résultat s'ouvre sur la page /simulateur.
function Roi() {
  return (
    <section id="simulateur" className="simu-teaser">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Simulateur gratuit</span>
        <h2 className="section-head__title">
          Combien votre formation pourrait-elle{' '}
          <span className="section-head__title-italic">vous rapporter&nbsp;?</span>
        </h2>
        <p className="section-head__subtitle">
          Avant d’investir, sachez ce que vous pouvez en attendre : formation en ligne ou publicité, le calcul
          se fait sur vos chiffres et sur les coûts réels de nos campagnes.
        </p>
      </div>
      <div className="simu-teaser__carte" data-reveal="fade" style={{ '--reveal-delay': '120ms' }}>
        <SimulateurApp embarque />
      </div>
    </section>
  )
}

export default Roi
