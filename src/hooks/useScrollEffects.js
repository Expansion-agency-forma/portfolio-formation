import { useEffect } from 'react'

const REVEAL_READY_CLASS = 'reveal-ready'

/**
 * Reveals elements with [data-reveal] when they enter viewport.
 * Progressive enhancement: if JS fails, elements stay visible (no hide).
 * Safety timer: if observer never fires, everything reveals after 4s.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Tell the CSS we're taking over (only now will data-reveal elements hide)
    document.documentElement.classList.add(REVEAL_READY_CLASS)

    const revealAll = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.classList.add('is-visible')
      })
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    let observer = null
    let safetyTimer = null

    const rafId = requestAnimationFrame(() => {
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

      const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)')
      elements.forEach((el) => observer.observe(el))

      // Safety: force reveal everything after 4s if observer somehow doesn't fire
      safetyTimer = window.setTimeout(revealAll, 4000)
    })

    return () => {
      cancelAnimationFrame(rafId)
      if (safetyTimer) clearTimeout(safetyTimer)
      if (observer) observer.disconnect()
    }
  }, [])
}

/**
 * Animates [data-counter="TARGET"] elements from 0 to target when visible.
 */
export function useCounterAnimation() {
  useEffect(() => {
    if (typeof window === 'undefined') return

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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    counters.forEach((el) => {
      el.textContent = '0'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
