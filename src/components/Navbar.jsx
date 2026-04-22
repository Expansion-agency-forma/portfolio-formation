import { Link } from 'react-router-dom'

function Navbar({ items = [], crossLink, cta }) {
  return (
    <header className="navbar">
      <div className="navbar__pill">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-dot" aria-hidden="true" />
          Expansion
        </Link>

        <nav className="navbar__links" aria-label="Navigation principale">
          {items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          {crossLink && (
            <Link to={crossLink.to} className="navbar__cross">
              {crossLink.label}
            </Link>
          )}
        </nav>

        {cta && (
          <a
            href={cta.href}
            target="_blank"
            rel="noreferrer"
            className="navbar__cta"
          >
            {cta.label}
          </a>
        )}
      </div>
    </header>
  )
}

export default Navbar
