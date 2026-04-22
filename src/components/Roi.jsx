import { useMemo, useState } from 'react'

const INVESTMENT = 2500
const MIN_PRICE = 100
const MAX_PRICE = 2000
const STEP = 100

function Roi() {
  const [price, setPrice] = useState(500)

  const formations = useMemo(
    () => Math.max(1, Math.ceil(INVESTMENT / price)),
    [price],
  )

  const progress = ((price - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100

  return (
    <section id="rentabilite" className="roi">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Votre rentabilité</span>
        <h2 className="section-head__title">
          Combien de formations{' '}
          <span className="section-head__title-italic">pour être rentable&nbsp;?</span>
        </h2>
        <p className="section-head__subtitle">
          Déplacez le curseur pour choisir votre prix de vente. On vous dit
          combien de formations vous devez vendre pour rentabiliser votre
          investissement.
        </p>
      </div>

      <div className="roi__inner">
        <div className="roi__card" data-reveal="fade">
          <div className="roi__price-block">
            <span className="roi__price-label">Prix de votre formation</span>
            <div className="roi__price-value">
              <span className="roi__price-amount">{price.toLocaleString('fr-FR')}</span>
              <span className="roi__price-currency">€</span>
            </div>
          </div>

          <div className="roi__slider-wrapper">
            <input
              type="range"
              className="roi__slider"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={STEP}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              style={{ '--progress': `${progress}%` }}
              aria-label="Prix de votre formation"
            />
            <div className="roi__slider-ticks" aria-hidden="true">
              <span>{MIN_PRICE}€</span>
              <span>{MAX_PRICE.toLocaleString('fr-FR')}€</span>
            </div>
          </div>

          <div className="roi__result">
            <span className="roi__result-intro">Il vous suffit de vendre</span>
            <div className="roi__result-number">
              <span className="roi__result-count">{formations}</span>
              <span className="roi__result-unit">
                formation{formations > 1 ? 's' : ''}
              </span>
            </div>
            <span className="roi__result-outro">
              pour rentabiliser votre investissement.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roi
