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

    const observer = new IntersectionObserver(
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

    // Observe first so the initial intersection microtask fires before paint
    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((el) => observer.observe(el))

    // Now hide the non-visible ones (already-intersecting elements will be marked visible synchronously by the observer)
    document.documentElement.classList.add(REVEAL_READY_CLASS)

    // Safety: force reveal everything after 1.5s if observer didn't fire for some reason
    const safetyTimer = window.setTimeout(revealAll, 1500)

    return () => {
      clearTimeout(safetyTimer)
      observer.disconnect()
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
      { threshold: 0.2 }
    )

    counters.forEach((el) => {
      el.textContent = '0'
      observer.observe(el)
    })

    // Safety: force final values after 2.5s in case observer never fires (iOS Safari edge cases)
    const safetyTimer = window.setTimeout(() => {
      counters.forEach((el) => {
        el.textContent = el.dataset.counter
      })
    }, 2500)

    return () => {
      clearTimeout(safetyTimer)
      observer.disconnect()
    }
  }, [])
}
