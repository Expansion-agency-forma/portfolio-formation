import '../../styles/offres-pub.css'

const CALENDLY = 'https://calendly.com/expansionagency/30min?month=2026-04'

const RESULTAT = [
  ['Audit et stratégie', ' de votre offre, de votre cible et de vos plateformes'],
  ['Tournage et créas de lancement', ' : scripts, tournage, montage'],
  ['Tracking complet', ' (Pixel, CAPI, CRM) : chaque euro attribué est traçable'],
  ['Pilotage multi-plateformes', ' et optimisation quotidienne'],
  ['Dashboard en temps réel', ' : CA, CPL, ROAS'],
]

const FORFAIT = [
  ['1 tournage publicitaire par mois', ' dans votre centre'],
  ['Scripts, montage et déclinaisons', ' aux formats story, reels et feed'],
  ['Campagnes sur 2 canaux au choix', ' : Meta, TikTok, YouTube ou Snapchat'],
  ['Optimisation continue', ' et reporting en temps réel'],
]

function Check() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8.5 L6.5 11.5 L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Liste({ items }) {
  return (
    <ul className="offre__list">
      {items.map(([fort, suite]) => (
        <li key={fort}>
          <Check />
          <span>
            <strong>{fort}</strong>
            {suite}
          </span>
        </li>
      ))}
    </ul>
  )
}

function OffresPub() {
  return (
    <section id="offres" className="offres">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Nos offres</span>
        <h2 className="section-head__title">
          On gagne{' '}
          <span className="section-head__title-italic">quand vous gagnez</span>
        </h2>
        <p className="section-head__subtitle">
          Deux façons de travailler avec nous. Le même objectif : remplir vos sessions.
        </p>
      </div>

      <div className="offres__grid">
        <article className="offre offre--main" data-reveal>
          <span className="offre__tag">Recommandée</span>
          <h3 className="offre__name">Au résultat</h3>
          <p className="offre__pitch">
            Notre rémunération est indexée sur vos ventes. Pas d'abonnement : si
            nos campagnes ne vendent pas, on ne touche rien.
          </p>
          <div className="offre__price">
            <span className="offre__big">15&nbsp;%</span>
            <span className="offre__unit">du CA généré</span>
          </div>
          <p className="offre__setup">
            + 1 500 € TTC de mise en place, une seule fois. Commission calculée
            sur le CA encaissé uniquement.
          </p>
          <Liste items={RESULTAT} />
          <p className="offre__option">
            <b>Option closing.</b> Notre équipe appelle vos leads et signe pour
            vous, contre un pourcentage supplémentaire sur le CA encaissé,
            défini à l'audit.
          </p>
          <p className="offre__fit">
            <b>Pour vous si</b> vous voulez partager le risque et scaler sans
            immobiliser de trésorerie.
          </p>
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn btn--primary">
            Vérifier mon éligibilité
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 15 L15 5 M8 5 H15 V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </a>
        </article>

        <article className="offre" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <span className="offre__tag">Coût fixe</span>
          <h3 className="offre__name">Forfait</h3>
          <p className="offre__pitch">
            Un budget prévisible et 0 % de commission : vous gardez 100 % de
            votre chiffre d'affaires.
          </p>
          <div className="offre__price">
            <span className="offre__big">2&nbsp;000&nbsp;€</span>
            <span className="offre__unit">TTC / mois</span>
          </div>
          <p className="offre__setup">0 % de commission sur vos ventes.</p>
          <Liste items={FORFAIT} />
          <p className="offre__fit">
            <b>Pour vous si</b> votre offre vend déjà bien et que vous voulez un
            coût fixe chaque mois.
          </p>
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn btn--secondary">
            Réserver un audit
          </a>
        </article>
      </div>

      <p className="offres__note">
        Budget publicitaire non inclus, payé directement aux plateformes.
        Minimum recommandé : 2 000 € / mois.
      </p>
    </section>
  )
}

export default OffresPub
