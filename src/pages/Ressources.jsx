import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import { ARTICLES } from '../data/ressources'
import { typo } from '../lib/article'
import { CALENDLY_URL } from '../seo/site'
import { EncartSimulateur } from './Article'
import '../styles/simulateur.css'
import '../styles/secteur.css'
import '../styles/ressources.css'

function Ressources() {
  return (
    <>
      <Navbar crossLink={{ to: '/', label: 'Accueil' }} cta={{ href: CALENDLY_URL, label: 'Réserver un appel' }} />

      <main className="ressources">
        <section className="secteur-hero ressources-hero">
          <nav className="secteur-fil" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Ressources</span>
          </nav>
          <span className="eyebrow">Conseils pour organismes de formation</span>
          <h1 className="secteur-hero__titre">
            Ressources pour digitaliser <span className="secteur-hero__italique">vos formations</span>
          </h1>
          <p className="secteur-hero__intro">
            Délais, rentabilité, tournage, financement, pédagogie : nos réponses aux questions que se posent les
            organismes de formation avant de lancer une formation en ligne. Par Nathanaël Dahomais, fondateur
            d’Expansion Agency, à partir de plus de 50 organismes accompagnés depuis 2021.
          </p>
        </section>

        <section className="ressources-liste" aria-label="Articles">
          <div className="ressources-grille">
            {ARTICLES.map((a) => (
              <Link key={a.slug} to={a.path} className="ressource-carte">
                <span className="ressource-carte__categorie">{a.categorie}</span>
                <h2 className="ressource-carte__titre">{typo(a.titre)}</h2>
                <span className="ressource-carte__texte">{typo(a.description)}</span>
                <span className="ressource-carte__lecture">{a.lecture} min de lecture</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="secteur-section">
          <EncartSimulateur source="/ressources" />
        </section>
      </main>

      <Cta />
      <Footer />
    </>
  )
}

export default Ressources
