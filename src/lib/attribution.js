// Source de trafic de la visite : d'où vient l'internaute (IA, Google, réseaux, pub…).
// Calculée une seule fois à l'arrivée sur le site, gardée pour la session seulement,
// puis transmise à Google Analytics, aux rendez-vous Calendly et aux leads du simulateur.
import { evenementGA } from './analytics'

const CLE = 'expansion-source'

// Assistants IA : nom affiché ← domaine du site d'origine ou valeur de utm_source.
const IA = [
  [/chatgpt\.com|chat\.openai\.com|openai\.com/, 'ChatGPT'],
  [/perplexity\.ai/, 'Perplexity'],
  [/gemini\.google\.com|bard\.google\.com/, 'Gemini'],
  [/copilot\.microsoft\.com|copilot\.cloud\.microsoft/, 'Copilot'],
  [/claude\.ai/, 'Claude'],
  [/chat\.mistral\.ai/, 'Mistral'],
  [/deepseek\.com/, 'DeepSeek'],
  [/meta\.ai/, 'Meta AI'],
  [/poe\.com/, 'Poe'],
  [/you\.com/, 'You.com'],
  [/grok\.com|x\.ai/, 'Grok'],
]
const RECHERCHE = [
  [/google\./, 'Google'],
  [/bing\.com/, 'Bing'],
  [/duckduckgo\.com/, 'DuckDuckGo'],
  [/qwant\.com/, 'Qwant'],
  [/ecosia\.org/, 'Ecosia'],
  [/yahoo\./, 'Yahoo'],
]
const SOCIAL = [
  [/facebook\.com|fb\.com/, 'Facebook'],
  [/instagram\.com/, 'Instagram'],
  [/tiktok\.com/, 'TikTok'],
  [/linkedin\.com|lnkd\.in/, 'LinkedIn'],
  [/youtube\.com|youtu\.be/, 'YouTube'],
  [/snapchat\.com/, 'Snapchat'],
  [/(^|\.)x\.com|twitter\.com|t\.co$/, 'X'],
  [/pinterest\./, 'Pinterest'],
]

function chercher(liste, valeur) {
  const trouve = liste.find(([motif]) => motif.test(valeur))
  return trouve ? trouve[1] : null
}

function hoteDe(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

// Classe la visite : { canal, outil, libelle, page }.
export function calculerSource(url = window.location.href, referent = document.referrer) {
  const params = new URL(url).searchParams
  const utmSource = (params.get('utm_source') || '').toLowerCase()
  const utmMedium = (params.get('utm_medium') || '').toLowerCase()
  const hote = hoteDe(referent)
  const page = new URL(url).pathname

  // 1. Assistants IA (ChatGPT ajoute souvent utm_source=chatgpt.com à ses liens).
  const ia = chercher(IA, utmSource) || chercher(IA, hote)
  if (ia) return { canal: 'ia', outil: ia, libelle: `IA – ${ia}`, page }

  // 2. Publicité payante.
  const payant = /cpc|ppc|paid|ads?$|social_paid|paidsocial/.test(utmMedium)
  if (params.has('fbclid') && payant) return { canal: 'pub', outil: 'Meta', libelle: 'Pub – Meta', page }
  if (params.has('gclid') || params.has('gbraid') || params.has('wbraid'))
    return { canal: 'pub', outil: 'Google Ads', libelle: 'Pub – Google Ads', page }
  if (params.has('ttclid')) return { canal: 'pub', outil: 'TikTok', libelle: 'Pub – TikTok', page }
  if (payant) {
    const nom = utmSource || 'inconnue'
    return { canal: 'pub', outil: nom, libelle: `Pub – ${nom}`, page }
  }

  // 3. Lien de campagne non payant (e-mail, réseaux…).
  if (utmSource) {
    const canal = utmMedium === 'email' ? 'email' : 'campagne'
    return { canal, outil: utmSource, libelle: `${canal === 'email' ? 'E-mail' : 'Campagne'} – ${utmSource}`, page }
  }

  // 4. Site d'origine.
  if (hote && !/expansion-agency\.com$/.test(hote)) {
    const moteur = chercher(RECHERCHE, hote)
    if (moteur) return { canal: 'recherche', outil: moteur, libelle: `Recherche – ${moteur}`, page }
    const reseau = chercher(SOCIAL, hote)
    if (reseau) return { canal: 'social', outil: reseau, libelle: `Réseaux – ${reseau}`, page }
    return { canal: 'site', outil: hote, libelle: `Site – ${hote}`, page }
  }

  return { canal: 'direct', outil: 'direct', libelle: 'Direct', page }
}

let enMemoire = null

// À appeler une fois au chargement : garde la source de la première page de la session.
export function initialiserSource() {
  if (typeof window === 'undefined') return null
  try {
    const deja = window.sessionStorage.getItem(CLE)
    if (deja) {
      enMemoire = JSON.parse(deja)
      return enMemoire
    }
  } catch {
    /* stockage indisponible */
  }
  enMemoire = calculerSource()
  try {
    window.sessionStorage.setItem(CLE, JSON.stringify(enMemoire))
  } catch {
    /* on garde la source en mémoire */
  }
  // Événement GA dédié aux visites venues d'une IA (envoyé seulement après accord cookies).
  if (enMemoire.canal === 'ia') {
    evenementGA('visite_ia', { ia_source: enMemoire.outil, page_arrivee: enMemoire.page })
  }
  return enMemoire
}

export function lireSource() {
  if (enMemoire) return enMemoire
  if (typeof window === 'undefined') return null
  try {
    enMemoire = JSON.parse(window.sessionStorage.getItem(CLE)) || null
  } catch {
    enMemoire = null
  }
  return enMemoire
}

// Ajoute la source aux liens Calendly : elle apparaît dans le détail de chaque rendez-vous
// (champs UTM de Calendly). Les paramètres déjà présents ne sont pas écrasés.
export function ajouterSourceCalendly(lien) {
  const source = lireSource()
  if (!source) return lien
  try {
    const url = new URL(lien)
    if (!/calendly\.com$/.test(url.hostname)) return lien
    const valeurs = {
      utm_source: source.outil,
      utm_medium: source.canal,
      utm_campaign: 'site-expansion',
      utm_content: source.page,
    }
    Object.entries(valeurs).forEach(([cle, valeur]) => {
      if (valeur && !url.searchParams.has(cle)) url.searchParams.set(cle, valeur)
    })
    return url.toString()
  } catch {
    return lien
  }
}

// Réécrit à la volée tous les liens Calendly cliqués sur le site.
export function suivreClicsCalendly() {
  const surClic = (e) => {
    const lien = e.target.closest?.('a[href*="calendly.com"]')
    if (!lien) return
    lien.href = ajouterSourceCalendly(lien.href)
    const source = lireSource()
    evenementGA('clic_calendly', {
      canal_source: source?.canal || '',
      outil_source: source?.outil || '',
    })
  }
  document.addEventListener('click', surClic, true)
  return () => document.removeEventListener('click', surClic, true)
}
