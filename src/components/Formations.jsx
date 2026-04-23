import { useEffect, useState } from 'react'

const FORMATIONS = [
  { key: 'prothesie', title: 'Prothésie ongulaire', category: 'Beauté', youtubeId: 'Xb462FbfVuE' },
  { key: 'rehaussement', title: 'Rehaussement de cils', category: 'Beauté', youtubeId: 'tXZSF4mTKMQ' },
  { key: 'headspa', title: 'Head spa', category: 'Bien-être', youtubeId: 'fSL5LHJmxrk' },
  { key: 'parebrise', title: 'Remplacement de pare-brise', category: 'Automobile', youtubeId: '-hQ9Zt9OKL8' },
  { key: 'cils', title: 'Extensions de cils', category: 'Beauté', youtubeId: 'IAHEIGquzNk' },
  { key: 'browlift', title: 'Browlift', category: 'Beauté', youtubeId: 'RguqLvvj8BY' },
  { key: 'blanchiment', title: 'Blanchiment dentaire', category: 'Santé', youtubeId: 'f0bu068Hx-k' },
  { key: 'pieceauto', title: 'Magasin pièce auto', category: 'Automobile', youtubeId: 'FWXRC72DbnU' },
]

function getSlideClass(index, activeIndex, total) {
  if (index === activeIndex) return 'carousel-slide--active'
  let offset = index - activeIndex
  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total
  if (offset === -1) return 'carousel-slide--prev'
  if (offset === 1) return 'carousel-slide--next'
  return 'carousel-slide--hidden'
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5 L19 12 L8 19 Z" />
    </svg>
  )
}

function Formations() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [playingIndex, setPlayingIndex] = useState(null)
  const total = FORMATIONS.length
  const active = FORMATIONS[activeIndex]

  useEffect(() => {
    setPlayingIndex(null)
  }, [activeIndex])

  const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total)
  const goNext = () => setActiveIndex((i) => (i + 1) % total)

  return (
    <section id="formations" className="formations">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Réalisations</span>
        <h2 className="section-head__title">
          Nos formations{' '}
          <span className="section-head__title-italic">digitalisées</span>
        </h2>
        <p className="section-head__subtitle">
          Un aperçu des formations tournées, montées et mises en ligne pour nos clients.
        </p>
      </div>

      <div className="formations__carousel" data-reveal="fade" style={{ '--reveal-delay': '100ms' }}>
        <button
          type="button"
          className="carousel-nav carousel-nav--prev"
          onClick={goPrev}
          aria-label="Formation précédente"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6 L9 12 L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="carousel-stage">
          {FORMATIONS.map((f, i) => {
            const slideClass = getSlideClass(i, activeIndex, total)
            const isActive = i === activeIndex
            const isPlaying = playingIndex === i

            return (
              <div
                key={f.key}
                className={`carousel-slide ${slideClass}`}
                onClick={() => {
                  if (!isActive) setActiveIndex(i)
                }}
                aria-current={isActive ? 'true' : undefined}
              >
                {isPlaying ? (
                  <iframe
                    className="carousel-slide__iframe"
                    src={`https://www.youtube-nocookie.com/embed/${f.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={f.title}
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      className="carousel-slide__thumb"
                      src={`https://img.youtube.com/vi/${f.youtubeId}/maxresdefault.jpg`}
                      alt={f.title}
                      loading="lazy"
                      onError={(e) => {
                        if (!e.currentTarget.dataset.fallback) {
                          e.currentTarget.dataset.fallback = '1'
                          e.currentTarget.src = `https://img.youtube.com/vi/${f.youtubeId}/hqdefault.jpg`
                        }
                      }}
                    />
                    {isActive && (
                      <button
                        type="button"
                        className="carousel-slide__play"
                        onClick={(e) => {
                          e.stopPropagation()
                          setPlayingIndex(i)
                        }}
                        aria-label={`Lire ${f.title}`}
                      >
                        <PlayIcon />
                      </button>
                    )}
                  </>
                )}
              </div>
            )
          })}
        </div>

        <button
          type="button"
          className="carousel-nav carousel-nav--next"
          onClick={goNext}
          aria-label="Formation suivante"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6 L15 12 L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="carousel-caption" data-reveal="fade">
        <h3 className="carousel-caption__title">{active.title}</h3>
        <p className="carousel-caption__meta">{active.category}</p>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Sélecteur de formation" data-reveal="fade">
        {FORMATIONS.map((f, i) => (
          <button
            key={f.key}
            type="button"
            role="tab"
            className={`carousel-dot${i === activeIndex ? ' carousel-dot--active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Voir ${f.title}`}
            aria-selected={i === activeIndex}
          />
        ))}
      </div>
    </section>
  )
}

export default Formations
