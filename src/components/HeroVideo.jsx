import { useState } from 'react'

// Vidéo de présentation de l'offre Expansion (master 16:9), hébergée sur YouTube.
const VIDEO = {
  youtubeId: 'fRIjNmgk0hE',
  title: 'Organismes de formation : créez votre formation en ligne et attirez des élèves',
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5 L19 12 L8 19 Z" />
    </svg>
  )
}

function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="hero-video" aria-label="Vidéo de présentation">
      <div className="hero-video__frame" data-reveal="fade" style={{ '--reveal-delay': '480ms' }}>
        {isPlaying ? (
          <iframe
            className="hero-video__iframe"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={VIDEO.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="hero-video__poster"
            onClick={() => setIsPlaying(true)}
            aria-label={`Lire la vidéo : ${VIDEO.title}`}
          >
            <img
              className="hero-video__thumb"
              src={`https://img.youtube.com/vi/${VIDEO.youtubeId}/maxresdefault.jpg`}
              alt=""
              loading="eager"
              onError={(e) => {
                if (!e.currentTarget.dataset.fallback) {
                  e.currentTarget.dataset.fallback = '1'
                  e.currentTarget.src = `https://img.youtube.com/vi/${VIDEO.youtubeId}/hqdefault.jpg`
                }
              }}
            />
            <span className="hero-video__play" aria-hidden="true">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>
    </section>
  )
}

export default HeroVideo
