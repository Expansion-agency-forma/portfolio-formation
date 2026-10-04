// Choix de l'internaute sur les cookies de mesure et de publicité.
// Rien n'est chargé (Google Analytics, pixel Meta) tant que ce choix n'a pas été fait.

const CLE = 'expansion-consentement'
const VERSION = 1
// La CNIL recommande de redemander le choix au bout de 6 mois.
const DUREE_MS = 1000 * 60 * 60 * 24 * 182

const EVT_CHANGE = 'expansion:consentement'
const EVT_OUVRIR = 'expansion:preferences-cookies'

export function lireConsentement() {
  if (typeof window === 'undefined') return null
  try {
    const brut = window.localStorage.getItem(CLE)
    if (!brut) return null
    const choix = JSON.parse(brut)
    if (choix.version !== VERSION || Date.now() - choix.date > DUREE_MS) return null
    return choix
  } catch {
    return null
  }
}

export function enregistrerConsentement({ mesure, publicite }) {
  const choix = { version: VERSION, date: Date.now(), mesure: Boolean(mesure), publicite: Boolean(publicite) }
  try {
    window.localStorage.setItem(CLE, JSON.stringify(choix))
  } catch {
    /* navigation privée : le choix vaut pour la page en cours */
  }
  window.dispatchEvent(new CustomEvent(EVT_CHANGE, { detail: choix }))
  return choix
}

export function surConsentement(rappel) {
  const ecouteur = (e) => rappel(e.detail)
  window.addEventListener(EVT_CHANGE, ecouteur)
  return () => window.removeEventListener(EVT_CHANGE, ecouteur)
}

// Rouvre le panneau de choix (lien « Gérer les cookies » du pied de page).
export function ouvrirPreferencesCookies() {
  window.dispatchEvent(new Event(EVT_OUVRIR))
}

export function surOuverturePreferences(rappel) {
  window.addEventListener(EVT_OUVRIR, rappel)
  return () => window.removeEventListener(EVT_OUVRIR, rappel)
}
