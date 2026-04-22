import { useRef, useState } from 'react'

const TESTIMONIALS = [
  {
    key: 't1',
    name: 'Irma',
    role: '15 000€ générés le premier mois',
    initials: 'I',
    youtubeId: 'iDcBE3bxyv4',
  },
  {
    key: 't2',
    name: 'Lory',
    role: '13 000€ générés le premier mois',
    initials: 'L',
    youtubeId: 'GmsaBBN2c9g',
  },
  {
    key: 't3',
    name: 'Akim',
    role: '50 000€ de CA — son plus gros mois',
    initials: 'A',
    youtubeId: 'bf7OV7x3X8E',
  },
]

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5 L19 12 L8 19 Z" />
    </svg>
  )
}

function TestimonialsPub() {
  const [playingKey, setPlayingKey] = useState(null)
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    if (!trackRef.current) return
    const firstSlide = trackRef.current.querySelector('.vtestimonial')
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
    <section id="temoignages" className="vtestimonials">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Ils nous ont fait confiance</span>
        <h2 className="section-head__title">
          Ce qu'en{' '}
          <span className="section-head__title-italic">disent nos clients</span>
        </h2>
      </div>

      <div className="vtestimonials__inner">
        <div className="vtestimonials__track-wrapper" data-reveal="fade">
          <div className="vtestimonials__track" ref={trackRef}>
            {TESTIMONIALS.map((t) => {
              const isPlaying = playingKey === t.key && t.youtubeId
              return (
                <div key={t.key} className="vtestimonial">
                  {isPlaying ? (
                    <iframe
                      className="vtestimonial__iframe"
                      src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title={`Témoignage ${t.name}`}
                      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      {t.youtubeId ? (
                        <img
                          className="vtestimonial__thumb"
                          src={`https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg`}
                          alt={`Miniature témoignage ${t.name}`}
                          onError={(e) => {
                            if (!e.currentTarget.dataset.fallback) {
                              e.currentTarget.dataset.fallback = '1'
                              e.currentTarget.src = `https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`
                            }
                          }}
                        />
                      ) : (
                        <div className="vtestimonial__placeholder" aria-hidden="true">
                          <span className="vtestimonial__initials">{t.initials}</span>
                        </div>
                      )}
                      <button
                        type="button"
                        className="vtestimonial__play"
                        onClick={() => t.youtubeId && setPlayingKey(t.key)}
                        aria-label={`Lire le témoignage de ${t.name}`}
                        disabled={!t.youtubeId}
                      >
                        <PlayIcon />
                      </button>
                      <div className="vtestimonial__caption">
                        <span className="vtestimonial__name">{t.name}</span>
                        <span className="vtestimonial__role">{t.role}</span>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {TESTIMONIALS.length > 3 && (
          <div className="vtestimonials__nav">
            <button
              type="button"
              className="vtestimonials__nav-btn"
              onClick={goPrev}
              aria-label="Témoignage précédent"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 6 L9 12 L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="vtestimonials__nav-btn"
              onClick={goNext}
              aria-label="Témoignage suivant"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6 L15 12 L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default TestimonialsPub
