// Mise en forme des articles de la rubrique Ressources.
// Les articles sont écrits dans un format texte simple, facile à relire et à corriger :
//   ## Titre de partie          ### Sous-titre
//   - élément de liste          1. élément numéroté
//   > encadré                   **gras**    [texte du lien](/adresse)
//   [[video:IDYOUTUBE|Titre]]   [[simulateur]]  (encart vers le simulateur)
// Une ligne vide sépare deux paragraphes.

export function ancre(texte) {
  return texte
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// Découpe le texte en blocs (titres, paragraphes, listes, encadrés, vidéos, encart simulateur).
export function analyser(source) {
  const blocs = []
  let courant = null

  for (const brute of source.split('\n')) {
    const ligne = brute.trim()
    let m
    if (!ligne) {
      courant = null
      continue
    }
    if ((m = ligne.match(/^(#{2,3}) (.+)$/))) {
      courant = null
      blocs.push({ type: m[1].length === 2 ? 'h2' : 'h3', texte: m[2], id: ancre(texteBrut(m[2])) })
      continue
    }
    if ((m = ligne.match(/^\[\[video:([\w-]+)\|(.+)\]\]$/))) {
      courant = null
      blocs.push({ type: 'video', id: m[1], titre: m[2] })
      continue
    }
    if (ligne === '[[simulateur]]') {
      courant = null
      blocs.push({ type: 'simulateur' })
      continue
    }
    if ((m = ligne.match(/^- (.+)$/))) {
      if (courant?.type !== 'ul') blocs.push((courant = { type: 'ul', items: [] }))
      courant.items.push(m[1])
      continue
    }
    if ((m = ligne.match(/^\d+\. (.+)$/))) {
      if (courant?.type !== 'ol') blocs.push((courant = { type: 'ol', items: [] }))
      courant.items.push(m[1])
      continue
    }
    if ((m = ligne.match(/^> ?(.*)$/))) {
      if (courant?.type !== 'encadre') blocs.push((courant = { type: 'encadre', texte: '' }))
      courant.texte += (courant.texte ? ' ' : '') + m[1]
      continue
    }
    if (courant?.type !== 'p') blocs.push((courant = { type: 'p', texte: '' }))
    courant.texte += (courant.texte ? ' ' : '') + ligne
  }
  return blocs
}

// Espaces insécables de la typographie française (avant ? ! : ; », entre milliers, avant € et %).
export function typo(texte) {
  return texte
    .replace(/ ([?!:;»])/g, ' $1')
    .replace(/« /g, '« ')
    .replace(/(\d) (?=\d{3}\b)/g, '$1 ')
    .replace(/(\d) (€|%)/g, '$1 $2')
}

// Morceaux d'une ligne : texte, gras ou lien.
export function morceaux(texte) {
  const res = []
  const motif = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g
  let dernier = 0
  let m
  while ((m = motif.exec(texte))) {
    if (m.index > dernier) res.push({ type: 'texte', valeur: typo(texte.slice(dernier, m.index)) })
    if (m[1] !== undefined) res.push({ type: 'gras', valeur: typo(m[1]) })
    else res.push({ type: 'lien', valeur: typo(m[2]), href: m[3] })
    dernier = motif.lastIndex
  }
  if (dernier < texte.length) res.push({ type: 'texte', valeur: typo(texte.slice(dernier)) })
  return res
}

// Texte sans mise en forme (données structurées, comptage des mots).
export function texteBrut(texte) {
  return texte.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1')
}

export function nombreDeMots(blocs) {
  return blocs
    .map((b) => (b.items ? b.items.join(' ') : b.texte || ''))
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
}

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

// « 2026-10-04 » → « 4 octobre 2026 » (sans dépendre de la langue du serveur ou du navigateur).
export function dateLongue(iso) {
  const [a, m, j] = iso.split('-').map(Number)
  return `${j === 1 ? '1er' : j} ${MOIS[m - 1]} ${a}`
}
