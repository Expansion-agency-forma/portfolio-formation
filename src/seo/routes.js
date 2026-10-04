// Une entrée par page : titre, description, indexation et place dans le sitemap.
// Source unique utilisée par le pré-rendu HTML, le sitemap et la mise à jour du <head> côté navigateur.
import { SECTEURS } from '../data/secteurs.js'
import { ARTICLES, BASE_RESSOURCES } from '../data/ressources.js'

export const PAGES = [
  {
    path: '/',
    title: 'Créer et vendre votre formation en ligne | Expansion Agency',
    description:
      'Agence marketing pour organismes de formation : on filme vos formations dans votre centre, on les monte en modules et on les vend en ligne. Simulez votre potentiel.',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/simulateur',
    title: 'Simulateur : combien rapporterait votre formation en ligne ?',
    description:
      'Estimez en 1 minute ce que votre organisme de formation pourrait gagner en vendant ses formations en ligne, à partir de vos élèves, abonnés et prix. Gratuit.',
    priority: 0.9,
    changefreq: 'monthly',
    fil: 'Simulateur de potentiel',
    hydrate: false,
  },
  ...SECTEURS.map((s) => ({
    path: s.path,
    title: s.seoTitle,
    description: s.seoDescription,
    priority: 0.8,
    changefreq: 'monthly',
    fil: s.nom,
    secteur: s.slug,
  })),
  {
    path: '/publicite',
    title: 'Publicité Meta Ads pour organismes de formation | Expansion',
    description:
      'Campagnes Meta, TikTok, YouTube et Snapchat pour remplir vos formations. Payé au résultat : 10 à 20 % du chiffre d’affaires généré, sans frais fixes.',
    priority: 0.7,
    changefreq: 'monthly',
    fil: 'Publicité',
  },
  {
    path: BASE_RESSOURCES,
    title: 'Ressources : digitaliser vos formations | Expansion',
    description:
      'Délais, rentabilité, tournage, Qualiopi, pédagogie : nos conseils pour créer et vendre une formation en ligne quand on dirige un organisme de formation.',
    priority: 0.7,
    changefreq: 'weekly',
    fil: 'Ressources',
    ressources: true,
  },
  ...ARTICLES.map((a) => ({
    path: a.path,
    title: a.seoTitle,
    description: a.description,
    priority: 0.7,
    changefreq: 'monthly',
    fil: a.fil,
    filParent: { nom: 'Ressources', path: BASE_RESSOURCES },
    article: a.slug,
  })),
  {
    path: '/mentions-legales',
    title: 'Mentions légales | Expansion Agency',
    description: 'Mentions légales du site expansion-agency.com : éditeur, hébergeur et propriété intellectuelle.',
    priority: 0.2,
    changefreq: 'yearly',
    fil: 'Mentions légales',
  },
  {
    path: '/cgv',
    title: 'Conditions générales de vente | Expansion Agency',
    description: 'Conditions générales de vente des prestations d’Expansion Agency : services, prix, délais et responsabilités.',
    priority: 0.2,
    changefreq: 'yearly',
    fil: 'CGV',
  },
  {
    path: '/confidentialite',
    title: 'Politique de confidentialité | Expansion Agency',
    description: 'Comment Expansion Agency collecte, utilise et protège vos données personnelles, et comment exercer vos droits.',
    priority: 0.2,
    changefreq: 'yearly',
    fil: 'Confidentialité',
  },
  {
    path: '/merci',
    title: 'Merci — Expansion Agency',
    description: 'Votre rendez-vous est confirmé.',
    noindex: true,
  },
]

export const PAGE_404 = {
  path: '/404',
  title: 'Page introuvable | Expansion Agency',
  description: 'Cette page n’existe pas ou a été déplacée.',
  noindex: true,
}

export function pagePour(pathname) {
  const propre = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return PAGES.find((p) => p.path === propre) || PAGE_404
}
