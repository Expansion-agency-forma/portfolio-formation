import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/simulateur.css'

// Vidéo de présentation de l'offre Expansion (master 16:9), hébergée sur YouTube.
// Les navigateurs n'autorisent la lecture automatique que sans le son :
// la vidéo démarre donc en muet, et un clic l'active avec le son depuis le début.
const VIDEO = {
  youtubeId: 'fRIjNmgk0hE',
  title: 'Organismes de formation : créez votre formation en ligne et attirez des élèves',
}

function SoundIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9.5 H7.5 L12 5.5 V18.5 L7.5 14.5 H4 Z" fill="currentColor" />
      <path
        d="M15.5 9 C16.6 10.1 16.6 13.9 15.5 15 M18 6.5 C20.4 8.9 20.4 15.1 18 17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HeroVideo() {
  const iframeRef = useRef(null)
  const [soundOn, setSoundOn] = useState(false)

  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const src =
    `https://www.youtube-nocookie.com/embed/${VIDEO.youtubeId}` +
    `?autoplay=1&mute=1&loop=1&playlist=${VIDEO.youtubeId}` +
    `&playsinline=1&rel=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(origin)}`

  const send = (func, args = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      '*'
    )
  }

  const enableSound = () => {
    send('seekTo', [0, true])
    send('unMute')
    send('setVolume', [100])
    send('playVideo')
    setSoundOn(true)
  }

  return (
    <section className="hero-video" aria-label="Vidéo de présentation">
      <div className="hero-video__frame" data-reveal="fade" style={{ '--reveal-delay': '480ms' }}>
        <iframe
          ref={iframeRef}
          className="hero-video__iframe"
          src={src}
          title={VIDEO.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
        {!soundOn && (
          <button
            type="button"
            className="hero-video__unmute"
            onClick={enableSound}
            aria-label="Activer le son et revoir la vidéo depuis le début"
          >
            <span className="hero-video__unmute-pill">
              <SoundIcon />
              Activer le son
            </span>
          </button>
        )}
      </div>

      <div className="hero-video__cta" data-reveal>
        <h2 className="hero-video__cta-titre">
          Calculez combien votre organisme de formation pourrait gagner{' '}
          <em>avec une formation en ligne</em>
        </h2>
        <p className="hero-video__cta-texte">
          Simulation gratuite basée sur vos vrais chiffres : élèves, abonnés, prix de vos formations.
        </p>
        <div className="hero-video__cta-boutons">
          <Link to="/simulateur" className="btn btn--primary">
            Calculer mon potentiel
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="https://calendly.com/expansionagency/appel-decouverte-formation-en-ligne-clone"
            target="_blank"
            rel="noreferrer"
            className="btn btn--secondary"
          >
            Réserver un appel
          </a>
        </div>
        <p className="simu-confiance">Gratuit · 1 minute · Résultat immédiat</p>
      </div>
    </section>
  )
}

export default HeroVideo
