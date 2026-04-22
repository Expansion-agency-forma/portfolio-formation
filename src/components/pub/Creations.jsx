import { useRef, useState } from 'react'

const CREATIONS = [
  { key: 'c1', title: 'CPL 3€', meta: 'Campagne lead gen', youtubeId: 'Zh10NzkmmO0' },
  { key: 'c2', title: 'CPL 4€', meta: 'Campagne lead gen', youtubeId: '0tGUPl02AVc' },
  { key: 'c3', title: 'CPL 5€', meta: 'Campagne lead gen', youtubeId: 'OoMDuO_1r5Y' },
  { key: 'c4', title: 'CPL 6€', meta: 'Campagne lead gen', youtubeId: 'G4m41KGB86w' },
  { key: 'c5', title: 'CPL 9€', meta: 'Campagne solaire', youtubeId: 'X00KllReGko' },
]

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5 L19 12 L8 19 Z" />
    </svg>
  )
}

function Creations() {
  const [playingKey, setPlayingKey] = useState(null)
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    if (!trackRef.current) return
    const firstSlide = trackRef.current.querySelector('.creation-slide')
    if (!firstSlide) return
    const slideWidth = firstSlide.offsetWidth
    const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 16
    trackRef.current.scrollBy({
      left: (slideWidth + gap) * direction,
      behavior: 'smooth',
    })
  }

  const goPrev = () => {
    setPlayingKey(null)
    scrollByCard(-1)
  }
  const goNext = () => {
    setPlayingKey(null)
    scrollByCard(1)
  }

  return (
    <section id="creations" className="creations">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Campagnes</span>
        <h2 className="section-head__title">
          Nos créas{' '}
          <span className="section-head__title-italic">en action</span>
        </h2>
        <p className="section-head__subtitle">
          Exemples de créas vidéo verticales produites et lancées pour nos clients.
        </p>
      </div>

      <div className="creations__inner">
        <div className="creations__track-wrapper" data-reveal="fade">
          <div className="creations__track" ref={trackRef}>
            {CREATIONS.map((c) => {
              const isPlaying = playingKey === c.key
              return (
                <div key={c.key} className="creation-slide">
                  {isPlaying ? (
                    <iframe
                      className="creation-slide__iframe"
                      src={`https://www.youtube-nocookie.com/embed/${c.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title={c.title}
                      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        className="creation-slide__thumb"
                        src={`https://img.youtube.com/vi/${c.youtubeId}/maxresdefault.jpg`}
                        alt={c.title}
                        loading="lazy"
                        onError={(e) => {
                          if (!e.currentTarget.dataset.fallback) {
                            e.currentTarget.dataset.fallback = '1'
                            e.currentTarget.src = `https://img.youtube.com/vi/${c.youtubeId}/hqdefault.jpg`
                          }
                        }}
                      />
                      <button
                        type="button"
                        className="creation-slide__play"
                        onClick={() => setPlayingKey(c.key)}
                        aria-label={`Lire ${c.title}`}
                      >
                        <PlayIcon />
                      </button>
                      <div className="creation-slide__caption">
                        <span className="creation-slide__title">{c.title}</span>
                        <span className="creation-slide__meta">{c.meta}</span>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="creations__nav">
          <button
            type="button"
            className="creations__nav-btn"
            onClick={goPrev}
            aria-label="Créa précédente"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 6 L9 12 L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className="creations__nav-btn"
            onClick={goNext}
            aria-label="Créa suivante"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6 L15 12 L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Creations
