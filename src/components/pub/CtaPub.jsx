function CtaPub() {
  return (
    <section id="contact" className="cta-final">
      <div className="cta-final__inner">
        <div className="cta-final__card" data-reveal="scale">
          <span className="eyebrow cta-final__eyebrow">Parlons-en</span>
          <h2 className="cta-final__title">
            Prêt à lancer vos pubs{' '}
            <span className="cta-final__title-italic">au résultat ?</span>
          </h2>
          <p className="cta-final__desc">
            On audite votre offre, on définit la stratégie, on lance.
            Vous ne payez que si nos campagnes génèrent du CA.
          </p>
          <a
            href="https://calendly.com/expansionagency/30min?month=2026-04"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Réserver un audit gratuit
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 15 L15 5 M8 5 H15 V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </a>
          <span className="cta-final__reassurance">
            Gratuit · Sans engagement · 30 minutes
          </span>
        </div>
      </div>
    </section>
  )
}

export default CtaPub
