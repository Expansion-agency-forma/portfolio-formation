// Simulateur de potentiel — formation en ligne pour organismes de formation.
// Toutes les hypothèses sont regroupées ici pour pouvoir être ajustées facilement.

export const CALENDLY_URL =
  'https://calendly.com/expansionagency/appel-decouverte-formation-en-ligne-clone'

// Adresse de réception des contacts (webhook Make). Vide = aucun envoi.
export const WEBHOOK_URL = 'https://hook.eu2.make.com/3u5g75qrb8f93xjnb5ujnkkplilz16ob'

export const INVESTISSEMENT_PAR_FORMATION = 2500
export const VIDEO_OFFRE_ID = 'fRIjNmgk0hE'

/* ------------------------------------------------------------------ */
/* Questions                                                           */
/* ------------------------------------------------------------------ */

export const ETAPES = ['Votre centre', 'Votre audience', 'Votre projet']

export const QUESTIONS = [
  {
    id: 'domaine',
    etape: 0,
    titre: 'Dans quel domaine formez-vous ?',
    options: [
      { value: 'beaute', label: 'Beauté, esthétique, ongles, cils' },
      { value: 'coiffure', label: 'Coiffure, barbier' },
      { value: 'sante', label: 'Santé, bien-être, massage' },
      { value: 'vtc', label: 'VTC, taxi, transport, sécurité' },
      { value: 'technique', label: 'Technique, BTP, artisanat' },
      { value: 'autre', label: 'Autre domaine' },
    ],
  },
  {
    id: 'role',
    etape: 0,
    titre: 'Vous êtes…',
    options: [
      { value: 'dirigeant', label: "Dirigeant(e) d'un centre de formation" },
      { value: 'independant', label: 'Formateur ou formatrice indépendant(e)' },
      { value: 'salarie', label: "Salarié(e) d'un centre de formation" },
      { value: 'autre', label: 'Autre' },
    ],
  },
  {
    id: 'prix',
    etape: 0,
    type: 'slider',
    titre: 'Combien coûte votre formation en présentiel ?',
    aide: 'Prix moyen payé par un élève',
    min: 100,
    max: 4000,
    step: 50,
    defaut: 900,
    inconnu: 'Je ne sais pas, ça dépend',
  },
  {
    id: 'eleves',
    etape: 0,
    titre: 'Combien d’élèves formez-vous par an en présentiel ?',
    options: [
      { value: 10, label: 'Moins de 20' },
      { value: 35, label: '20 à 50' },
      { value: 75, label: '50 à 100' },
      { value: 150, label: '100 à 200' },
      { value: 300, label: 'Plus de 200' },
      { value: 15, label: 'Je ne sais pas', inconnu: true },
    ],
  },
  {
    id: 'anciens',
    etape: 1,
    titre: 'Combien d’anciens élèves pouvez-vous recontacter ?',
    aide: 'Par email, WhatsApp, SMS ou Instagram',
    options: [
      { value: 15, label: 'Moins de 30' },
      { value: 60, label: '30 à 100' },
      { value: 200, label: '100 à 300' },
      { value: 600, label: '300 à 1 000' },
      { value: 1500, label: 'Plus de 1 000' },
      { value: 20, label: 'Je ne sais pas', inconnu: true },
    ],
  },
  {
    id: 'abonnes',
    etape: 1,
    titre: 'Combien d’abonnés avez-vous sur votre réseau principal ?',
    aide: 'Instagram, TikTok, Facebook ou YouTube',
    options: [
      { value: 500, label: 'Moins de 1 000' },
      { value: 3000, label: '1 000 à 5 000' },
      { value: 10000, label: '5 000 à 20 000' },
      { value: 30000, label: '20 000 à 50 000' },
      { value: 60000, label: 'Plus de 50 000' },
      { value: 300, label: 'Je ne sais pas / pas de réseaux', inconnu: true },
    ],
  },
  {
    id: 'existant',
    etape: 1,
    titre: 'Aujourd’hui, vous avez déjà…',
    options: [
      { value: 'rien', label: 'Rien en ligne pour l’instant' },
      { value: 'supports', label: 'Des vidéos ou des supports de cours' },
      { value: 'peu', label: 'Une formation en ligne qui se vend peu' },
      { value: 'bien', label: 'Une formation en ligne qui se vend bien' },
    ],
  },
  {
    id: 'formations',
    etape: 2,
    titre: 'Combien de formations souhaitez-vous digitaliser ?',
    options: [
      { value: 1, label: '1 formation' },
      { value: 2, label: '2 formations' },
      { value: 3, label: '3 formations' },
      { value: 4, label: '4 à 5 formations' },
      { value: 6, label: '6 ou plus' },
    ],
  },
  {
    id: 'coaching',
    etape: 2,
    titre: 'Souhaitez-vous ajouter un coaching business pour vos élèves ?',
    aide: 'Les aider à trouver leurs clients, fixer leurs prix, lancer leur activité',
    options: [
      { value: 'oui', label: 'Oui' },
      { value: 'non', label: 'Non' },
      { value: 'nsp', label: 'Je ne sais pas encore' },
    ],
  },
  {
    id: 'pub',
    etape: 2,
    titre: 'Quel budget publicitaire pourriez-vous investir par mois ?',
    aide: 'Pour faire connaître votre formation en ligne',
    options: [
      { value: 0, label: 'Aucun pour l’instant' },
      { value: 300, label: '300 €' },
      { value: 500, label: '500 €' },
      { value: 1000, label: '1 000 €' },
      { value: 1500, label: '1 500 €' },
      { value: 2000, label: '2 000 € ou plus' },
    ],
  },
  {
    id: 'etranger',
    etape: 2,
    titre: 'Aimeriez-vous vendre aussi à l’étranger, avec une version traduite ?',
    options: [
      { value: 'oui', label: 'Oui' },
      { value: 'peutetre', label: 'Peut-être' },
      { value: 'non', label: 'Non' },
    ],
  },
  {
    id: 'freins',
    etape: 2,
    type: 'multi',
    titre: 'Qu’est-ce qui vous a freiné jusqu’ici ?',
    aide: 'Plusieurs réponses possibles',
    options: [
      { value: 'temps', label: 'Pas le temps' },
      { value: 'camera', label: 'Pas à l’aise face caméra' },
      { value: 'commencer', label: 'Je ne sais pas par où commencer' },
      { value: 'presentiel', label: 'Peur que ça remplace mon présentiel' },
      { value: 'audience', label: 'Pas assez d’audience pour vendre' },
      { value: 'copie', label: 'Peur qu’on copie mon contenu' },
      { value: 'budget', label: 'Le budget' },
      { value: 'essaye', label: 'Déjà essayé, sans succès' },
      { value: 'jamais', label: 'Je n’y avais jamais pensé' },
    ],
  },
  {
    id: 'delai',
    etape: 2,
    titre: 'Quand aimeriez-vous lancer votre formation en ligne ?',
    options: [
      { value: 'vite', label: 'Dès que possible' },
      { value: '3mois', label: 'D’ici 3 mois' },
      { value: '6mois', label: 'D’ici 6 mois' },
      { value: 'renseigne', label: 'Je me renseigne pour l’instant' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Hypothèses de calcul (prudentes)                                    */
/* ------------------------------------------------------------------ */

const PRIX_DEFAUT_DOMAINE = {
  beaute: 900,
  coiffure: 800,
  sante: 700,
  vtc: 1200,
  technique: 1000,
  autre: 800,
}

// Part des anciens élèves joignables qui achètent au lancement, selon le métier.
const RACHAT_ANCIENS = {
  beaute: [0.03, 0.05],
  coiffure: [0.03, 0.05],
  sante: [0.02, 0.04],
  technique: [0.015, 0.03],
  autre: [0.015, 0.03],
  vtc: [0.005, 0.015],
}

export const HYPOTHESES = {
  ratioPrixEnLigne: 0.35, // prix en ligne ≈ 35 % du présentiel
  coachingPrix: 1.7, // le coaching augmente le prix d'environ 70 %
  lancementAbonnes: [0.0005, 0.001], // abonnés qui achètent à l'annonce
  upsellNouveaux: [0.1, 0.18], // nouveaux élèves présentiel qui prennent aussi la version en ligne
  abonnesParMois: [0.0001, 0.0002], // abonnés qui achètent chaque mois
  retourPub: [1.5, 2.3], // chiffre d'affaires pour 1 € de pub
}

// Rendement décroissant quand on digitalise plusieurs formations.
const MULT_ORGANIQUE = [1, 1.5, 1.8, 2.0, 2.15, 2.25]
const MULT_PANIER = [1, 1.15, 1.3, 1.4, 1.5, 1.55]

const PALIERS = [47, 97, 147, 197, 247, 297, 347, 397, 497, 597, 697, 797, 997, 1297, 1497, 1997]

function palier(x) {
  return PALIERS.reduce((best, v) => (Math.abs(v - x) < Math.abs(best - x) ? v : best), PALIERS[0])
}

export function prixEnLigneConseille(r) {
  const prix = r.prix ?? PRIX_DEFAUT_DOMAINE[r.domaine] ?? 800
  const coaching = r.coaching === 'oui'
  const brut = palier(prix * HYPOTHESES.ratioPrixEnLigne * (coaching ? HYPOTHESES.coachingPrix : 1))
  // Plafond : au-delà, une formation en ligne devient difficile à vendre sans appel.
  return Math.min(brut, coaching ? 1497 : 997)
}

/**
 * Calcule le potentiel à partir des réponses.
 * `override` permet de recalculer un scénario (autre prix, autre budget, coaching…).
 */
export function calculer(reponses, override = {}) {
  const r = { ...reponses, ...override }
  const domaine = r.domaine || 'autre'
  const n = Math.min(Math.max(Number(r.formations) || 1, 1), 6)
  const k = n - 1
  const coaching = r.coaching === 'oui'
  const prix = r.prixEnLigne || prixEnLigneConseille(r)
  // Plus le prix est élevé, moins il y a d'acheteurs (référence : 297 €).
  const conv = Math.min(1.15, Math.sqrt(297 / prix))
  const anciens = Number(r.anciens ?? 20)
  const abonnes = Number(r.abonnes ?? 300)
  const eleves = Number(r.eleves ?? 15)
  const budget = Number(r.pub ?? 0)
  const [rLo, rHi] = RACHAT_ANCIENS[domaine] || RACHAT_ANCIENS.autre
  const H = HYPOTHESES

  // 1. Lancement : on propose la formation à la base existante (une fois).
  const lancAnciens = [anciens * rLo, anciens * rHi].map((v) => v * conv * MULT_PANIER[k])
  const lancAbonnes = [abonnes * H.lancementAbonnes[0], abonnes * H.lancementAbonnes[1]].map(
    (v) => v * conv * MULT_PANIER[k],
  )
  const ventesLancement = [lancAnciens[0] + lancAbonnes[0], lancAnciens[1] + lancAbonnes[1]]
  const caLancement = ventesLancement.map((v) => v * prix)

  // 2. Chaque mois ensuite.
  const vNouveaux = [eleves / 12 * H.upsellNouveaux[0], eleves / 12 * H.upsellNouveaux[1]].map(
    (v) => v * conv * MULT_ORGANIQUE[k],
  )
  const vCommunaute = [abonnes * H.abonnesParMois[0], abonnes * H.abonnesParMois[1]].map(
    (v) => v * conv * MULT_ORGANIQUE[k],
  )
  const caPub = [budget * H.retourPub[0], budget * H.retourPub[1]].map((v) => v * MULT_PANIER[k])
  const caMensuel = [0, 1].map((i) => (vNouveaux[i] + vCommunaute[i]) * prix + caPub[i])
  const netMensuel = caMensuel.map((v) => v - budget)
  const ventesMensuelles = [0, 1].map((i) => vNouveaux[i] + vCommunaute[i] + caPub[i] / prix)

  // 3. Sur 12 mois.
  const annee1 = [0, 1].map((i) => caLancement[i] + 12 * netMensuel[i])

  // Rentabilité (estimation basse, plein tarif).
  const investissement = INVESTISSEMENT_PAR_FORMATION * n
  const partRemboursee = caLancement.map((v) => v / investissement)
  let moisRentable = null
  if (caLancement[0] >= investissement) moisRentable = 0
  else if (netMensuel[0] > 0) moisRentable = Math.ceil((investissement - caLancement[0]) / netMensuel[0])

  return {
    n,
    prix,
    coaching,
    budget,
    ventesLancement,
    caLancement,
    lancAnciens,
    lancAbonnes,
    vNouveaux,
    vCommunaute,
    caPub,
    ventesMensuelles,
    netMensuel,
    annee1,
    investissement,
    partRemboursee,
    moisRentable,
  }
}

/* ------------------------------------------------------------------ */
/* Jauge (pendant le quiz) et score de chaleur                         */
/* ------------------------------------------------------------------ */

export function niveauPotentiel(reponses) {
  const res = calculer(reponses)
  const milieu = (res.annee1[0] + res.annee1[1]) / 2
  if (milieu >= 60000) return { niveau: 4, label: 'Très élevé' }
  if (milieu >= 20000) return { niveau: 3, label: 'Élevé' }
  if (milieu >= 5000) return { niveau: 2, label: 'Moyen' }
  return { niveau: 1, label: 'À construire' }
}

export function scoreLead(reponses) {
  const res = calculer(reponses)
  let s = 0
  s += { dirigeant: 25, independant: 20, salarie: 5 }[reponses.role] || 0
  s += { vite: 30, '3mois': 20, '6mois': 10 }[reponses.delai] || 0
  const bas = res.annee1[0]
  s += bas >= 30000 ? 20 : bas >= 10000 ? 15 : bas >= 3000 ? 8 : 0
  if ((reponses.anciens ?? 0) >= 100 || (reponses.abonnes ?? 0) >= 5000) s += 10
  s += (reponses.pub ?? 0) >= 500 ? 10 : (reponses.pub ?? 0) >= 300 ? 5 : 0
  if (reponses.existant === 'peu' || reponses.existant === 'supports') s += 5
  const chaleur = s >= 65 ? 'chaud' : s >= 40 ? 'tiede' : 'froid'
  return { score: Math.min(s, 100), chaleur }
}

/* ------------------------------------------------------------------ */
/* Réponses aux freins                                                 */
/* ------------------------------------------------------------------ */

export const REPONSES_FREINS = {
  temps: {
    titre: 'Pas le temps ?',
    question: 'J’ai pas le temps de gérer un projet en plus',
    texte:
      "Vous ne gérez pas le projet : on prépare, on tourne dans votre centre, on monte, on met en ligne. Votre seule mission, c'est de transmettre pendant le tournage.",
    youtubeId: 'pFwH9iVPuHw',
  },
  camera: {
    titre: 'Pas à l’aise face caméra ?',
    question: 'Je ne suis pas à l’aise devant la caméra, comment ça se passe ?',
    texte:
      "C'est le cas de la plupart de nos clients au début. On vous met en condition, on vous guide pendant le tournage et le montage garde vos meilleures prises.",
    youtubeId: 'ev5QO7O1uo4',
  },
  commencer: {
    titre: 'Vous ne savez pas par où commencer ?',
    question: 'Combien de temps ça prend ?',
    texte:
      "C'est justement notre métier : structure des modules, tournage, montage pédagogique, plateforme et système de vente. Vous repartez avec une formation prête à vendre.",
    youtubeId: 'YagAOKhqOsQ',
  },
  presentiel: {
    titre: 'Peur que ça remplace votre présentiel ?',
    texte:
      "La formation en ligne vient en complément : elle touche ceux qui ne peuvent pas venir (trop loin, pas disponibles) et sert de révision à vos élèves en présentiel. Elle élargit votre clientèle, elle ne la remplace pas.",
  },
  audience: {
    titre: 'Pas assez d’audience ?',
    texte:
      "Vos premières ventes viennent de vos anciens élèves, que vous connaissez déjà. Ensuite, la publicité vous amène de nouveaux élèves chaque mois, même avec une petite communauté.",
  },
  copie: {
    titre: 'Peur qu’on copie votre contenu ?',
    texte:
      "Votre formation est hébergée sur une plateforme privée, avec un accès personnel pour chaque élève. Et ce qui fait votre valeur, c'est votre accompagnement : une copie ne le remplace pas.",
  },
  budget: {
    titre: 'Le budget vous inquiète ?',
    question: 'Est-ce que c’est rentable ?',
    texte:
      'Regardez la ligne « rentabilité » de votre simulation : elle montre en combien de temps votre investissement est remboursé, avec les hypothèses les plus prudentes.',
    youtubeId: '6xhAbe2xTQA',
  },
  essaye: {
    titre: 'Déjà essayé, sans succès ?',
    texte:
      "Le plus souvent, ce n'est pas la formation qui bloque mais la façon de la vendre. Nous livrons la formation avec son système de vente : page, tunnel et campagnes publicitaires.",
  },
  jamais: {
    titre: 'Vous n’y aviez jamais pensé ?',
    question: 'Et si c’était pas le bon moment pour moi ?',
    texte:
      "C'est le bon moment pour regarder les chiffres : votre simulation vous montre ce que votre base actuelle pourrait déjà vous rapporter.",
    youtubeId: '2rrSTJPYcCs',
  },
}

/* ------------------------------------------------------------------ */
/* Formatage                                                            */
/* ------------------------------------------------------------------ */

// Espace insécable classique (l'espace fine de fr-FR disparaît en gros caractères).
export function nombre(v) {
  return Math.round(Number(v) || 0).toLocaleString('fr-FR').replace(/\u202f/g, '\u00a0')
}

export function arrondi(v) {
  if (v >= 10000) return Math.round(v / 1000) * 1000
  if (v >= 1000) return Math.round(v / 100) * 100
  if (v >= 100) return Math.round(v / 10) * 10
  return Math.round(v)
}

export function euros(v) {
  return `${nombre(arrondi(Math.max(v, 0)))} €`
}

export function fourchette([lo, hi]) {
  const a = arrondi(Math.max(lo, 0))
  const b = arrondi(Math.max(hi, 0))
  if (a === b) return `${nombre(a)} €`
  return `${nombre(a)} à ${nombre(b)} €`
}

export function ventes([lo, hi]) {
  const a = Math.round(lo)
  const b = Math.round(hi)
  if (b <= 0) return 'moins d’une vente'
  if (a === b) return `${a} vente${a > 1 ? 's' : ''}`
  return `${a} à ${b} ventes`
}

/* ------------------------------------------------------------------ */
/* Contact                                                              */
/* ------------------------------------------------------------------ */

export function normaliserTelephone(brut) {
  let t = String(brut || '').replace(/[\s.\-()]/g, '')
  if (t.startsWith('00')) t = `+${t.slice(2)}`
  if (/^0[1-9]\d{8}$/.test(t)) t = `+33${t.slice(1)}`
  if (/^33[1-9]\d{8}$/.test(t)) t = `+${t}`
  if (t.startsWith('+330')) t = `+33${t.slice(4)}`
  return /^\+\d{8,15}$/.test(t) ? t : null
}

export function normaliserEmail(brut) {
  const e = String(brut || '').trim().toLowerCase()
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) ? e : null
}

/* Lien de résultat partageable (sans données personnelles) */
const CLES_PARTAGE = ['domaine', 'role', 'prix', 'eleves', 'anciens', 'abonnes', 'existant', 'formations', 'coaching', 'pub', 'etranger', 'freins', 'delai']

export function encoderReponses(r) {
  const obj = {}
  CLES_PARTAGE.forEach((k) => {
    if (r[k] !== undefined) obj[k] = r[k]
  })
  try {
    return btoa(unescape(encodeURIComponent(JSON.stringify(obj))))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')
  } catch {
    return ''
  }
}

export function decoderReponses(code) {
  try {
    const b64 = code.replace(/-/g, '+').replace(/_/g, '/')
    const json = decodeURIComponent(escape(atob(b64)))
    const obj = JSON.parse(json)
    return obj && typeof obj === 'object' ? obj : null
  } catch {
    return null
  }
}
