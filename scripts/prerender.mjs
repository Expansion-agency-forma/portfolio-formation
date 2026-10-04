// Pré-rendu : après `vite build`, écrit une page HTML complète par route + le sitemap.
// Google, les IA et les réseaux sociaux reçoivent ainsi le vrai contenu de chaque page.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const racine = process.cwd()
const dist = path.join(racine, 'dist')
const SITE_URL = 'https://www.expansion-agency.com'

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const serveur = path.join(racine, 'dist-ssr', 'entry-server.js')
const { render, PAGES, PAGE_404 } = await import(pathToFileURL(serveur).href)

const ZONE_HEAD = /<!--app-head-->[\s\S]*?<!--\/app-head-->/
const ZONE_APP = '<div id="root" data-hydrate="non"><!--app-html--></div>'
if (!ZONE_HEAD.test(template) || !template.includes(ZONE_APP)) {
  throw new Error('index.html : repères <!--app-head--> ou <!--app-html--> introuvables')
}

function fichierPour(chemin) {
  if (chemin === '/') return 'index.html'
  if (chemin === '/404') return '404.html'
  return `${chemin.slice(1)}.html`
}

for (const page of [...PAGES, PAGE_404]) {
  const { html, head } = render(page.path)
  const hydrate = page.hydrate === false || page === PAGE_404 ? 'non' : 'oui'
  const sortie = template
    .replace(ZONE_HEAD, () => head)
    .replace(ZONE_APP, () => `<div id="root" data-hydrate="${hydrate}">${html}</div>`)
  const cible = path.join(dist, fichierPour(page.path))
  fs.mkdirSync(path.dirname(cible), { recursive: true })
  fs.writeFileSync(cible, sortie)
  console.log(`  pré-rendu ${page.path.padEnd(48)} → ${path.relative(dist, cible)} (${Math.round(sortie.length / 1024)} ko)`)
}

const aujourdhui = new Date().toISOString().slice(0, 10)
const urls = PAGES.filter((p) => !p.noindex)
  .map((p) => {
    const loc = p.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${p.path}`
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${aujourdhui}</lastmod>`,
      `    <changefreq>${p.changefreq || 'monthly'}</changefreq>`,
      `    <priority>${(p.priority ?? 0.5).toFixed(1)}</priority>`,
      '  </url>',
    ].join('\n')
  })
  .join('\n')
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`  sitemap.xml : ${PAGES.filter((p) => !p.noindex).length} pages`)
