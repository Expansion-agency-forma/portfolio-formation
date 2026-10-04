// Pixel Meta — renseigner l'identifiant pour activer la mesure.
// Tant qu'il est vide, toutes les fonctions ci-dessous ne font rien.
export const PIXEL_ID = ''

let initialise = false

export function initPixel() {
  if (!PIXEL_ID || initialise || typeof window === 'undefined') return
  initialise = true

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

  window.fbq('init', PIXEL_ID)
  window.fbq('track', 'PageView')
}

export function track(evenement, params) {
  if (!PIXEL_ID || typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', evenement, params)
}

export function trackCustom(evenement, params) {
  if (!PIXEL_ID || typeof window === 'undefined' || !window.fbq) return
  window.fbq('trackCustom', evenement, params)
}
