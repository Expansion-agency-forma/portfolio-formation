// Déclinaisons du simulateur par métier (pages dédiées utilisées en prospection).
// Chaque niche reprend les questions du simulateur général, avec un vocabulaire et des
// valeurs adaptés au métier. Le calcul reste celui de lib/simulateur.js.
import { QUESTIONS } from './simulateurNiche'

const base = (id) => QUESTIONS.find((q) => q.id === id)

// Question commune : les demandes qu'on ne peut pas servir en présentiel.
const refus = (aide) => ({
  id: 'refus',
  etape: 1,
  titre: 'Chaque mois, combien de demandes devez-vous refuser ou reporter ?',
  aide,
  options: [
    { value: 0, label: 'Aucune' },
    { value: 1.5, label: '1 à 2' },
    { value: 4, label: '3 à 5' },
    { value: 8, label: '6 à 10' },
    { value: 12, label: 'Plus de 10' },
    { value: 2, label: 'Je ne sais pas', inconnu: true },
  ],
})

const elevesPetits = {
  ...base('eleves'),
  options: [
    { value: 6, label: 'Moins de 10' },
    { value: 15, label: '10 à 20' },
    { value: 35, label: '20 à 50' },
    { value: 75, label: '50 à 100' },
    { value: 150, label: 'Plus de 100' },
    { value: 10, label: 'Je ne sais pas', inconnu: true },
  ],
}

const anciensPetits = {
  ...base('anciens'),
  options: [
    { value: 15, label: 'Moins de 30' },
    { value: 60, label: '30 à 100' },
    { value: 200, label: '100 à 300' },
    { value: 600, label: '300 à 1 000' },
    { value: 1500, label: 'Plus de 1 000' },
    { value: 30, label: 'Je ne sais pas', inconnu: true },
  ],
}

const freinsAnimaliers = {
  ...base('freins'),
  options: base('freins').options.map((o) =>
    o.value === 'presentiel' ? { ...o, label: 'Peur que ça remplace la pratique en présentiel' } : o,
  ),
}

export const NICHES = {
  toilettage: {
    slug: 'toilettage',
    path: '/simulateur-toilettage',
    stockage: 'expansion-simulateur-toilettage-v1',
    domaine: 'toilettage',
    libelleDomaine: 'Toilettage',
    eyebrow: 'Simulateur gratuit · Toilettage canin et félin',
    titre: 'Écoles et formatrices en toilettage : combien pourrait vous rapporter',
    titreItalique: 'votre formation en ligne ?',
    texte:
      'Aujourd’hui, vos sessions sont limitées par vos postes de toilettage et les chiens modèles disponibles. En ligne, vous formez des élèves de toute la France, sans limite de places.',
    points: [
      'Ce que vous pouvez vendre dès le lancement, à vos anciens élèves',
      'Ce que vous rapportent chaque mois les élèves que vous devez refuser aujourd’hui',
      'En combien de temps votre investissement est remboursé',
    ],
    questions: [
      {
        id: 'specialite',
        etape: 0,
        titre: 'Quelles formations proposez-vous ?',
        options: [
          { value: 'canin', label: 'Toilettage canin' },
          { value: 'felin', label: 'Toilettage félin' },
          { value: 'mixte', label: 'Canin et félin' },
          { value: 'perfectionnement', label: 'Surtout du perfectionnement (coupes, races, concours)' },
        ],
      },
      {
        ...base('role'),
        options: [
          { value: 'dirigeant', label: 'Je dirige une école ou un centre de toilettage' },
          { value: 'independant', label: 'Je forme dans mon salon de toilettage' },
          { value: 'salarie', label: 'Je suis formateur(rice) salarié(e)' },
          { value: 'autre', label: 'Autre' },
        ],
      },
      {
        ...base('prix'),
        titre: 'Combien coûte votre formation en présentiel ?',
        aide: 'Prix moyen payé par un élève (formation courte ou parcours complet)',
        min: 200,
        max: 8000,
        step: 100,
        defaut: 2500,
      },
      elevesPetits,
      refus('Manque de postes ou de chiens modèles, dates complètes, élèves qui habitent trop loin…'),
      anciensPetits,
      base('abonnes'),
      base('existant'),
      { ...base('formations'), titre: 'Combien de formations souhaitez-vous mettre en ligne ?' },
      {
        ...base('coaching'),
        titre: 'Souhaitez-vous ajouter un accompagnement à l’installation pour vos élèves ?',
        aide: 'Ouvrir son salon, fixer ses tarifs, trouver ses premiers clients',
      },
      base('pub'),
      { ...base('etranger'), titre: 'Aimeriez-vous vendre aussi en Belgique, en Suisse ou au Québec ?' },
      freinsAnimaliers,
      base('delai'),
    ],
  },

  animalier: {
    slug: 'metiers-animaliers',
    path: '/simulateur-metiers-animaliers',
    stockage: 'expansion-simulateur-animalier-v1',
    domaine: 'animalier',
    libelleDomaine: 'Métiers animaliers',
    eyebrow: 'Simulateur gratuit · Métiers animaliers',
    titre: 'Éducateurs, comportementalistes, centres animaliers : combien pourrait vous rapporter',
    titreItalique: 'votre formation en ligne ?',
    texte:
      'La théorie (comportement, apprentissages, réglementation, soins) se répète à chaque promo. En ligne, elle se vend toute l’année à des élèves de toute la France.',
    points: [
      'Ce que vous pouvez vendre dès le lancement, à vos anciens élèves',
      'Ce que vous rapportent chaque mois les élèves que vous ne pouvez pas accueillir',
      'En combien de temps votre investissement est remboursé',
    ],
    questions: [
      {
        id: 'specialite',
        etape: 0,
        titre: 'Dans quel domaine formez-vous ?',
        options: [
          { value: 'educateur', label: 'Éducation canine' },
          { value: 'comportement', label: 'Comportement animal' },
          { value: 'asv', label: 'Auxiliaire vétérinaire (ASV)' },
          { value: 'autre', label: 'Autre métier animalier' },
        ],
      },
      {
        ...base('role'),
        options: [
          { value: 'dirigeant', label: 'Je dirige un centre ou une école de formation' },
          { value: 'independant', label: 'Je suis éducateur(rice) ou comportementaliste et je forme' },
          { value: 'salarie', label: 'Je suis formateur(rice) salarié(e)' },
          { value: 'autre', label: 'Autre' },
        ],
      },
      {
        ...base('prix'),
        aide: 'Prix moyen payé par un élève',
        min: 200,
        max: 8000,
        step: 100,
        defaut: 2000,
      },
      elevesPetits,
      refus('Sessions complètes, terrain limité, élèves qui habitent trop loin…'),
      anciensPetits,
      base('abonnes'),
      base('existant'),
      { ...base('formations'), titre: 'Combien de formations souhaitez-vous mettre en ligne ?' },
      {
        ...base('coaching'),
        titre: 'Souhaitez-vous ajouter un accompagnement à l’installation pour vos élèves ?',
        aide: 'Se lancer à son compte, fixer ses tarifs, trouver ses premiers clients',
      },
      base('pub'),
      { ...base('etranger'), titre: 'Aimeriez-vous vendre aussi en Belgique, en Suisse ou au Québec ?' },
      freinsAnimaliers,
      base('delai'),
    ],
  },
}
