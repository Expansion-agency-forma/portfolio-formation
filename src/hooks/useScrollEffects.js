import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const REVEAL_READY_CLASS = 'reveal-ready'

/**
 * Reveals elements with [data-reveal] when they enter viewport.
 * Re-observes on route change so newly-rendered pages animate in.
 */
export function useRevealOnScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const revealAll = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.classList.add('is-visible')
      })
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !('IntersectionObserver' in window)) {
      document.documentElement.classList.add(REVEAL_READY_CLASS)
      revealAll()
      return
    }

    // New route = fresh DOM: reset any leftover is-visible on elements that
    // haven't been seen yet so the animation plays cleanly. Wait one frame so
    // the new route's elements are in the DOM before we query.
    let observer
    let safetyTimer
    const raf = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -5% 0px',
        }
      )

      document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
      document.documentElement.classList.add(REVEAL_READY_CLASS)

      safetyTimer = window.setTimeout(revealAll, 1500)
    })

    return () => {
      cancelAnimationFrame(raf)
      if (safetyTimer) clearTimeout(safetyTimer)
      if (observer) observer.disconnect()
    }
  }, [pathname])
}

/**
 * Animates [data-counter="TARGET"] elements from 0 to target when visible.
 */
export function useCounterAnimation() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return

    let observer
    let safetyTimer
    const raf = requestAnimationFrame(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const counters = document.querySelectorAll('[data-counter]')

      if (prefersReduced) {
        counters.forEach((el) => {
          el.textContent = el.dataset.counter
        })
        return
      }

      const animate = (el) => {
        const target = parseFloat(el.dataset.counter)
        const duration = parseInt(el.dataset.duration || '1400', 10)
        const start = performance.now()

        function step(now) {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const value = Math.floor(target * eased)
          el.textContent = value
          if (progress < 1) {
            requestAnimationFrame(step)
          } else {
            el.textContent = target
          }
        }
        requestAnimationFrame(step)
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(entry.target)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 }
      )

      counters.forEach((el) => {
        el.textContent = '0'
        observer.observe(el)
      })

      safetyTimer = window.setTimeout(() => {
        counters.forEach((el) => {
          el.textContent = el.dataset.counter
        })
      }, 2500)
    })

    return () => {
      cancelAnimationFrame(raf)
      if (safetyTimer) clearTimeout(safetyTimer)
      if (observer) observer.disconnect()
    }
  }, [pathname])
}
