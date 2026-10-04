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
import NotFound from './pages/NotFound'
import { SECTEURS } from './data/secteurs'
import { appliquerHead } from './seo/head'
import { initPixel } from './lib/pixel'
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
  }, [pathname])
  return null
}

export function AppShell() {
  useRevealOnScroll()
  useCounterAnimation()

  useEffect(() => {
    initPixel()
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
        <Route path="*" element={<NotFound />} />
      </Routes>
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
