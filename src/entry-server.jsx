// Rendu HTML de chaque page au moment de la publication (pré-rendu pour Google et le partage social).
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppShell } from './App.jsx'
import { headHtml } from './seo/head.js'
import { PAGES, PAGE_404 } from './seo/routes.js'

export { PAGES, PAGE_404 }

export function render(url) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>,
  )
  return { html, head: headHtml(url) }
}
