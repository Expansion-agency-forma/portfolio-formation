import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SimulateurApp } from './Simulateur'
import { FAQ_SIMULATION } from '../data/simulation'
import { CALENDLY_URL } from '../lib/simulateur'
import '../styles/simulateur.css'
import '../styles/secteur.css'
import '../styles/cfa.css'

const NAV = [
  { href: '#simulateur', label: 'Lancer la simulation' },
  { href: '#ce-que-vous-simulez', label: 'Ce que vous simulez' },
  { href: '#methode', label: 'Nos chiffres' },
  { href: '#faq', label: 'FAQ' },
]

const CAS = [
  {
    tag: 'Formation en ligne',
    titre: 'Ce que votre formation rapporterait une fois en ligne',
    texte:
      'Vous filmez une fois ce que vous enseignez déjà, et vous le vendez toute l’année, sans ouvrir de nouvelle session. Le simulateur part de vos élèves, de votre communauté et du prix que vous choisissez.',
    points: [
      'Ventes au lancement auprès de vos anciens élèves',
      'Ventes chaque mois : nouveaux élèves, communauté, publicité',
      'Le bonus des versions traduites pour vendre à l’étranger',
    ],
  },
  {
    tag: 'Publicité',
    titre: 'Le chiffre d’affaires que votre budget pub pourrait générer',
    texte:
      'Vous indiquez votre formation, son prix et le budget que vous êtes prêt à mettre. On calcule le nombre de contacts, d’inscrits et le chiffre d’affaires avec les coûts réels de nos campagnes.',
    points: [
      'Formation courte payée par l’élève',
      'Formation éligible au CPF',
      'Contacts, inscriptions et CA mois par mois',
    ],
  },
  {
    tag: 'CFA',
    titre: 'Les contrats que vous pourriez signer à la prochaine rentrée',
    texte:
      'Candidats d’un côté, entreprises qui recrutent un alternant de l’autre : le simulateur estime les contrats signés et la prise en charge OPCO correspondante, dans la limite de vos places.',
    points: [
      'Prise en charge par contrat, ajustée si la formation est à distance',
      'Candidats ou entreprises, selon ce qui vous manque',
      'Plafonné à vos places : pas de promesse impossible',
    ],
  },
]

const OBTENEZ = [
  {
    titre: 'Un chiffre, tout de suite',
    texte: 'Votre potentiel sur 12 mois s’affiche dès la dernière question, avec une fourchette basse et haute.',
  },
  {
    titre: 'Le détail du calcul',
    texte: 'D’où viendraient vos ventes, combien de contacts, à quel coût. Rien n’est caché, chaque hypothèse est écrite.',
  },
  {
    titre: 'Des scénarios à tester',
    texte: 'Changez le prix ou le budget avec un curseur : tous les chiffres se recalculent devant vous.',
  },
  {
    titre: 'Une suite si vous le voulez',
    texte: 'Un appel de 30 minutes pour en parler, ou une vidéo personnalisée sur votre centre, envoyée par email.',
  },
]

function Plus() {
  return (
    <span className="faq-item__icon" aria-hidden="true">
      <svg viewBox="0 0 14 14" fill="none">
        <path d="M7 2 V12 M2 7 H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function Simulation() {
  return (
    <>
      <Navbar items={NAV} crossLink={{ to: '/', label: 'Accueil' }} cta={{ href: CALENDLY_URL, label: 'Réserver un appel' }} />

      <main className="secteur">
        <section className="secteur-hero">
          <nav className="secteur-fil" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Simulation</span>
          </nav>
          <span className="eyebrow" data-reveal>
            Simulateur gratuit · 2 minutes
          </span>
          <h1 className="secteur-hero__titre" data-reveal style={{ '--reveal-delay': '100ms' }}>
            Combien votre centre de formation{' '}
            <span className="secteur-hero__italique">pourrait‑il gagner de plus ?</span>
          </h1>
          <p className="secteur-hero__intro" data-reveal style={{ '--reveal-delay': '180ms' }}>
            Formation en ligne, publicité, CPF ou CFA : répondez à quelques questions en un clic et découvrez le
            chiffre d’affaires que vous laissez peut-être sur la table. Le calcul part de vos chiffres et des coûts
            réels de nos campagnes, pas de promesses.
          </p>
          <div className="secteur-hero__boutons" data-reveal style={{ '--reveal-delay': '260ms' }}>
            <a href="#simulateur" className="btn btn--primary">
              Calculer mon potentiel
            </a>
            <a href="#ce-que-vous-simulez" className="btn btn--secondary">
              Ce que vous pouvez simuler
            </a>
          </div>
          <p className="secteur-hero__confiance">Gratuit · Sans engagement · Résultat immédiat</p>
        </section>

        <section id="simulateur" className="simu-teaser">
          <div className="section-head" data-reveal>
            <span className="eyebrow">À vous de jouer</span>
            <h2 className="section-head__title">
              Choisissez ce que vous voulez{' '}
              <span className="section-head__title-italic">calculer</span>
            </h2>
          </div>
          <div className="simu-teaser__carte" data-reveal="fade">
            <SimulateurApp embarque />
          </div>
        </section>

        <section className="secteur-section" id="ce-que-vous-simulez">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Trois simulations</span>
            <h2 className="section-head__title">
              Un seul outil,{' '}
              <span className="section-head__title-italic">trois façons de grandir</span>
            </h2>
          </div>
          <div className="cfa-leviers simu-page-cas">
            {CAS.map((c, i) => (
              <article key={c.titre} className="cfa-levier" data-reveal style={{ '--reveal-delay': `${i * 100}ms` }}>
                <span className="cfa-levier__tag">{c.tag}</span>
                <h3>{c.titre}</h3>
                <p>{c.texte}</p>
                <ul>
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="secteur-section secteur-section--alt" id="methode">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Nos chiffres</span>
            <h2 className="section-head__title">
              Des données réelles,{' '}
              <span className="section-head__title-italic">pas une promesse</span>
            </h2>
            <p className="section-head__subtitle">
              Beaucoup de simulateurs affichent des chiffres qui font rêver. Le nôtre utilise ce que nous mesurons
              sur nos campagnes et des hypothèses volontairement prudentes.
            </p>
          </div>
          <div className="simu-cas simu-page-chiffres" data-reveal>
            <div className="simu-cas__item">
              <strong>35 000+</strong>
              <span>contacts générés pour des centres VTC, à 3,70 – 7,60 € l’un</span>
            </div>
            <div className="simu-cas__item">
              <strong>5,50 – 8 €</strong>
              <span>le coût d’un contact sur nos campagnes beauté et coiffure</span>
            </div>
            <div className="simu-cas__item">
              <strong>150 000 €</strong>
              <span>de chiffre d’affaires pour l’un de nos clients après la digitalisation de ses formations</span>
            </div>
          </div>
          <p className="simu-page-note" data-reveal>
            Le détail de nos coûts par contact, secteur par secteur, est publié dans{' '}
            <Link to="/ressources/cout-publicite-organisme-formation">notre article sur le coût de la publicité</Link>.
          </p>
        </section>

        <section className="secteur-section">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Votre résultat</span>
            <h2 className="section-head__title">
              Ce que vous obtenez{' '}
              <span className="section-head__title-italic">en 2 minutes</span>
            </h2>
          </div>
          <div className="secteur-grille">
            {OBTENEZ.map((o, i) => (
              <article key={o.titre} className="secteur-carte" data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
                <span className="secteur-carte__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{o.titre}</h3>
                <p>{o.texte}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Questions fréquentes</span>
            <h2 className="section-head__title">
              Avant de lancer{' '}
              <span className="section-head__title-italic">votre simulation</span>
            </h2>
          </div>
          <div className="faq__inner">
            <div className="faq__list">
              {FAQ_SIMULATION.map((item) => (
                <details key={item.q} className="faq-item" data-reveal>
                  <summary className="faq-item__summary">
                    {item.q}
                    <Plus />
                  </summary>
                  <div className="faq-item__answer">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section className="cta-final">
        <div className="cta-final__inner">
          <div className="cta-final__card" data-reveal="scale">
            <span className="eyebrow cta-final__eyebrow">2 minutes suffisent</span>
            <h2 className="cta-final__title">
              Et si vous saviez enfin{' '}
              <span className="cta-final__title-italic">ce que vaut votre savoir-faire ?</span>
            </h2>
            <p className="cta-final__desc">
              Avant d’investir un euro, regardez ce que votre formation pourrait rapporter en ligne ou avec la
              publicité. Si le chiffre vous parle, on en discute. Sinon, vous repartez avec votre estimation.
            </p>
            <a href="#simulateur" className="btn btn--primary">
              Lancer ma simulation
            </a>
            <span className="cta-final__reassurance">Gratuit · Sans engagement · Résultat immédiat</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Simulation
