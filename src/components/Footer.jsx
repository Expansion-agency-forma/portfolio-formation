function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner" data-reveal="fade">
        <span className="footer__brand">
          <span className="navbar__brand-dot" aria-hidden="true" />
          Expansion Agency
        </span>

        <nav className="footer__links" aria-label="Liens secondaires">
          <a href="https://www.instagram.com/expansion" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/expansion" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#mentions">Mentions légales</a>
          <a href="#confidentialite">Confidentialité</a>
          <a href="#cgv">CGV</a>
        </nav>

        <span className="footer__copy">© 2026 Expansion Agency</span>
      </div>
    </footer>
  )
}

export default Footer
