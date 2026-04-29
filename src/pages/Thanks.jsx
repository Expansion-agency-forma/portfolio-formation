import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const THANK_YOU_YOUTUBE_ID = 'pgJvzIeSPAc'

const PREPARE_ITEMS = [
  {
    title: 'Ajoutez le RDV à votre agenda',
    description:
      "Vérifiez que l'invitation Calendly est bien dans votre Google ou Apple Calendar. Activez les rappels pour être prêt 5 min avant.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Préparez vos chiffres clés',
    description:
      "CA actuel, panier moyen, budget pub envisagé, marge par client. Plus vous êtes précis, plus l'audit est utile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19V5M4 19h16M8 16V10M12 16V7M16 16v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Listez vos questions',
    description:
      'Notez ce que vous voulez clarifier sur la méthode, le pricing, les délais, les engagements. On y répond en direct.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 4h12a2 2 0 0 1 2 2v10l-4 4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 9h6M9 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '30 minutes au calme',
    description:
      'Webcam si possible, micro qui marche, dans un endroit sans coupures. On va parler stratégie, pas démarchage.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M17 10l4-2v8l-4-2v-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
]

// REMPLACER par les vraies ID YouTube de chaque vidéo de réponse
const FAQ_VIDEOS = [
  { question: "C'est quoi votre offre exactement ?", youtubeId: '' },
  { question: 'Combien de temps avant les premiers résultats ?', youtubeId: '' },
  { question: 'Quel budget minimum faut-il prévoir ?', youtubeId: '' },
  { question: 'Comment vous facturez ?', youtubeId: '' },
  { question: 'Pourquoi pas une agence classique ?', youtubeId: '' },
  { question: "Que se passe-t-il après l'appel ?", youtubeId: '' },
  { question: 'Comment vous mesurez la performance ?', youtubeId: '' },
]

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5 L19 12 L8 19 Z" />
    </svg>
  )
}

function FaqVideoCard({ item, isPlaying, onPlay }) {
  const initial = item.question.slice(0, 1).toUpperCase()
  return (
    <article className="thanks-faq__card" data-reveal>
      <h3 className="thanks-faq__question">{item.question}</h3>

      <div className="thanks-faq__media vtestimonial">
        {isPlaying && item.youtubeId ? (
          <iframe
            className="vtestimonial__iframe"
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={item.question}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            {item.youtubeId ? (
              <img
                className="vtestimonial__thumb"
                src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                alt={`Miniature ${item.question}`}
                onError={(e) => {
                  if (!e.currentTarget.dataset.fallback) {
                    e.currentTarget.dataset.fallback = '1'
                    e.currentTarget.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`
                  }
                }}
              />
            ) : (
              <div className="vtestimonial__placeholder" aria-hidden="true">
                <span className="vtestimonial__initials">{initial}</span>
              </div>
            )}
            <button
              type="button"
              className="vtestimonial__play"
              onClick={() => item.youtubeId && onPlay()}
              aria-label={`Lire la réponse à : ${item.question}`}
              disabled={!item.youtubeId}
            >
              <PlayIcon />
            </button>
            {!item.youtubeId && (
              <span className="thanks-faq__soon">Vidéo bientôt disponible</span>
            )}
          </>
        )}
      </div>
    </article>
  )
}

function Thanks() {
  const [playingIdx, setPlayingIdx] = useState(null)
  const [heroPlaying, setHeroPlaying] = useState(false)
  const titleSetRef = useRef(false)

  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Merci — Expansion Agency'

    let robots = document.querySelector('meta[name="robots"]')
    let createdRobots = false
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
      createdRobots = true
    }
    const prevRobotsContent = robots.getAttribute('content')
    robots.setAttribute('content', 'noindex, nofollow, noarchive')
    titleSetRef.current = true

    return () => {
      document.title = prevTitle
      if (createdRobots) {
        robots.remove()
      } else if (prevRobotsContent !== null) {
        robots.setAttribute('content', prevRobotsContent)
      } else {
        robots.removeAttribute('content')
      }
    }
  }, [])

  return (
    <>
      <Navbar
        items={[]}
        crossLink={{ to: '/', label: 'Accueil' }}
        cta={{
          href: 'https://www.instagram.com/nathanael_dhs',
          label: 'Suivre sur Instagram',
        }}
      />
      <main className="thanks">
        <section className="thanks-hero" id="top">
          <div className="thanks-hero__inner">
            <span className="eyebrow" data-reveal>
              Rendez-vous confirmé
            </span>
            <h1 className="thanks-hero__title" data-reveal style={{ '--reveal-delay': '120ms' }}>
              Merci d&apos;avoir{' '}
              <span className="hero__title-italic">réservé votre appel</span>
            </h1>
            <p className="thanks-hero__desc" data-reveal style={{ '--reveal-delay': '220ms' }}>
              Avant qu&apos;on se parle, prenez 2 minutes pour regarder ce
              message — j&apos;y explique comment on aborde l&apos;appel, ce
              que vous allez en retirer, et ce qu&apos;on attend de vous.
            </p>

            <div
              className="thanks-hero__video"
              data-reveal="fade"
              style={{ '--reveal-delay': '320ms' }}
            >
              {heroPlaying && THANK_YOU_YOUTUBE_ID ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${THANK_YOU_YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="Message de bienvenue — Expansion Agency"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  className="thanks-hero__video-trigger"
                  onClick={() => THANK_YOU_YOUTUBE_ID && setHeroPlaying(true)}
                  aria-label="Lire le message de bienvenue"
                  disabled={!THANK_YOU_YOUTUBE_ID}
                >
                  {THANK_YOU_YOUTUBE_ID ? (
                    <img
                      src={`https://img.youtube.com/vi/${THANK_YOU_YOUTUBE_ID}/maxresdefault.jpg`}
                      alt=""
                      onError={(e) => {
                        if (!e.currentTarget.dataset.fallback) {
                          e.currentTarget.dataset.fallback = '1'
                          e.currentTarget.src = `https://img.youtube.com/vi/${THANK_YOU_YOUTUBE_ID}/hqdefault.jpg`
                        }
                      }}
                    />
                  ) : (
                    <div className="thanks-hero__video-placeholder">
                      Vidéo bientôt disponible
                    </div>
                  )}
                  <span className="thanks-hero__video-play">
                    <PlayIcon />
                  </span>
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="thanks-prepare">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Avant qu&apos;on se voie</span>
            <h2 className="section-head__title">
              Préparez{' '}
              <span className="section-head__title-italic">l&apos;appel en 4 minutes</span>
            </h2>
            <p className="section-head__subtitle">
              Quatre choses à cocher pour qu&apos;on tire le maximum des 30 min.
            </p>
          </div>

          <div className="thanks-prepare__grid">
            {PREPARE_ITEMS.map((item, i) => (
              <article
                key={item.title}
                className="thanks-prepare__card"
                data-reveal
                style={{ '--reveal-delay': `${i * 90}ms` }}
              >
                <span className="thanks-prepare__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="thanks-prepare__body">
                  <h3 className="thanks-prepare__title">{item.title}</h3>
                  <p className="thanks-prepare__desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="thanks-faq">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Questions fréquentes</span>
            <h2 className="section-head__title">
              Vos questions,{' '}
              <span className="section-head__title-italic">en vidéo</span>
            </h2>
            <p className="section-head__subtitle">
              30 secondes par réponse, pas de blabla. Cliquez sur la vidéo pour
              lancer la lecture.
            </p>
          </div>

          <div className="thanks-faq__inner">
            <div className="thanks-faq__grid">
              {FAQ_VIDEOS.map((item, idx) => (
                <FaqVideoCard
                  key={item.question}
                  item={item}
                  isPlaying={playingIdx === idx}
                  onPlay={() => setPlayingIdx(idx)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Thanks
