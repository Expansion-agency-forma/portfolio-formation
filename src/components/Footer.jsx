import { Link } from 'react-router-dom'
import { SECTEURS } from '../data/secteurs'
import { ouvrirPreferencesCookies } from '../lib/consentement'
import '../styles/secteur.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner" data-reveal="fade">
        <nav className="footer__secteurs" aria-label="Créer sa formation en ligne par secteur">
          <span className="footer__secteurs-titre">Créer sa formation en ligne</span>
          {SECTEURS.map((s) => (
            <Link key={s.slug} to={s.path}>
              {s.nom}
            </Link>
          ))}
          <Link to="/simulateur">Simulateur de potentiel</Link>
          <Link to="/publicite">Publicité au résultat</Link>
          <Link to="/ressources">Ressources et conseils</Link>
        </nav>

        <span className="footer__brand">
          <span className="navbar__brand-dot" aria-hidden="true" />
          Expansion Agency
        </span>

        <nav className="footer__links" aria-label="Liens secondaires">
          <a
            href="https://www.instagram.com/nathanael_dhs"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/nathanael-dahomais-161577145"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@NathanaelDahomais"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Confidentialité</Link>
          <Link to="/cgv">CGV</Link>
          <button type="button" className="footer__cookies" onClick={ouvrirPreferencesCookies}>
            Gérer les cookies
          </button>
        </nav>

        <span className="footer__copy">© 2026 Expansion Agency</span>
      </div>
    </footer>
  )
}

export default Footer
