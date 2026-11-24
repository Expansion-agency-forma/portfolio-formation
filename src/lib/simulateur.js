// Simulateur de potentiel — formation en ligne pour organismes de formation.
// Toutes les hypothèses sont regroupées ici pour pouvoir être ajustées facilement.

export const CALENDLY_URL =
  'https://calendly.com/expansionagency/appel-decouverte-formation-en-ligne-clone'

// Adresse de réception des contacts (webhook Make). Vide = aucun envoi.
export const WEBHOOK_URL = 'https://hook.eu2.make.com/3u5g75qrb8f93xjnb5ujnkkplilz16ob'

export const INVESTISSEMENT_PAR_FORMATION = 2500
export const VIDEO_OFFRE_ID = 'fRIjNmgk0hE'

/* ------------------------------------------------------------------ */
/* Questions — mode « formation en ligne »                             */
/* ------------------------------------------------------------------ */
// `si` : la question n'apparaît que si la condition est vraie.

export const ETAPES = ['Votre projet', 'Votre audience', 'Votre lancement']

const pasCfa = (r) => r.type !== 'cfa'

export const PRIX_EN_LIGNE = [47, 97, 147, 197, 247, 297, 347, 397, 497, 597, 697, 797, 997, 1297, 1497, 1997]

const DOMAINES = [
  { value: 'beaute', label: 'Beauté, esthétique, ongles, cils' },
  { value: 'coiffure', label: 'Coiffure, barbier' },
  { value: 'sante', label: 'Santé, bien-être, massage' },
  { value: 'vtc', label: 'VTC, taxi, transport, sécurité' },
  { value: 'technique', label: 'Technique, BTP, artisanat' },
  { value: 'autre', label: 'Autre domaine' },
]

export const QUESTIONS = [
  {
    id: 'type',
    etape: 0,
    titre: 'Quel type de formation voulez-vous mettre en ligne ?',
    options: [
      { value: 'fondspropres', label: 'Une formation courte que je vends moi-même', detail: 'Prix libre, payée par l’élève' },
      { value: 'cpf', label: 'Une formation certifiante éligible au CPF', detail: 'Financée par le compte formation' },
      { value: 'cfa', label: 'Un diplôme ou un titre en apprentissage', detail: 'CFA, financé par l’OPCO' },
    ],
  },
  { id: 'domaine', etape: 0, titre: 'Dans quel domaine formez-vous ?', options: DOMAINES },
  {
    id: 'formations',
    etape: 0,
    titre: (r) => (r.type === 'cfa' ? 'Combien de diplômes ou titres voulez-vous proposer à distance ?' : 'Combien de formations voulez-vous digitaliser ?'),
    aide: 'Chaque formation en plus rapporte, mais un peu moins que la précédente : ce sont souvent les mêmes élèves qui les achètent.',
    options: [
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4 ou 5' },
      { value: 6, label: '6 ou plus' },
    ],
  },
  {
    id: 'prixEnLigne',
    etape: 0,
    si: (r) => r.type === 'fondspropres',
    type: 'slider',
    paliers: PRIX_EN_LIGNE,
    titre: 'À quel prix aimeriez-vous vendre votre formation en ligne ?',
    aide: 'Prix moyen d’une formation. Le prix conseillé pour votre domaine est déjà placé.',
    defaut: (r) => prixConseilleDomaine(r),
    inconnu: 'Je ne sais pas, conseillez-moi',
  },
  {
    id: 'prixCpf',
    etape: 0,
    si: (r) => r.type === 'cpf',
    type: 'slider',
    min: 500,
    max: 5000,
    step: 50,
    titre: 'À quel prix votre formation est-elle (ou sera-t-elle) sur Mon Compte Formation ?',
    aide: 'Prix public de la formation. L’élève paie seulement le reste à charge de 150 €, le CPF finance le reste.',
    defaut: (r) => prixConseilleDomaine(r),
    inconnu: 'Je ne sais pas encore',
  },
  {
    id: 'npec',
    etape: 0,
    si: (r) => r.type === 'cfa',
    type: 'slider',
    min: 4000,
    max: 12000,
    step: 250,
    titre: 'Quel est le niveau de prise en charge (NPEC) de votre diplôme ?',
    aide: 'Montant versé par l’OPCO par contrat et par an. Il figure dans le référentiel de France compétences.',
    defaut: () => 6500,
    inconnu: 'Je ne sais pas',
  },
  {
    id: 'distance',
    etape: 0,
    si: (r) => r.type === 'cfa',
    titre: 'Quelle part de la formation serait suivie à distance ?',
    aide: 'Depuis juillet 2025, la prise en charge baisse de 20 % quand au moins 80 % de la formation est à distance (plancher : 4 000 €).',
    options: [
      { value: 'hybride', label: 'Moins de 80 % (formation hybride)' },
      { value: 'plus80', label: '80 % ou plus' },
      { value: 'nsp', label: 'Je ne sais pas encore', inconnu: true },
    ],
  },
  {
    id: 'capacite',
    etape: 1,
    si: (r) => r.type === 'cfa',
    titre: 'Combien d’apprentis en plus pourriez-vous accueillir par an grâce au distanciel ?',
    options: [
      { value: 5, label: 'Moins de 10' },
      { value: 15, label: '10 à 20' },
      { value: 35, label: '20 à 50' },
      { value: 75, label: '50 à 100' },
      { value: 150, label: 'Plus de 100' },
    ],
  },
  {
    id: 'langues',
    etape: 0,
    si: pasCfa,
    type: 'multi',
    titre: 'Aimeriez-vous traduire votre formation pour vendre à l’étranger ?',
    aide: 'Choisissez les langues qui vous intéressent',
    vide: 'Pas de traduction pour l’instant',
    options: [
      { value: 'anglais', label: 'Anglais' },
      { value: 'espagnol', label: 'Espagnol' },
      { value: 'arabe', label: 'Arabe' },
      { value: 'portugais', label: 'Portugais' },
      { value: 'italien', label: 'Italien' },
      { value: 'allemand', label: 'Allemand' },
    ],
  },
  {
    id: 'eleves',
    etape: 1,
    si: pasCfa,
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
    si: pasCfa,
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
    si: pasCfa,
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
    si: pasCfa,
    titre: 'Aujourd’hui, vous avez déjà…',
    options: [
      { value: 'rien', label: 'Rien en ligne pour l’instant' },
      { value: 'supports', label: 'Des vidéos ou des supports de cours' },
      { value: 'peu', label: 'Une formation en ligne qui se vend peu' },
      { value: 'bien', label: 'Une formation en ligne qui se vend bien' },
    ],
  },
  {
    id: 'coaching',
    etape: 2,
    si: (r) => r.type === 'fondspropres',
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
    titre: (r) =>
      r.type === 'cfa'
        ? 'Quel budget publicitaire pourriez-vous investir par mois pour recruter vos apprentis ?'
        : 'Quel budget publicitaire pourriez-vous investir par mois ?',
    aide: 'Payé directement aux plateformes (Meta, TikTok, Google…)',
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
    id: 'freins',
    etape: 2,
    si: pasCfa,
    type: 'multi',
    titre: 'Qu’est-ce qui vous a freiné jusqu’ici ?',
    aide: 'Plusieurs réponses possibles',
    vide: 'Aucun de ces freins',
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

export const ROLES = [
  { value: 'dirigeant', label: "Dirigeant(e) d'un centre de formation" },
  { value: 'independant', label: 'Formateur ou formatrice indépendant(e)' },
  { value: 'salarie', label: "Salarié(e) d'un centre de formation" },
  { value: 'autre', label: 'Autre' },
]

/* ------------------------------------------------------------------ */
/* Questions — mode « publicité »                                      */
/* ------------------------------------------------------------------ */

export const ETAPES_PUB = ['Votre offre', 'Votre budget', 'Votre suivi']

const offreFormation = (r) => r.offre === 'fondspropres' || r.offre === 'cpf'
const offreCfa = (r) => r.offre === 'cfa_eleves' || r.offre === 'cfa_employeurs'

export const QUESTIONS_PUB = [
  {
    id: 'offre',
    etape: 0,
    titre: 'Que voulez-vous remplir grâce à la publicité ?',
    options: [
      { value: 'fondspropres', label: 'Une formation que je vends moi-même', detail: 'Prix libre, payée par l’élève' },
      { value: 'cpf', label: 'Une formation éligible au CPF', detail: 'Financée par le compte formation' },
      { value: 'cfa_eleves', label: 'Mon CFA : trouver des apprentis', detail: 'Candidats pour vos rentrées' },
      { value: 'cfa_employeurs', label: 'Mon CFA : trouver des entreprises', detail: 'Employeurs prêts à signer un contrat' },
    ],
  },
  { id: 'domaine', etape: 0, si: offreFormation, titre: 'Dans quel domaine formez-vous ?', options: DOMAINES },
  {
    id: 'prixPub',
    etape: 0,
    si: offreFormation,
    type: 'slider',
    min: 100,
    max: 5000,
    step: 50,
    titre: 'Quel est le prix moyen de votre formation ?',
    aide: 'Ce que vous encaissez pour une inscription',
    defaut: (r) => (r.offre === 'cpf' ? 1500 : 900),
  },
  {
    id: 'npec',
    etape: 0,
    si: offreCfa,
    type: 'slider',
    min: 4000,
    max: 12000,
    step: 250,
    titre: 'Quel est le niveau de prise en charge (NPEC) de vos diplômes ?',
    aide: 'Montant moyen versé par l’OPCO par contrat et par an',
    defaut: () => 6500,
    inconnu: 'Je ne sais pas',
  },
  {
    id: 'places',
    etape: 0,
    si: offreCfa,
    titre: 'Combien de contrats aimeriez-vous signer sur l’année ?',
    aide: 'Le nombre de places que vous pouvez accueillir',
    options: [
      { value: 10, label: 'Moins de 15' },
      { value: 25, label: '15 à 35' },
      { value: 50, label: '35 à 75' },
      { value: 100, label: '75 à 150' },
      { value: 200, label: 'Plus de 150' },
    ],
  },
  {
    id: 'budgetPub',
    etape: 1,
    type: 'slider',
    min: 300,
    max: 10000,
    step: 100,
    titre: 'Quel budget publicitaire pourriez-vous investir par mois ?',
    aide: 'Payé directement aux plateformes (Meta, TikTok, Google…)',
    defaut: () => 1500,
  },
  {
    id: 'rappel',
    etape: 2,
    titre: 'Qui rappelle les personnes intéressées ?',
    aide: 'C’est souvent ce qui fait la plus grande différence sur les ventes',
    options: [
      { value: 'equipe', label: 'Quelqu’un de mon équipe, dans la journée' },
      { value: 'lent', label: 'Moi, quand j’ai le temps' },
      { value: 'personne', label: 'Personne pour l’instant' },
    ],
  },
  {
    id: 'delai',
    etape: 2,
    titre: 'Quand aimeriez-vous lancer vos campagnes ?',
    options: [
      { value: 'vite', label: 'Dès que possible' },
      { value: '3mois', label: 'D’ici 3 mois' },
      { value: '6mois', label: 'D’ici 6 mois' },
      { value: 'renseigne', label: 'Je me renseigne pour l’instant' },
    ],
  },
]

export function questionsActives(mode, reponses) {
  const liste = mode === 'pub' ? QUESTIONS_PUB : QUESTIONS
  return liste.filter((q) => !q.si || q.si(reponses))
}

export function titreQuestion(q, reponses) {
  return typeof q.titre === 'function' ? q.titre(reponses) : q.titre
}

/* ------------------------------------------------------------------ */
/* Hypothèses — formation en ligne                                     */
/* ------------------------------------------------------------------ */

// Prix en ligne conseillés selon le domaine.
const PRIX_CONSEILLE = {
  fondspropres: { beaute: 297, coiffure: 297, sante: 197, vtc: 147, technique: 247, autre: 197 },
  cpf: { beaute: 1500, coiffure: 1500, sante: 1300, vtc: 1500, technique: 1700, autre: 1300 },
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
  coachingPrix: 1.7, // le coaching augmente le prix d'environ 70 %
  lancementAbonnes: [0.0005, 0.001], // abonnés qui achètent à l'annonce
  upsellNouveaux: [0.1, 0.18], // nouveaux élèves présentiel qui prennent aussi la version en ligne
  abonnesParMois: [0.0001, 0.0002], // abonnés qui achètent chaque mois
  retourPub: [1.5, 2.3], // chiffre d'affaires pour 1 € de pub (formation en ligne)
  partEtranger: 0.7, // une langue traduite rapporte ~70 % de la pub en France, à budget égal
  cfaOrganique: [0.1, 0.25], // part des places remplies sans publicité
  cfaConversion: [0.03, 0.08], // candidat → contrat signé
}

// Rendement décroissant quand on digitalise plusieurs formations.
const MULT_ORGANIQUE = [1, 1.5, 1.8, 2.0, 2.15, 2.25]
const MULT_PANIER = [1, 1.15, 1.3, 1.4, 1.5, 1.55]
// Montée en charge des campagnes : mois 1 à 50 %, mois 2 à 80 %, puis 100 %.
const MOIS_EFFECTIFS = 0.5 + 0.8 + 10

function palier(x) {
  return PRIX_EN_LIGNE.reduce((best, v) => (Math.abs(v - x) < Math.abs(best - x) ? v : best), PRIX_EN_LIGNE[0])
}

export function prixConseilleDomaine(r) {
  const type = r.type === 'cpf' ? 'cpf' : 'fondspropres'
  return PRIX_CONSEILLE[type][r.domaine] ?? PRIX_CONSEILLE[type].autre
}

export function prixEnLigneConseille(r) {
  if (r.type === 'cpf') return r.prixCpf || prixConseilleDomaine(r)
  // Anciennes simulations : prix calculé à partir du présentiel.
  const base = r.prix && !r.type ? palier(r.prix * 0.35) : prixConseilleDomaine(r)
  const coaching = r.coaching === 'oui'
  return Math.min(palier(base * (coaching ? HYPOTHESES.coachingPrix : 1)), coaching ? 1497 : 997)
}

function prixRetenu(r) {
  if (r.type === 'cpf') return r.prixCpf || prixConseilleDomaine(r)
  if (r.prixEnLigne) return r.coaching === 'oui' ? Math.min(palier(r.prixEnLigne * HYPOTHESES.coachingPrix), 1997) : r.prixEnLigne
  return prixEnLigneConseille(r)
}

export function npecRetenu(r) {
  const npec = Number(r.npec) || 6500
  return r.distance === 'plus80' ? Math.max(4000, npec * 0.8) : npec
}

function calculerCfa(r) {
  const n = Math.min(Math.max(Number(r.formations) || 1, 1), 6)
  const budget = Number(r.pub ?? 0)
  const capacite = Number(r.capacite ?? 15)
  const npec = npecRetenu(r)
  const [cplLo, cplHi] = CPL.cfa_eleves.cpl
  const H = HYPOTHESES
  const candidatsMois = [budget / cplHi, budget / cplLo]
  const contratsPub = [candidatsMois[0] * 12 * H.cfaConversion[0], candidatsMois[1] * 12 * H.cfaConversion[1]]
  const contrats = [0, 1].map((i) => Math.min(capacite, capacite * H.cfaOrganique[i] + contratsPub[i]))
  const annee1 = contrats.map((c) => c * npec)
  return {
    cfa: true,
    n,
    budget,
    capacite,
    npec,
    candidatsMois,
    contrats,
    annee1,
    caLancement: [0, 0],
    netMensuel: annee1.map((v) => v / 12),
    ventesMensuelles: contrats.map((c) => c / 12),
    prix: npec,
  }
}

/**
 * Calcule le potentiel à partir des réponses.
 * `override` permet de recalculer un scénario (autre prix, autre budget, coaching…).
 */
export function calculer(reponses, override = {}) {
  const r = { ...reponses, ...override }
  if (r.type === 'cfa') return calculerCfa(r)
  const domaine = r.domaine || 'autre'
  const n = Math.min(Math.max(Number(r.formations) || 1, 1), 6)
  const k = n - 1
  const coaching = r.coaching === 'oui'
  const prix = r.prixForce || prixRetenu(r)
  // Plus le prix est élevé, moins il y a d'acheteurs. Le CPF a sa propre référence de prix.
  const ref = r.type === 'cpf' ? 1500 : 297
  const conv = Math.min(1.15, Math.sqrt(ref / prix))
  const anciens = Number(r.anciens ?? 20)
  const abonnes = Number(r.abonnes ?? 300)
  const eleves = Number(r.eleves ?? 15)
  const budget = Number(r.pub ?? 0)
  const [rLo, rHi] = RACHAT_ANCIENS[domaine] || RACHAT_ANCIENS.autre
  const H = HYPOTHESES
  const valeurPub = r.type === 'cpf' ? prix / 1500 : 1

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
  const caPub = [budget * H.retourPub[0], budget * H.retourPub[1]].map((v) => v * MULT_PANIER[k] * valeurPub)
  const caMensuel = [0, 1].map((i) => (vNouveaux[i] + vCommunaute[i]) * prix + caPub[i])
  const netMensuel = caMensuel.map((v) => v - budget)
  const ventesMensuelles = [0, 1].map((i) => vNouveaux[i] + vCommunaute[i] + caPub[i] / prix)

  // 3. Sur 12 mois.
  const annee1 = [0, 1].map((i) => caLancement[i] + 12 * netMensuel[i])

  // 4. Marchés étrangers (versions traduites), à budget pub égal par langue.
  const langues = Array.isArray(r.langues) ? r.langues : []
  const budgetEtranger = budget || 500
  const caPubRef = [budgetEtranger * H.retourPub[0], budgetEtranger * H.retourPub[1]].map((v) => v * MULT_PANIER[k] * valeurPub)
  const etrangerMensuel = caPubRef.map((v) => Math.max(0, v * H.partEtranger - budgetEtranger) * langues.length)
  const etranger12 = etrangerMensuel.map((v) => v * MOIS_EFFECTIFS)

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
    langues,
    budgetEtranger,
    etrangerMensuel,
    etranger12,
    investissement,
    partRemboursee,
    moisRentable,
  }
}

/* ------------------------------------------------------------------ */
/* Hypothèses — publicité                                              */
/* ------------------------------------------------------------------ */
// Coûts par lead relevés sur nos propres campagnes Meta (hors TVA).
// Pour les marchés où nous n'avons pas encore de campagne : estimation prudente.

export const CPL = {
  beaute: { cpl: [5, 10], source: 'Nos campagnes beauté et coiffure : 5,50 € à 8 € par contact.', reel: true },
  coiffure: { cpl: [5, 10], source: 'Nos campagnes beauté et coiffure : 5,50 € à 8 € par contact.', reel: true },
  vtc: { cpl: [4, 8], source: 'Nos campagnes VTC et taxi : 3,70 € à 7,60 € par contact, sur plus de 35 000 contacts.', reel: true },
  sante: { cpl: [8, 18], source: 'Estimation : nous n’avons pas encore diffusé dans ce domaine.', reel: false },
  technique: { cpl: [8, 18], source: 'Estimation : nous n’avons pas encore diffusé dans ce domaine.', reel: false },
  autre: { cpl: [8, 20], source: 'Estimation : dépend beaucoup du métier, à affiner ensemble.', reel: false },
  cfa_eleves: { cpl: [3, 11], source: 'Nos campagnes CFA : 2 € à 11 € par candidat.', reel: true },
  cfa_employeurs: { cpl: [9, 15], source: 'Nos campagnes CFA : 9 € par entreprise intéressée.', reel: true },
}

// Part des contacts qui deviennent une vente (ou un contrat signé).
// Hypothèse prudente : environ 1 contact sur 2 prend rendez-vous, puis 10 à 15 % signent.
export const CONVERSION_PUB = {
  fondspropres: [0.03, 0.06],
  cpf: [0.02, 0.05],
  cfa_eleves: [0.02, 0.05],
  cfa_employeurs: [0.04, 0.08],
}
const PRIX_REF_PUB = { fondspropres: 900, cpf: 1500 }

const EFFET_RAPPEL = { equipe: 1, lent: 0.7, personne: 0.5 }

export function cplPub(r) {
  if (r.offre === 'cfa_eleves' || r.offre === 'cfa_employeurs') return CPL[r.offre]
  return CPL[r.domaine] || CPL.autre
}

export function calculerPub(reponses, override = {}) {
  const r = { ...reponses, ...override }
  const offre = r.offre || 'fondspropres'
  const cfa = offre.startsWith('cfa')
  const budget = Number(r.budgetPub) || 1500
  const { cpl, source, reel } = cplPub(r)
  const conversion = CONVERSION_PUB[offre] || CONVERSION_PUB.fondspropres
  const effet = EFFET_RAPPEL[r.rappel] ?? 0.7
  const valeur = cfa ? Number(r.npec) || 6500 : Number(r.prixPub) || PRIX_REF_PUB[offre]
  // Plus la formation est chère, moins les contacts achètent.
  const elasticite = cfa ? 1 : Math.min(1.3, Math.max(0.5, Math.sqrt(PRIX_REF_PUB[offre] / valeur)))
  const leads = [budget / cpl[1], budget / cpl[0]]
  // Estimation centrale, puis une fourchette de ±30 % pour rester lisible.
  const cplMilieu = (cpl[0] + cpl[1]) / 2
  const convMilieu = ((conversion[0] + conversion[1]) / 2) * effet * elasticite
  const centralMois = (budget / cplMilieu) * convMilieu
  let ventesMois = [centralMois * 0.7, centralMois * 1.3]
  let ventes12 = ventesMois.map((v) => v * MOIS_EFFECTIFS)
  const places = cfa ? Number(r.places) || 20 : null
  if (cfa) ventes12 = ventes12.map((v) => Math.min(v, places))
  if (cfa) ventesMois = ventes12.map((v) => v / 12)
  const caMois = ventesMois.map((v) => v * valeur)
  const ca12 = ventes12.map((v) => v * valeur)
  return { offre, cfa, budget, cpl, source, reel, conversion, effet, valeur, places, leads, ventesMois, ventes12, caMois, ca12, annee1: ca12 }
}

/* ------------------------------------------------------------------ */
/* Jauge (pendant le quiz) et score de chaleur                         */
/* ------------------------------------------------------------------ */

export function resultat(mode, reponses) {
  return mode === 'pub' ? calculerPub(reponses) : calculer(reponses)
}

export function niveauPotentiel(mode, reponses) {
  const res = resultat(mode, reponses)
  const milieu = (res.annee1[0] + res.annee1[1]) / 2
  if (milieu >= 60000) return { niveau: 4, label: 'Très élevé' }
  if (milieu >= 20000) return { niveau: 3, label: 'Élevé' }
  if (milieu >= 5000) return { niveau: 2, label: 'Moyen' }
  return { niveau: 1, label: 'À construire' }
}

export function scoreLead(mode, reponses, role) {
  const res = resultat(mode, reponses)
  let s = 0
  s += { dirigeant: 25, independant: 20, salarie: 5 }[role] || 0
  s += { vite: 30, '3mois': 20, '6mois': 10 }[reponses.delai] || 0
  const bas = res.annee1[0]
  s += bas >= 30000 ? 20 : bas >= 10000 ? 15 : bas >= 3000 ? 8 : 0
  if (mode === 'pub') {
    const b = Number(reponses.budgetPub) || 0
    s += b >= 2000 ? 15 : b >= 1000 ? 10 : 5
    if (reponses.rappel === 'equipe') s += 10
  } else {
    if ((reponses.anciens ?? 0) >= 100 || (reponses.abonnes ?? 0) >= 5000 || (reponses.capacite ?? 0) >= 35) s += 10
    s += (reponses.pub ?? 0) >= 500 ? 10 : (reponses.pub ?? 0) >= 300 ? 5 : 0
    if (reponses.existant === 'peu' || reponses.existant === 'supports') s += 5
  }
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
const CLES_PARTAGE = ['mode', 'type', 'domaine', 'prix', 'prixEnLigne', 'prixCpf', 'npec', 'distance', 'capacite', 'langues', 'eleves', 'anciens', 'abonnes', 'existant', 'formations', 'coaching', 'pub', 'freins', 'delai', 'offre', 'prixPub', 'places', 'budgetPub', 'rappel']

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
