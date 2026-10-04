// Construit le <head> de chaque page (titre, description, partage social, données structurées).
// Utilisé au pré-rendu (HTML statique) et dans le navigateur à chaque changement de page.
import { pagePour } from './routes.js'
import { SITE_URL, SITE_NAME, OG_IMAGE, LOGO_URL, CONTACT_EMAIL, RESEAUX } from './site.js'
import { FAQS as FAQ_ACCUEIL } from '../components/Faq.jsx'
import { FAQS as FAQ_PUB } from '../components/pub/FaqPub.jsx'
import { SECTEURS } from '../data/secteurs.js'
import { ARTICLES, AUTEUR, BASE_RESSOURCES } from '../data/ressources.js'
import { texteBrut } from '../lib/article.js'

const ORG_ID = `${SITE_URL}/#organisation`
const SITE_ID = `${SITE_URL}/#site`
const AUTEUR_ID = `${SITE_URL}/#nathanael-dahomais`
const BLOG_ID = `${SITE_URL}${BASE_RESSOURCES}#blog`

function urlAbsolue(path) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

function faqPage(url, faqs) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function donneesStructurees(page) {
  const url = urlAbsolue(page.path)
  const graph = [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE_NAME,
      alternateName: ['Expansion', 'The Expansion Agency'],
      url: `${SITE_URL}/`,
      logo: { '@type': 'ImageObject', url: LOGO_URL, width: 512, height: 512 },
      image: OG_IMAGE.url,
      email: CONTACT_EMAIL,
      description:
        'Agence marketing pour organismes de formation : tournage des formations sur site, montage en modules, système de vente en ligne et publicité.',
      founder: { '@id': AUTEUR_ID },
      foundingDate: '2021',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'La Villeneuve-en-Chevrie',
        postalCode: '78270',
        addressCountry: 'FR',
      },
      areaServed: { '@type': 'Country', name: 'France' },
      knowsAbout: [
        'Digitalisation de formations',
        'Création de formations en ligne',
        'Tournage vidéo de formations',
        'Publicité Meta Ads',
        'Organismes de formation',
      ],
      sameAs: RESEAUX,
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: 'fr-FR',
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#page`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: 'fr-FR',
      isPartOf: { '@id': SITE_ID },
      about: { '@id': ORG_ID },
      primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url },
      ...(page.fil ? { breadcrumb: { '@id': `${url}#fil` } } : {}),
    },
  ]

  // Fondateur et auteur des articles (référencé par l'organisation sur toutes les pages).
  graph.push({
    '@type': 'Person',
    '@id': AUTEUR_ID,
    name: AUTEUR.nom,
    jobTitle: AUTEUR.role,
    url: AUTEUR.url,
    sameAs: RESEAUX,
    worksFor: { '@id': ORG_ID },
  })

  if (page.fil) {
    const etapes = [
      { name: 'Accueil', item: `${SITE_URL}/` },
      ...(page.filParent ? [{ name: page.filParent.nom, item: urlAbsolue(page.filParent.path) }] : []),
      { name: page.fil, item: url },
    ]
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#fil`,
      itemListElement: etapes.map((e, i) => ({ '@type': 'ListItem', position: i + 1, ...e })),
    })
  }

  if (page.ressources) {
    graph.push({
      '@type': 'Blog',
      '@id': BLOG_ID,
      url,
      name: 'Ressources Expansion Agency',
      description: page.description,
      inLanguage: 'fr-FR',
      publisher: { '@id': ORG_ID },
      blogPost: ARTICLES.map((a) => ({ '@id': `${urlAbsolue(a.path)}#article` })),
    })
    ARTICLES.forEach((a) => {
      graph.push({
        '@type': 'BlogPosting',
        '@id': `${urlAbsolue(a.path)}#article`,
        headline: a.titre,
        url: urlAbsolue(a.path),
        datePublished: a.publie,
        dateModified: a.maj,
        author: { '@id': AUTEUR_ID },
      })
    })
  }

  if (page.article) {
    const a = ARTICLES.find((x) => x.slug === page.article)
    graph.push(
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: a.titre,
        description: a.description,
        url,
        datePublished: a.publie,
        dateModified: a.maj,
        inLanguage: 'fr-FR',
        articleSection: a.categorie,
        wordCount: a.mots,
        image: OG_IMAGE.url,
        author: { '@id': AUTEUR_ID },
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: { '@id': `${url}#page` },
        isPartOf: { '@id': BLOG_ID },
      },
      faqPage(
        url,
        a.faq.map((f) => ({ q: texteBrut(f.q), a: texteBrut(f.a) })),
      ),
    )
  }

  if (page.path === '/') {
    graph.push(
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/#service-formation`,
        name: 'Digitalisation de formations clé en main',
        serviceType: 'Création de formations en ligne',
        description:
          'Tournage pro sur site, montage en modules pédagogiques, page de vente, tunnel d’inscription et publicité pour vendre votre formation en ligne.',
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'Country', name: 'France' },
        audience: { '@type': 'BusinessAudience', audienceType: 'Organismes de formation et formateurs' },
      },
      faqPage(url, FAQ_ACCUEIL),
    )
  }

  if (page.path === '/publicite') {
    graph.push(
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/publicite#service`,
        name: 'Publicité au résultat pour organismes de formation',
        serviceType: 'Gestion de campagnes Meta Ads, TikTok Ads, YouTube Ads et Snapchat Ads',
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'Country', name: 'France' },
      },
      faqPage(url, FAQ_PUB),
    )
  }

  if (page.secteur) {
    const s = SECTEURS.find((x) => x.slug === page.secteur)
    graph.push(
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `Création de formation en ligne — ${s.nom}`,
        serviceType: 'Création de formations en ligne',
        description: s.seoDescription,
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'Country', name: 'France' },
        audience: { '@type': 'BusinessAudience', audienceType: `Organismes de formation — ${s.nom}` },
      },
      faqPage(url, s.faq),
    )
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

function echapper(texte) {
  return String(texte)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function articleMetas(page) {
  if (!page.article) return []
  const a = ARTICLES.find((x) => x.slug === page.article)
  return [
    { property: 'article:published_time', content: a.publie },
    { property: 'article:modified_time', content: a.maj },
    { property: 'article:section', content: a.categorie },
  ]
}

// Liste des balises <meta>/<link> d'une page, sous forme neutre (réutilisée côté serveur et navigateur).
export function balises(pathname) {
  const page = pagePour(pathname)
  const url = page.noindex ? null : urlAbsolue(page.path)
  const metas = [
    { name: 'description', content: page.description },
    { name: 'robots', content: page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' },
    { property: 'og:type', content: page.article ? 'article' : 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    ...(url ? [{ property: 'og:url', content: url }] : []),
    { property: 'og:image', content: OG_IMAGE.url },
    { property: 'og:image:width', content: String(OG_IMAGE.width) },
    { property: 'og:image:height', content: String(OG_IMAGE.height) },
    { property: 'og:image:alt', content: OG_IMAGE.alt },
    ...articleMetas(page),
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: OG_IMAGE.url },
  ]
  return { page, url, metas, jsonLd: page.noindex ? null : donneesStructurees(page) }
}

// HTML du <head> pour le pré-rendu.
export function headHtml(pathname) {
  const { page, url, metas, jsonLd } = balises(pathname)
  const lignes = [`<title>${echapper(page.title)}</title>`]
  metas.forEach((m) => {
    const cle = m.name ? `name="${m.name}"` : `property="${m.property}"`
    lignes.push(`<meta ${cle} content="${echapper(m.content)}" />`)
  })
  if (url) lignes.push(`<link rel="canonical" href="${url}" />`)
  if (jsonLd) {
    const json = JSON.stringify(jsonLd).replace(/</g, '\\u003c')
    lignes.push(`<script type="application/ld+json" id="donnees-structurees">${json}</script>`)
  }
  return lignes.join('\n    ')
}

// Mise à jour du <head> dans le navigateur lors d'une navigation interne.
export function appliquerHead(pathname) {
  if (typeof document === 'undefined') return
  const { page, url, metas, jsonLd } = balises(pathname)
  document.title = page.title

  // Balises propres aux articles : retirées en quittant un article.
  document.head.querySelectorAll('meta[property^="article:"]').forEach((el) => {
    if (!metas.some((m) => m.property === el.getAttribute('property'))) el.remove()
  })

  metas.forEach((m) => {
    const selecteur = m.name ? `meta[name="${m.name}"]` : `meta[property="${m.property}"]`
    let el = document.head.querySelector(selecteur)
    if (!el) {
      el = document.createElement('meta')
      if (m.name) el.setAttribute('name', m.name)
      else el.setAttribute('property', m.property)
      document.head.appendChild(el)
    }
    el.setAttribute('content', m.content)
  })
  if (!url) document.head.querySelector('meta[property="og:url"]')?.remove()
  else document.head.querySelector('meta[property="og:url"]')?.setAttribute('content', url)

  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (url) {
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  } else if (canonical) {
    canonical.remove()
  }

  let script = document.getElementById('donnees-structurees')
  if (jsonLd) {
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'donnees-structurees'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLd)
  } else if (script) {
    script.remove()
  }
}
