import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar({ items = [], crossLink, cta }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const close = () => setOpen(false)

  const handleBrandClick = (e) => {
    e.preventDefault()
    close()
    window.location.reload()
  }

  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <header className="navbar">
        <div className="navbar__pill">
          <a
            href={location.pathname}
            className="navbar__brand"
            onClick={handleBrandClick}
            aria-label="Recharger la page Expansion"
          >
            <span className="navbar__brand-dot" aria-hidden="true" />
            Expansion
          </a>

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
              className="navbar__cta navbar__cta--desktop"
            >
              {cta.label}
            </a>
          )}

          <button
            type="button"
            className={`navbar__burger${open ? ' navbar__burger--open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="navbar-mobile-menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        id="navbar-mobile-menu"
        className={`navbar-mobile${open ? ' navbar-mobile--open' : ''}`}
        aria-hidden={!open}
      >
        <nav className="navbar-mobile__nav" aria-label="Menu mobile">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={close} className="navbar-mobile__link">
              {item.label}
            </a>
          ))}
          {crossLink && (
            <Link
              to={crossLink.to}
              onClick={close}
              className="navbar-mobile__link navbar-mobile__link--cross"
            >
              {crossLink.label}
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M5 15 L15 5 M8 5 H15 V12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          )}
          {cta && (
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="navbar-mobile__cta"
            >
              {cta.label}
            </a>
          )}
        </nav>
      </div>
    </>
  )
}

export default Navbar
