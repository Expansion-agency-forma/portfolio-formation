import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import { REALISATIONS, TYPES, LIBELLE_TYPE } from '../data/realisations'
import { CALENDLY_URL } from '../seo/site'
import '../styles/secteur.css'
import '../styles/realisations.css'

const SECTEURS_DISPO = ['Tous', ...Array.from(new Set(REALISATIONS.map((r) => r.secteur)))]

function CarteVideo({ video }) {
  const [lecture, setLecture] = useState(false)

  return (
    <article className="real-carte">
      <div className="real-carte__media">
        {lecture ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.titre}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="real-carte__lancer"
            onClick={() => setLecture(true)}
            aria-label={`Lire l’extrait : ${video.titre}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              width="480"
              height="360"
            />
            <span className="real-carte__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5 L19 12 L8 19 Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="real-carte__infos">
        <span className={`real-carte__type real-carte__type--${video.type}`}>{LIBELLE_TYPE[video.type]}</span>
        <h3 className="real-carte__titre">{video.titre}</h3>
        <span className="real-carte__secteur">{video.secteur}</span>
      </div>
    </article>
  )
}

function Realisations() {
  const [type, setType] = useState('tous')
  const [secteur, setSecteur] = useState('Tous')

  const liste = useMemo(
    () =>
      REALISATIONS.filter(
        (r) => (type === 'tous' || r.type === type) && (secteur === 'Tous' || r.secteur === secteur),
      ),
    [type, secteur],
  )

  const nbPratique = REALISATIONS.filter((r) => r.type === 'pratique').length
  const nbTheorie = REALISATIONS.length - nbPratique

  return (
    <>
      <Navbar
        items={[
          { href: '/#services', label: 'Comment ça marche' },
          { href: '/#temoignages', label: 'Avis' },
          { href: '/#faq', label: 'FAQ' },
          { href: 'https://expansion-formation.com', label: 'Entreprises' },
        ]}
        crossLink={{ to: '/', label: 'Accueil' }}
        cta={{ href: CALENDLY_URL, label: 'Réserver un appel' }}
      />

      <main className="realisations">
        <section className="secteur-hero real-hero">
          <nav className="secteur-fil" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Nos réalisations</span>
          </nav>
          <span className="eyebrow">Nos réalisations</span>
          <h1 className="secteur-hero__titre">
            Des formations filmées <span className="secteur-hero__italique">dans les centres de nos clients</span>
          </h1>
          <p className="secteur-hero__intro">
            Voici des extraits de formations que nous avons tournées, montées et mises en ligne. Deux formats se
            complètent : la <strong>pratique</strong>, où l’on filme les gestes en situation sous plusieurs angles,
            et la <strong>théorie</strong>, où le formateur explique face caméra. Lancez un extrait pour voir le
            rendu final, tel que vos élèves le verront.
          </p>
          <ul className="real-chiffres">
            <li>
              <strong>{REALISATIONS.length}</strong> extraits
            </li>
            <li>
              <strong>{nbPratique}</strong> en pratique
            </li>
            <li>
              <strong>{nbTheorie}</strong> en théorie
            </li>
          </ul>
        </section>

        <section className="real-liste" aria-label="Extraits de formations">
          <div className="real-filtres">
            <div className="real-filtres__groupe" role="group" aria-label="Format">
              {TYPES.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  className={`real-filtre${type === t.value ? ' is-actif' : ''}`}
                  aria-pressed={type === t.value}
                  onClick={() => setType(t.value)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="real-filtres__groupe" role="group" aria-label="Secteur">
              {SECTEURS_DISPO.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`real-filtre real-filtre--secteur${secteur === s ? ' is-actif' : ''}`}
                  aria-pressed={secteur === s}
                  onClick={() => setSecteur(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {liste.length > 0 ? (
            <div className="real-grille">
              {liste.map((v) => (
                <CarteVideo key={v.id} video={v} />
              ))}
            </div>
          ) : (
            <p className="real-vide">Pas encore d’extrait pour ce choix. Essayez un autre secteur.</p>
          )}
        </section>
      </main>

      <Cta />
      <Footer />
    </>
  )
}

export default Realisations
