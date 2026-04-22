import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner" data-reveal="fade">
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
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Confidentialité</Link>
          <Link to="/cgv">CGV</Link>
        </nav>

        <span className="footer__copy">© 2026 Expansion Agency</span>
      </div>
    </footer>
  )
}

export default Footer
