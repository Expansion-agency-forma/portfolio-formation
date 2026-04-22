import { useEffect, useRef } from 'react'

const SCREENS = [
  'IMG_9333.jpg',
  'IMG_9334.jpg',
  'IMG_9335.jpg',
  'IMG_9336.jpg',
  'IMG_9337.jpg',
  'IMG_9339.jpg',
  'IMG_9340.jpg',
  'IMG_9341.jpg',
  'IMG_9342.jpg',
  'IMG_9343.jpg',
  'IMG_9344.jpg',
  'IMG_9345.jpg',
  'IMG_9346.jpg',
  'IMG_9347.jpg',
  'IMG_9348.jpg',
  'IMG_9349.jpg',
  'IMG_9350.jpg',
]

const COLUMNS = [
  SCREENS.filter((_, i) => i % 3 === 0),
  SCREENS.filter((_, i) => i % 3 === 1),
  SCREENS.filter((_, i) => i % 3 === 2),
]

function ScrollColumn({ items, direction, speed = 40 }) {
  const trackRef = useRef(null)
  const frameRef = useRef(null)
  const offsetRef = useRef(0)
  const pausedRef = useRef(false)
  const lastTsRef = useRef(null)

  const loop = [...items, ...items]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const step = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts
      const dt = ts - lastTsRef.current
      lastTsRef.current = ts

      if (!pausedRef.current) {
        const half = track.scrollHeight / 2
        if (half > 0) {
          const delta = (speed * dt) / 1000
          offsetRef.current += direction === 'up' ? delta : -delta
          if (offsetRef.current <= -half) offsetRef.current += half
          if (offsetRef.current >= 0) offsetRef.current -= half
          track.style.transform = `translate3d(0, ${offsetRef.current}px, 0)`
        }
      }
      frameRef.current = requestAnimationFrame(step)
    }

    frameRef.current = requestAnimationFrame(step)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      lastTsRef.current = null
    }
  }, [direction, speed])

  return (
    <div
      className={`results-col results-col--${direction}`}
      onMouseEnter={() => {
        pausedRef.current = true
      }}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
    >
      <div className="results-col__track" ref={trackRef}>
        {loop.map((src, i) => (
          <figure key={`${src}-${i}`} className="results-card">
            <img
              src={`/screens-ads/${src}`}
              alt="Statistiques de campagne publicitaire"
            />
          </figure>
        ))}
      </div>
    </div>
  )
}

function ResultsScrollPub() {
  return (
    <section id="resultats" className="results-scroll">
      <div className="section-head" data-reveal>
        <span className="eyebrow">Résultats réels</span>
        <h2 className="section-head__title">
          Les chiffres{' '}
          <span className="section-head__title-italic">de nos campagnes</span>
        </h2>
        <p className="section-head__subtitle">
          Des captures directes des comptes publicitaires de nos clients. ROAS, CPL, volume de leads — tout est vérifiable.
        </p>
      </div>

      <div className="results-scroll__inner" data-reveal="fade">
        <div className="results-scroll__grid" aria-hidden="true">
          <ScrollColumn items={COLUMNS[0]} direction="down" speed={38} />
          <ScrollColumn items={COLUMNS[1]} direction="up" speed={42} />
          <ScrollColumn items={COLUMNS[2]} direction="down" speed={36} />
        </div>
      </div>
    </section>
  )
}

export default ResultsScrollPub
