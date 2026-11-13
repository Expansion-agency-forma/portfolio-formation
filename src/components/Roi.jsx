import { useNavigate } from 'react-router-dom'
import '../styles/simulateur.css'
import { QUESTIONS } from '../lib/simulateur'

// Encart d'entrée vers le simulateur (remplace l'ancien calculateur de rentabilité).
function Roi() {
  const navigate = useNavigate()
  const premiere = QUESTIONS[0]

  return (
    <section id="simulateur" className="simu-teaser">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Simulateur gratuit</span>
        <h2 className="section-head__title">
          Combien votre formation pourrait-elle{' '}
          <span className="section-head__title-italic">vous rapporter&nbsp;?</span>
        </h2>
        <p className="section-head__subtitle">
          Avant d’investir, sachez ce que vous pouvez en attendre. Répondez à {QUESTIONS.length} questions
          rapides sur votre activité : on estime vos ventes au lancement, puis chaque mois.
        </p>
      </div>

      <div className="simu-teaser__carte" data-reveal="fade" style={{ '--reveal-delay': '120ms' }}>
        <div className="simu-teaser__haut">
          <span>Question 1 sur {QUESTIONS.length}</span>
          <span>Environ 1 minute</span>
        </div>
        <h3 className="simu-teaser__question">{premiere.titre}</h3>
        <div className="simu-options">
          {premiere.options.map((o) => (
            <button
              key={o.value}
              type="button"
              className="simu-option"
              onClick={() => navigate(`/simulateur?d=${encodeURIComponent(o.value)}`)}
            >
              {o.label}
            </button>
          ))}
        </div>
        <p className="simu-teaser__pied">Cliquez sur une réponse pour commencer · Gratuit · Résultat immédiat</p>
      </div>
    </section>
  )
}

export default Roi
