// Google Analytics 4 — chargé uniquement après accord de l'internaute (bandeau cookies)
// et uniquement sur le domaine de production, pour ne pas fausser les chiffres.
export const GA_ID = 'G-VW23N5Q13B'

const HOTES = ['www.expansion-agency.com', 'expansion-agency.com']
// 13 mois maximum pour le cookie, comme le recommande la CNIL.
const DUREE_COOKIE_S = 60 * 60 * 24 * 395

let charge = false
let actif = false
let derniereUrl = null
// Événements survenus avant le choix de l'internaute : envoyés seulement s'il accepte ensuite.
let fileAttente = []
// Paramètres de campagne de la page d'arrivée, au cas où l'accord est donné après une navigation.
const ARRIVEE = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
const CAMPAGNE = {
  utm_source: 'campaign_source',
  utm_medium: 'campaign_medium',
  utm_campaign: 'campaign_name',
  utm_content: 'campaign_content',
  utm_term: 'campaign_term',
}
let premierePage = true

function hoteAutorise() {
  return typeof window !== 'undefined' && HOTES.includes(window.location.hostname)
}

function gtag() {
  window.dataLayer.push(arguments)
}

export function activerAnalytics({ publicite = false } = {}) {
  if (!GA_ID || !hoteAutorise()) return
  window[`ga-disable-${GA_ID}`] = false
  actif = true

  if (!charge) {
    charge = true
    window.dataLayer = window.dataLayer || []
    window.gtag = gtag
    gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: publicite ? 'granted' : 'denied',
      ad_user_data: publicite ? 'granted' : 'denied',
      ad_personalization: publicite ? 'granted' : 'denied',
    })
    gtag('js', new Date())
    // Les pages vues sont envoyées à la main après chaque changement de page,
    // une fois le titre mis à jour (voir pageVue).
    gtag('config', GA_ID, {
      send_page_view: false,
      cookie_expires: DUREE_COOKIE_S,
      allow_google_signals: publicite,
    })
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(s)
  } else {
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: publicite ? 'granted' : 'denied',
      ad_user_data: publicite ? 'granted' : 'denied',
      ad_personalization: publicite ? 'granted' : 'denied',
    })
  }
  pageVue()
  const attente = fileAttente
  fileAttente = []
  attente.forEach(([nom, params]) => gtag('event', nom, params))
}

export function desactiverAnalytics() {
  if (typeof window === 'undefined') return
  window[`ga-disable-${GA_ID}`] = true
  if (charge) {
    gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
  }
  actif = false
  derniereUrl = null
  fileAttente = []
  supprimerCookies(/^_ga/)
}

// Une page vue par URL (les doublons d'un même rendu sont ignorés).
export function pageVue() {
  if (!actif) return
  const url = window.location.pathname + window.location.search
  if (url === derniereUrl) return
  derniereUrl = url
  const params = { page_location: window.location.href, page_title: document.title }
  if (premierePage) {
    premierePage = false
    const actuels = new URLSearchParams(window.location.search)
    if (ARRIVEE?.has('utm_source') && !actuels.has('utm_source')) {
      Object.entries(CAMPAGNE).forEach(([utm, cle]) => {
        if (ARRIVEE.get(utm)) params[cle] = ARRIVEE.get(utm)
      })
    }
  }
  gtag('event', 'page_view', params)
}

export function evenementGA(nom, params = {}) {
  if (!GA_ID || !hoteAutorise()) return
  if (!actif) {
    if (fileAttente.length < 30) fileAttente.push([nom, params])
    return
  }
  gtag('event', nom, params)
}

// Rendez-vous Calendly réservé : compté une seule fois par session
// (le widget du simulateur et la page /merci peuvent tous deux le signaler).
export function rdvReserve(source) {
  try {
    if (window.sessionStorage.getItem('expansion-rdv')) return
    window.sessionStorage.setItem('expansion-rdv', '1')
  } catch {
    /* ignore */
  }
  evenementGA('rdv_reserve', { source })
}

export function supprimerCookies(motif) {
  const hote = window.location.hostname
  const domaines = ['', hote, `.${hote}`, `.${hote.replace(/^www\./, '')}`]
  document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((nom) => motif.test(nom))
    .forEach((nom) => {
      domaines.forEach((d) => {
        document.cookie = `${nom}=; Max-Age=0; path=/${d ? `; domain=${d}` : ''}`
      })
    })
}
