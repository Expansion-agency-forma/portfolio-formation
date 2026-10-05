import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import { AUTEUR, BASE_RESSOURCES, articleParSlug } from '../data/ressources'
import { dateLongue, morceaux, typo } from '../lib/article'
import { evenementGA } from '../lib/analytics'
import { CALENDLY_URL } from '../seo/site'
import '../styles/simulateur.css'
import '../styles/secteur.css'
import '../styles/ressources.css'

function Fleche() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Texte avec gras et liens (internes : navigation sans rechargement ; externes : nouvel onglet).
function Texte({ texte }) {
  return morceaux(texte).map((m, i) => {
    if (m.type === 'gras') return <strong key={i}>{m.valeur}</strong>
    if (m.type === 'lien') {
      return m.href.startsWith('/') ? (
        <Link key={i} to={m.href}>
          {m.valeur}
        </Link>
      ) : (
        <a key={i} href={m.href} target="_blank" rel="noopener noreferrer">
          {m.valeur}
        </a>
      )
    }
    return m.valeur
  })
}

// Vidéo YouTube chargée seulement au clic (aucun cookie YouTube avant).
function Video({ id, titre, page }) {
  const [lecture, setLecture] = useState(false)
  return (
    <figure className="article-video">
      <div className="simu-video">
        {lecture ? (
          <iframe
            className="simu-video__iframe"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={titre}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="simu-video__poster"
            onClick={() => {
              setLecture(true)
              evenementGA('video_lecture', { video: titre, page })
            }}
            aria-label={`Lire la vidéo : ${titre}`}
          >
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt=""
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
      <figcaption>{typo(titre)}</figcaption>
    </figure>
  )
}

export function EncartSimulateur({ source }) {
  return (
    <aside className="secteur-simu article-simu" aria-label="Simulateur de potentiel">
      <div>
        <span className="eyebrow">Simulateur gratuit</span>
        <p className="secteur-simu__titre">
          Combien votre formation pourrait-elle <em>vous rapporter&nbsp;?</em>
        </p>
        <p>
          Répondez à 13 questions sur vos élèves, vos abonnés et vos prix : le simulateur estime ce que vous pourriez
          vendre dès le lancement, puis chaque mois.
        </p>
      </div>
      <div className="secteur-simu__actions">
        <Link
          to="/simulateur"
          className="btn btn--primary"
          onClick={() => evenementGA('clic_simulateur', { source })}
        >
          Calculer mon potentiel
          <Fleche />
        </Link>
        <span>Gratuit · 1 minute · Résultat immédiat</span>
      </div>
    </aside>
  )
}

function Bloc({ bloc, page }) {
  switch (bloc.type) {
    case 'h2':
      return (
        <h2 id={bloc.id}>
          <Texte texte={bloc.texte} />
        </h2>
      )
    case 'h3':
      return (
        <h3>
          <Texte texte={bloc.texte} />
        </h3>
      )
    case 'ul':
    case 'ol': {
      const Liste = bloc.type
      return (
        <Liste>
          {bloc.items.map((item, i) => (
            <li key={i}>
              <Texte texte={item} />
            </li>
          ))}
        </Liste>
      )
    }
    case 'encadre':
      return (
        <p className="article-encadre">
          <Texte texte={bloc.texte} />
        </p>
      )
    case 'video':
      return <Video id={bloc.id} titre={bloc.titre} page={page} />
    case 'simulateur':
      return <EncartSimulateur source={page} />
    default:
      return (
        <p>
          <Texte texte={bloc.texte} />
        </p>
      )
  }
}

function Article({ article }) {
  const liees = article.liees.map(articleParSlug).filter(Boolean)

  return (
    <>
      <Navbar
        crossLink={{ to: BASE_RESSOURCES, label: 'Toutes les ressources' }}
        cta={{ href: CALENDLY_URL, label: 'Réserver un appel' }}
      />

      <main className="article">
        <header className="article-entete">
          <nav className="secteur-fil" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link to={BASE_RESSOURCES}>Ressources</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{article.fil}</span>
          </nav>
          <span className="eyebrow">{article.categorie}</span>
          <h1 className="article-entete__titre">{typo(article.titre)}</h1>
          <p className="article-entete__chapo">{typo(article.description)}</p>
          <p className="article-meta">
            Par{' '}
            <a href={AUTEUR.url} target="_blank" rel="noopener noreferrer author">
              {AUTEUR.nom}
            </a>
            <span aria-hidden="true">·</span>
            <time dateTime={article.maj}>
              {article.maj !== article.publie ? 'Mis à jour le ' : 'Publié le '}
              {dateLongue(article.maj)}
            </time>
            <span aria-hidden="true">·</span>
            {article.lecture} min de lecture
          </p>
        </header>

        <div className="article-colonne">
          <section className="article-bref" aria-labelledby="article-bref-titre">
            <h2 id="article-bref-titre">En bref</h2>
            <ul>
              {article.resume.map((r) => (
                <li key={r}>{typo(r)}</li>
              ))}
            </ul>
          </section>

          {article.sommaire.length > 2 && (
            <nav className="article-sommaire" aria-labelledby="article-sommaire-titre">
              <h2 id="article-sommaire-titre">Sommaire</h2>
              <ol>
                {article.sommaire.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`}>{typo(h.texte.replace(/\*\*/g, ''))}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="article-texte">
            {article.blocs.map((bloc, i) => (
              <Bloc key={i} bloc={bloc} page={article.path} />
            ))}
          </div>

          {article.faq.length > 0 && (
            <section className="article-faq" aria-labelledby="article-faq-titre">
              <h2 id="article-faq-titre">Questions fréquentes</h2>
              <div className="faq__list">
                {article.faq.map((item) => (
                  <details key={item.q} className="faq-item">
                    <summary className="faq-item__summary">
                      {typo(item.q)}
                      <span className="faq-item__icon" aria-hidden="true">
                        <svg viewBox="0 0 14 14" fill="none">
                          <path d="M7 2 V12 M2 7 H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                    </summary>
                    <div className="faq-item__answer">{typo(item.a)}</div>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="article-auteur" aria-label="À propos de l’auteur">
            <span className="article-auteur__initiales" aria-hidden="true">
              ND
            </span>
            <div>
              <p className="article-auteur__nom">
                <a href={AUTEUR.url} target="_blank" rel="noopener noreferrer author">
                  {AUTEUR.nom}
                </a>
              </p>
              <p className="article-auteur__role">{AUTEUR.role}</p>
              <p>{typo(AUTEUR.bio)}</p>
            </div>
          </section>
        </div>

        {liees.length > 0 && (
          <section className="article-liees" aria-labelledby="article-liees-titre">
            <h2 id="article-liees-titre" className="article-liees__titre">
              À lire aussi
            </h2>
            <div className="ressources-grille">
              {liees.map((a) => (
                <Link key={a.slug} to={a.path} className="ressource-carte">
                  <span className="ressource-carte__categorie">{a.categorie}</span>
                  <span className="ressource-carte__titre">{typo(a.titre)}</span>
                  <span className="ressource-carte__lecture">{a.lecture} min de lecture</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Cta />
      <Footer />
    </>
  )
}

export default Article
