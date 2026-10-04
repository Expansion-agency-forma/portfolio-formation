// Pixel Meta — renseigner l'identifiant pour activer la mesure.
// Tant qu'il est vide, toutes les fonctions ci-dessous ne font rien et le bandeau cookies
// ne propose pas la catégorie « Publicité ».
// Le pixel ne se charge qu'après accord de l'internaute (catégorie « Publicité »).
import { lireConsentement } from './consentement'
import { supprimerCookies } from './analytics'

export const PIXEL_ID = ''

const HOTES = ['www.expansion-agency.com', 'expansion-agency.com']

let initialise = false
let actif = false

function autorise() {
  return (
    Boolean(PIXEL_ID) &&
    typeof window !== 'undefined' &&
    HOTES.includes(window.location.hostname) &&
    Boolean(lireConsentement()?.publicite)
  )
}

export function initPixel() {
  if (!autorise()) return
  if (initialise) {
    if (!actif) {
      window.fbq('consent', 'grant')
      actif = true
    }
    return
  }
  initialise = true
  actif = true

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

export function desactiverPixel() {
  if (typeof window === 'undefined') return
  if (initialise && actif) window.fbq('consent', 'revoke')
  actif = false
  supprimerCookies(/^_fb[pc]$/)
}

// Page vue lors d'une navigation interne (la première est envoyée par initPixel).
export function pageVuePixel() {
  if (!actif || !window.fbq) return
  window.fbq('track', 'PageView')
}

export function track(evenement, params) {
  if (!actif || !window.fbq) return
  window.fbq('track', evenement, params)
}

export function trackCustom(evenement, params) {
  if (!actif || !window.fbq) return
  window.fbq('trackCustom', evenement, params)
}
