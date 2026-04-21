function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__pill">
        <a href="#top" className="navbar__brand">
          <span className="navbar__brand-dot" aria-hidden="true" />
          Expansion
        </a>

        <nav className="navbar__links" aria-label="Navigation principale">
          <a href="#formations">Nos réalisations</a>
          <a href="#services">Comment ça marche</a>
          <a href="#temoignages">Avis</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a
          href="https://calendly.com/expansionagency/appel-decouverte-formation-en-ligne-clone"
          target="_blank"
          rel="noreferrer"
          className="navbar__cta"
        >
          Réserver un appel
        </a>
      </div>
    </header>
  )
}

export default Navbar
