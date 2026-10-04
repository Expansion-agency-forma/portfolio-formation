import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import FormationLanding from './pages/FormationLanding'
import PubLanding from './pages/PubLanding'
import MentionsLegales from './pages/MentionsLegales'
import Cgv from './pages/Cgv'
import Confidentialite from './pages/Confidentialite'
import Thanks from './pages/Thanks'
import Simulateur from './pages/Simulateur'
import Secteur from './pages/Secteur'
import Ressources from './pages/Ressources'
import Article from './pages/Article'
import NotFound from './pages/NotFound'
import { SECTEURS } from './data/secteurs'
import { ARTICLES, BASE_RESSOURCES } from './data/ressources'
import { appliquerHead } from './seo/head'
import BandeauCookies from './components/BandeauCookies'
import { initPixel, desactiverPixel, pageVuePixel } from './lib/pixel'
import { activerAnalytics, desactiverAnalytics, pageVue } from './lib/analytics'
import { lireConsentement, surConsentement } from './lib/consentement'
import { useRevealOnScroll, useCounterAnimation } from './hooks/useScrollEffects'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

// Titre, description, partage social et données structurées à jour à chaque page.
function Head() {
  const { pathname } = useLocation()
  useEffect(() => {
    appliquerHead(pathname)
    pageVue()
    pageVuePixel()
  }, [pathname])
  return null
}

// Applique le choix du bandeau cookies : rien n'est chargé sans accord.
function appliquerConsentement(choix) {
  if (choix?.mesure) activerAnalytics({ publicite: choix.publicite })
  else desactiverAnalytics()
  if (choix?.publicite) initPixel()
  else desactiverPixel()
}

export function AppShell() {
  useRevealOnScroll()
  useCounterAnimation()

  useEffect(() => {
    const choix = lireConsentement()
    if (choix) appliquerConsentement(choix)
    return surConsentement(appliquerConsentement)
  }, [])

  return (
    <>
      <ScrollToTop />
      <Head />
      <Routes>
        <Route path="/" element={<FormationLanding />} />
        <Route path="/publicite" element={<PubLanding />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgv" element={<Cgv />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/merci" element={<Thanks />} />
        <Route path="/simulateur" element={<Simulateur />} />
        {SECTEURS.map((s) => (
          <Route key={s.slug} path={s.path} element={<Secteur secteur={s} />} />
        ))}
        <Route path={BASE_RESSOURCES} element={<Ressources />} />
        {ARTICLES.map((a) => (
          <Route key={a.slug} path={a.path} element={<Article article={a} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BandeauCookies />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
