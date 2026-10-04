import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SECTEURS } from '../data/secteurs'
import '../styles/secteur.css'

function NotFound() {
  return (
    <>
      <Navbar items={[]} crossLink={{ to: '/', label: 'Accueil' }} />
      <main className="introuvable">
        <span className="eyebrow">Erreur 404</span>
        <h1>
          Cette page <em>n’existe pas</em>
        </h1>
        <p>Le lien est peut-être incomplet ou la page a été déplacée. Voici par où continuer :</p>
        <div className="secteur-hero__boutons">
          <Link to="/" className="btn btn--primary">
            Retour à l’accueil
          </Link>
          <Link to="/simulateur" className="btn btn--secondary">
            Calculer mon potentiel
          </Link>
        </div>
        <div className="secteurs-liens">
          {SECTEURS.map((s) => (
            <Link key={s.slug} to={s.path} className="secteurs-liens__lien">
              {s.nom}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
