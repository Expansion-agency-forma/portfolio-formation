import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import { FORMATIONS } from '../components/Formations'
import { SECTEURS } from '../data/secteurs'
import { CALENDLY_URL } from '../seo/site'
import '../styles/simulateur.css'
import '../styles/secteur.css'

function Fleche() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FlecheExterne() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15 L15 5 M8 5 H15 V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function Vignette({ formation }) {
  const [lecture, setLecture] = useState(false)
  return (
    <figure className="secteur-real">
      <div className="simu-video">
        {lecture ? (
          <iframe
            className="simu-video__iframe"
            src={`https://www.youtube-nocookie.com/embed/${formation.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={formation.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="simu-video__poster"
            onClick={() => setLecture(true)}
            aria-label={`Lire la vidéo : formation ${formation.title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${formation.youtubeId}/hqdefault.jpg`}
              alt={`Extrait de la formation en ligne ${formation.title}`}
              width="480"
              height="360"
              loading="lazy"
              decoding="async"
            />
            <span className="simu-video__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5 L19 12 L8 19 Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption>{formation.title}</figcaption>
    </figure>
  )
}

function Secteur({ secteur }) {
  const realisations = secteur.realisations
    .map((cle) => FORMATIONS.find((f) => f.key === cle))
    .filter(Boolean)
  const autres = SECTEURS.filter((s) => s.slug !== secteur.slug)
  const lienSimulateur = `/simulateur?d=${secteur.domaine}`

  const nav = [
    { href: '#pourquoi', label: 'Pourquoi' },
    { href: '#methode', label: 'Méthode' },
    ...(realisations.length ? [{ href: '#realisations', label: 'Réalisations' }] : []),
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <>
      <Navbar items={nav} crossLink={{ to: '/', label: 'Accueil' }} cta={{ href: CALENDLY_URL, label: 'Réserver un appel' }} />

      <main className="secteur">
        <section className="secteur-hero">
          <nav className="secteur-fil" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{secteur.nom}</span>
          </nav>
          <span className="eyebrow" data-reveal>
            {secteur.eyebrow}
          </span>
          <h1 className="secteur-hero__titre" data-reveal style={{ '--reveal-delay': '100ms' }}>
            {secteur.titre}{' '}
            <span className="secteur-hero__italique">{secteur.titreItalique}</span>
          </h1>
          <p className="secteur-hero__intro" data-reveal style={{ '--reveal-delay': '180ms' }}>
            {secteur.intro}
          </p>
          <div className="secteur-hero__boutons" data-reveal style={{ '--reveal-delay': '260ms' }}>
            <Link to={lienSimulateur} className="btn btn--primary">
              Calculer mon potentiel
              <Fleche />
            </Link>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn btn--secondary">
              Réserver un appel
              <FlecheExterne />
            </a>
          </div>
          <p className="secteur-hero__confiance">Plus de 50 organismes accompagnés depuis 2021</p>
        </section>

        <section className="secteur-section" id="pourquoi">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Pourquoi passer au digital</span>
            <h2 className="section-head__title">{secteur.pourquoiTitre}</h2>
          </div>
          <div className="secteur-grille">
            {secteur.pourquoi.map((p, i) => (
              <article
                key={p.titre}
                className="secteur-carte"
                data-reveal
                style={{ '--reveal-delay': `${i * 80}ms` }}
              >
                <span className="secteur-carte__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.titre}</h3>
                <p>{p.texte}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secteur-section secteur-section--alt">
          <div className="secteur-filmes">
            <div className="secteur-filmes__texte" data-reveal>
              <span className="eyebrow">Tournage</span>
              <h2 className="section-head__title">{secteur.filmesTitre}</h2>
              <p>{secteur.filmesTexte}</p>
            </div>
            <ul className="secteur-filmes__liste" data-reveal style={{ '--reveal-delay': '120ms' }}>
              {secteur.filmes.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="secteur-section" id="methode">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Notre méthode</span>
            <h2 className="section-head__title">
              De votre savoir-faire{' '}
              <span className="section-head__title-italic">à vos premières ventes</span>
            </h2>
          </div>
          <ol className="secteur-etapes">
            {secteur.methode.map((e, i) => (
              <li key={e.titre} data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
                <span className="secteur-etapes__num">{i + 1}</span>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </li>
            ))}
          </ol>
        </section>

        {realisations.length > 0 && (
          <section className="secteur-section secteur-section--alt" id="realisations">
            <div className="section-head" data-reveal>
              <span className="eyebrow">Réalisations</span>
              <h2 className="section-head__title">
                Des formations{' '}
                <span className="section-head__title-italic">déjà en ligne</span>
              </h2>
              <p className="section-head__subtitle">
                Quelques formations tournées, montées et mises en ligne pour nos clients.
              </p>
            </div>
            <div className="secteur-reals" data-reveal="fade">
              {realisations.map((f) => (
                <Vignette key={f.key} formation={f} />
              ))}
            </div>
          </section>
        )}

        <section className="secteur-section">
          <div className="secteur-simu" data-reveal>
            <div>
              <span className="eyebrow">Simulateur gratuit</span>
              <h2 className="secteur-simu__titre">
                Combien votre formation pourrait-elle{' '}
                <em>vous rapporter&nbsp;?</em>
              </h2>
              <p>
                Répondez à 13 questions sur vos élèves, vos abonnés et vos prix : le simulateur estime ce que vous
                pourriez vendre dès le lancement, puis chaque mois.
              </p>
            </div>
            <div className="secteur-simu__actions">
              <Link to={lienSimulateur} className="btn btn--primary">
                Calculer mon potentiel
                <Fleche />
              </Link>
              <span>Gratuit · 1 minute · Résultat immédiat</span>
            </div>
          </div>
          <div className="secteur-preuves" data-reveal>
            <div>
              <strong>150 000 €</strong>
              <span>de chiffre d’affaires pour l’un de nos clients après la digitalisation de ses formations</span>
            </div>
            <div>
              <strong>10 formations</strong>
              <span>en ligne vendues en 3 mois par un autre client</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>organismes de formation accompagnés depuis 2021</span>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Questions fréquentes</span>
            <h2 className="section-head__title">
              Vos questions{' '}
              <span className="section-head__title-italic">sur le projet</span>
            </h2>
          </div>
          <div className="faq__inner">
            <div className="faq__list">
              {secteur.faq.map((item) => (
                <details key={item.q} className="faq-item" data-reveal>
                  <summary className="faq-item__summary">
                    {item.q}
                    <span className="faq-item__icon" aria-hidden="true">
                      <svg viewBox="0 0 14 14" fill="none">
                        <path d="M7 2 V12 M2 7 H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-item__answer">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="secteur-section secteur-autres">
          <h2 className="secteur-autres__titre">Les autres secteurs que nous accompagnons</h2>
          <div className="secteurs-liens">
            {autres.map((s) => (
              <Link key={s.slug} to={s.path} className="secteurs-liens__lien">
                {s.nom}
              </Link>
            ))}
            <Link to="/" className="secteurs-liens__lien secteurs-liens__lien--neutre">
              Voir toute l’offre
            </Link>
          </div>
        </section>
      </main>

      <Cta />
      <Footer />
    </>
  )
}

export default Secteur
