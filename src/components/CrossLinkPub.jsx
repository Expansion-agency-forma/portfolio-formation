import { Link } from 'react-router-dom'

function CrossLinkPub() {
  return (
    <section className="cross-link">
      <div className="cross-link__inner">
        <div className="cross-link__card" data-reveal>
          <div className="cross-link__content">
            <span className="eyebrow">Vous voulez des élèves ?</span>
            <h2 className="cross-link__title">
              Votre formation est prête. Il ne reste plus{' '}
              <span className="section-head__title-italic">qu'à la vendre.</span>
            </h2>
            <p className="cross-link__desc">
              Notre équipe lance vos campagnes Meta, TikTok, YouTube et Snapchat.
              Vous nous payez <strong>10 à 20% du CA généré</strong> — zéro frais
              fixe, zéro risque.
            </p>
            <Link to="/publicite" className="btn btn--primary cross-link__cta">
              Je veux promouvoir ma formation
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M5 15 L15 5 M8 5 H15 V12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>

          <div className="cross-link__visual" aria-hidden="true">
            <div className="cross-link__chip cross-link__chip--meta">Meta Ads</div>
            <div className="cross-link__chip cross-link__chip--tiktok">TikTok Ads</div>
            <div className="cross-link__chip cross-link__chip--yt">YouTube Ads</div>
            <div className="cross-link__chip cross-link__chip--snap">Snapchat</div>
            <div className="cross-link__big-stat">
              <span className="cross-link__big-stat-pct">10–20<small>%</small></span>
              <span className="cross-link__big-stat-label">du CA généré</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CrossLinkPub
